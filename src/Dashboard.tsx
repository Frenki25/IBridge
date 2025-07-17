import React, { useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { IB_TOPICS } from './ibTopics';
import { useEffect } from 'react';
import './App.css';
import { auth, db } from './firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';

const IB_SUBJECTS = [
  'Mathematics: Analysis & Approaches',
  'Mathematics: Applications & Interpretation',
  'Biology',
  'Chemistry',
  'Physics',
  'Computer Science',
  'Environmental Systems & Societies',
  'Sports, Exercise & Health Science',
  'Design Technology',
  'Business Management',
  'Economics',
  'Geography',
  'History',
  'Philosophy',
  'Psychology',
  'Social & Cultural Anthropology',
  'World Religions',
  'Language A: Literature',
  'Language A: Language & Literature',
  'Literature & Performance',
  'Language B (various languages)',
  'Classical Languages',
  'Visual Arts',
  'Music',
  'Theatre',
  'Film',
  'Dance',
  'Global Politics',
  'Further Mathematics HL',
  'Information Technology in a Global Society',
  'French B',
  'Spanish B',
  'German B',
  'Mandarin B',
  'English B',
  'Italian B',
  'Japanese B',
  'Russian B',
  'Arabic B',
  'Hindi B',
  'Korean B',
  'Portuguese B',
  'Turkish B',
  'Polish B',
  'Swedish B',
  'Dutch B',
  'Greek B',
  'Hebrew B',
  'Norwegian B',
  'Danish B',
  'Finnish B',
  'Czech B',
  'Slovak B',
  'Romanian B',
  'Ukrainian B',
  'Serbian B',
  'Croatian B',
  'Slovenian B',
  'Bulgarian B',
  'Hungarian B',
  'Persian B',
  'Thai B',
  'Vietnamese B',
  'Indonesian B',
  'Malay B',
  'Swahili B',
  'Zulu B',
  'Afrikaans B',
  'Other School-supported Self-taught Languages'
];

function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>(() => {
    if (location.state && location.state.selectedSubjects) {
      return location.state.selectedSubjects;
    }
    // Default: first 6 subjects
    return IB_SUBJECTS.slice(0, 6);
  });
  const [timerActive, setTimerActive] = useState(false);
  const [timerStart, setTimerStart] = useState<number | null>(null);
  const [timerElapsed, setTimerElapsed] = useState(0);
  const [user, setUser] = useState(() => auth.currentUser);
  const [studyTime, setStudyTime] = useState<number>(0);
  const timerInterval = useRef<NodeJS.Timeout | null>(null);
  // Track which subject cards are expanded
  const [expandedSubjects, setExpandedSubjects] = useState<{ [subject: string]: boolean }>({});
  const [subjectProgress, setSubjectProgress] = useState<Record<string, number>>({});

  // Load per-subject progress from Firebase
  useEffect(() => {
    async function fetchProgress() {
      if (!user) return;
      const newProgress: Record<string, number> = {};
      for (const subject of selectedSubjects) {
        const normalized = subject.replace(/:.*$/, '').trim();
        const topics = (IB_TOPICS as Record<string, { topic: string; subtopics: string[] }[]>)[normalized || ''];
        let total = 0;
        let completed = 0;
        if (topics) {
          for (const t of topics) {
            for (const sub of t.subtopics) {
              total++;
              try {
                const ref = doc(db, 'users', user.uid, 'completion', `${normalized}_${t.topic}_${sub}`);
                const snap = await getDoc(ref);
                if (snap.data()?.completed) completed++;
              } catch {}
            }
          }
        }
        newProgress[subject] = total > 0 ? Math.round((completed / total) * 100) : 0;
      }
      setSubjectProgress(newProgress);
    }
    fetchProgress();
  }, [user, selectedSubjects]);

  // Load user and study time from Firestore
  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser);
      if (firebaseUser) {
        getDoc(doc(db, 'users', firebaseUser.uid)).then((userDoc) => {
          if (userDoc.exists()) {
            const data = userDoc.data() as any;
            setStudyTime(data.totalStudyTime || 0);
          }
        });
      }
    });
    return unsubscribe;
  }, []);

  // Update selected subjects in Firestore when changed
  React.useEffect(() => {
    if (user) {
      updateDoc(doc(db, 'users', user.uid), {
        subjects: selectedSubjects,
      });
    }
  }, [selectedSubjects, user]);

  React.useEffect(() => {
    if (location.state && location.state.selectedSubjects) {
      setSelectedSubjects(location.state.selectedSubjects);
    }
    // eslint-disable-next-line
  }, [location.state]);

  // Timer logic
  // Timer logic (fixed)
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleStartTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    const start = Date.now();
    setTimerStart(start);
    setTimerElapsed(0);
    setTimerActive(true);
    timerRef.current = setInterval(() => {
      setTimerElapsed(Math.floor((Date.now() - start) / 1000));
    }, 1000);
  };

  const handleStopTimer = async () => {
    setTimerActive(false);
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    if (!user || timerStart === null) return;
    const elapsedMinutes = Math.round((Date.now() - timerStart) / 60000);
    const newTotal = studyTime + elapsedMinutes;
    setStudyTime(newTotal);
    setTimerStart(null);
    setTimerElapsed(0);
    // Update Firestore
    try {
      await updateDoc(doc(db, 'users', user.uid), {
        totalStudyTime: newTotal,
      });
    } catch (err) {
      // Optionally show error to user
      console.error('Failed to update study time:', err);
    }
  };

  return (
    <div className="dashboard-page">
      <header className="dashboard-header">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h2>Welcome to your Dashboard!</h2>
            <p className="dashboard-subtitle">Track your IB journey, manage your subjects, and boost your study performance.</p>
          </div>
          <button className="btn" style={{ height: 40 }} onClick={() => navigate('/profile')}>Profile</button>
        </div>
      </header>
      <section className="dashboard-section subjects-section">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
          <h3>Your IB Subjects</h3>
          <button className="btn" onClick={() => navigate('/edit-subjects', { state: { selectedSubjects } })}>
            Edit Subjects
          </button>
        </div>
        <div className="subjects-grid">
          {selectedSubjects.map(subject => {
            const percent = subjectProgress[subject] ?? 0;
            return (
              <div className="subject-card" key={subject}>
                <h4>{subject}</h4>
                <div style={{ margin: '10px 0 8px 0', width: '100%', background: '#e0e7ff', borderRadius: 8, height: 16, position: 'relative' }}>
                  <div style={{ width: `${percent}%`, background: 'linear-gradient(90deg,#22c55e,#bbf7d0)', height: '100%', borderRadius: 8, transition: 'width 0.5s' }}></div>
                  <span style={{ position: 'absolute', left: '50%', top: 0, transform: 'translateX(-50%)', color: percent > 50 ? '#fff' : '#22c55e', fontWeight: 700, fontSize: '1rem', lineHeight: '16px' }}>{percent}%</span>
                </div>
                <button className="btn" onClick={() => navigate(`/subject/${encodeURIComponent(subject)}/topics`)}>
                  View Topics
                </button>
              </div>
            );
          })}
        </div>
      </section>
      <section className="dashboard-section tools-section">
        <h3>Study Tools</h3>
        <div className="tools-grid">
          <div className="tool-card">
            <h4>Study Timer</h4>
            <p>Track your focused study sessions.</p>
            {!timerActive ? (
              <button className="btn" onClick={handleStartTimer}>Start Timer</button>
            ) : (
              <>
                <div style={{ fontSize: '1.2rem', margin: '10px 0' }}>
                  Studying... {Math.floor(timerElapsed / 60)}m {timerElapsed % 60}s
                </div>
                <button className="btn" onClick={handleStopTimer}>Stop & Save</button>
              </>
            )}
            <div style={{ marginTop: 10, color: '#6366f1', fontWeight: 500 }}>
              Total Study Time: {Math.floor(studyTime / 60)}h {studyTime % 60}m
            </div>
          </div>
          <div className="tool-card">
            <h4>Notes</h4>
            <p>Organize your IB notes in one place.</p>
            <button className="btn" onClick={() => navigate('/notes')}>Open Notes</button>
          </div>
          <div className="tool-card">
            <h4>Badges</h4>
            <p>Earn achievements for your progress.</p>
            <button className="btn">View Badges</button>
          </div>
          <div className="tool-card">
            <h4>Flashcards</h4>
            <p>Practice and master IB concepts with custom flashcards.</p>
            <button className="btn" onClick={() => navigate('/flashcards')}>Open Flashcards</button>
          </div>
        </div>
      </section>
      <section className="dashboard-section progress-section">
        <h3>Progress Overview</h3>
        <div className="progress-summary">
          <div className="progress-bar-bg">
            <div className="progress-bar-fill" style={{ width: '68%' }}></div>
          </div>
          <p>Overall Progress: <strong>68%</strong></p>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
