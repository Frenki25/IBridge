import React, { useEffect, useState } from 'react';
import { auth, db } from './firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';

import './App.css';
import { useNavigate, useLocation } from 'react-router-dom';


function Profile() {
  const [profile, setProfile] = useState<{name: string, surname: string, email: string, totalStudyTime?: number, badges?: string[] } | null>(null);
  const [editProfile, setEditProfile] = useState<{name: string, surname: string, email: string}>({ name: '', surname: '', email: '' });
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(() => auth.currentUser);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  // Try to get selected subjects from dashboard navigation state
  const selectedSubjects = (location.state && location.state.selectedSubjects) || [];

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser);
      console.log('Auth state changed:', firebaseUser);
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    const fetchProfile = async () => {
      console.log('Fetching profile for user:', user);
      if (user === undefined) return; // still loading auth
      if (!user) {
        setLoading(false);
        return;
      }
      try {
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        console.log('Firestore userDoc.exists:', userDoc.exists());
        if (userDoc.exists()) {
          const data = userDoc.data() as any;
          setProfile(data);
          setEditProfile({
            name: data.name || '',
            surname: data.surname || '',
            email: data.email || '',
          });
        }
      } catch (err) {
        console.error('Error fetching user profile:', err);
      }
      setLoading(false);
    };
    fetchProfile();
  }, [user]);

  const handleEdit = () => {
    setEditing(true);
    setSuccess('');
    setError('');
  };

  const handleCancel = () => {
    setEditing(false);
    setEditProfile(profile!);
    setSuccess('');
    setError('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditProfile({ ...editProfile, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    if (!user) return;
    setUploading(true);
    setError('');
    setSuccess('');
    try {
      await updateDoc(doc(db, 'users', user.uid), {
        name: editProfile.name,
        surname: editProfile.surname,
        email: editProfile.email,
        photoURL: editProfile.photoURL || '',
      });
      setProfile(editProfile);
      setEditing(false);
      setSuccess('Profile updated!');
    } catch (err) {
      setError('Failed to update profile.');
    }
    setUploading(false);
  };


  if (loading) return <div className="dashboard-page"><div className="dashboard-header"><h2>Loading profile...</h2></div></div>;
  if (!profile) return <div className="dashboard-page"><div className="dashboard-header"><h2>Profile not found</h2></div></div>;

  return (
    <div className="dashboard-page" style={{ background: 'linear-gradient(135deg, #e0e7ff 0%, #fff 100%)', minHeight: '100vh' }}>
      <header className="dashboard-header">
        <h2>Your Profile</h2>
        <p className="dashboard-subtitle">Manage your account details and personalize your profile.</p>
      </header>
      <section className="dashboard-section" style={{ maxWidth: 520, margin: '0 auto', background: '#fff', borderRadius: 16, boxShadow: '0 4px 24px #b6c6e6', padding: 32, marginTop: 32 }}>
        <div style={{ flex: 1 }}>
          {editing ? (
            <>
              <input className="profile-input" name="name" value={editProfile.name} onChange={handleChange} placeholder="Name" style={{ marginBottom: 10 }} />
              <input className="profile-input" name="surname" value={editProfile.surname} onChange={handleChange} placeholder="Surname" style={{ marginBottom: 10 }} />
              <input className="profile-input" name="email" value={editProfile.email} onChange={handleChange} placeholder="Email" style={{ marginBottom: 10 }} />
            </>
          ) : (
            <>
              <div style={{ fontSize: '1.2rem', fontWeight: 600 }}>{profile.name} {profile.surname}</div>
              <div style={{ color: '#6366f1', fontSize: '1.05rem', marginBottom: 6 }}>{profile.email}</div>
              <div style={{ margin: '18px 0', fontSize: '1.1rem' }}>
                <strong>Total Study Time:</strong> {profile.totalStudyTime ? `${Math.floor(profile.totalStudyTime / 60)}h ${profile.totalStudyTime % 60}m` : '0h 0m'}
              </div>
              <div style={{ margin: '18px 0', fontSize: '1.1rem' }}>
                <strong>Badges:</strong>
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 8 }}>
                  {profile.badges && profile.badges.length > 0 ? (
                    profile.badges.map((badge, idx) => (
                      <span key={idx} style={{ background: '#e0e7ff', color: '#3730a3', borderRadius: 12, padding: '6px 14px', fontWeight: 500, fontSize: '1rem', boxShadow: '0 2px 8px #b6c6e6' }}>{badge}</span>
                    ))
                  ) : (
                    <span style={{ color: '#888' }}>No badges yet</span>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
        <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
          {editing ? (
            <>
              <button className="btn" onClick={handleSave} disabled={uploading} style={{ background: '#6366f1', color: '#fff' }}>Save Changes</button>
              <button className="btn" onClick={handleCancel} disabled={uploading} style={{ background: '#e5e7eb', color: '#222' }}>Cancel</button>
            </>
          ) : (
            <button className="btn" onClick={handleEdit} style={{ background: '#6366f1', color: '#fff' }}>Edit Profile</button>
          )}
          <button className="btn" onClick={() => navigate('/dashboard')} style={{ background: '#e5e7eb', color: '#222' }}>Back to Dashboard</button>
        </div>
        {error && <div style={{ color: 'red', marginTop: 12 }}>{error}</div>}
        {success && <div style={{ color: 'green', marginTop: 12 }}>{success}</div>}
      </section>
      {selectedSubjects.length > 0 && (
        <section className="dashboard-section" style={{ maxWidth: 700, margin: '32px auto 0 auto' }}>
          <h3 style={{ marginBottom: 18 }}>Your IB Subjects</h3>
          <div className="subjects-grid">
            {selectedSubjects.map((subject: string) => (
              <div className="subject-card" key={subject}>
                <h4>{subject}</h4>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default Profile;
