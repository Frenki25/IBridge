import React, { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from './firebase';
import { useParams, useNavigate } from 'react-router-dom';
import { IB_TOPICS } from './ibTopics';
import './App.css';

function TopicsPage() {
  const navigate = useNavigate();
  const { subject } = useParams();
  const normalized = subject?.replace(/:.*$/, '').trim();
  const topics = (IB_TOPICS as Record<string, { topic: string; subtopics: string[] }[]>)[normalized || ''];
  const [completedMap, setCompletedMap] = useState<Record<string, boolean>>({});

  const fetchAllCompletion = async () => {
    const user = auth.currentUser;
    if (!user || !topics) return;
    const newMap: Record<string, boolean> = {};
    for (const t of topics) {
      for (const sub of t.subtopics) {
        try {
          const ref = doc(db, 'users', user.uid, 'completion', `${normalized}_${t.topic}_${sub}`);
          const snap = await getDoc(ref);
          newMap[`${t.topic}_${sub}`] = !!snap.data()?.completed;
        } catch {
          newMap[`${t.topic}_${sub}`] = false;
        }
      }
    }
    setCompletedMap(newMap);
  };

  useEffect(() => {
    fetchAllCompletion();
    // Listen for completion changes
    const handler = () => fetchAllCompletion();
    window.addEventListener('subtopicCompletionChanged', handler);
    return () => window.removeEventListener('subtopicCompletionChanged', handler);
  }, [normalized, topics]);

  return (
    <div className="dashboard-page" style={{ minHeight: '100vh', padding: 24 }}>
      <button className="btn" style={{ marginBottom: 18, background: '#e0e7ff', color: '#222', fontWeight: 600, borderRadius: 8 }} onClick={() => navigate(-1)}>
        ← Back
      </button>
      <header className="dashboard-header">
        <h2>{subject} Topics</h2>
        <p className="dashboard-subtitle">Explore all IB topics and subtopics for <strong>{subject}</strong></p>
      </header>
      <section className="dashboard-section" style={{ maxWidth: 900, margin: '0 auto', marginTop: 24 }}>
        {topics ? (
          <ul style={{ paddingLeft: 18 }}>
            {topics.map(t => (
              <li key={t.topic} style={{ marginBottom: 12 }}>
                <span style={{ fontWeight: 600 }}>{t.topic}</span>
                <ul style={{ paddingLeft: 16, marginTop: 2 }}>
                  {t.subtopics.map(sub => (
                    <li key={sub} style={{ fontSize: '0.98rem', color: completedMap[`${t.topic}_${sub}`] ? '#22c55e' : '#444', fontWeight: completedMap[`${t.topic}_${sub}`] ? 700 : 500 }}>
                      <button
                        className="btn"
                        style={{
                          background: completedMap[`${t.topic}_${sub}`] ? 'linear-gradient(90deg,#bbf7d0,#22c55e33)' : '#e0e7ff',
                          color: completedMap[`${t.topic}_${sub}`] ? '#22c55e' : '#222',
                          fontWeight: 500,
                          borderRadius: 8,
                          padding: '2px 10px',
                          boxShadow: completedMap[`${t.topic}_${sub}`] ? '0 2px 8px #22c55e33' : 'none',
                          border: completedMap[`${t.topic}_${sub}`] ? '2px solid #22c55e' : 'none',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 8,
                        }}
                        onClick={() => navigate(`/subject/${encodeURIComponent(subject || '')}/${encodeURIComponent(t.topic)}/${encodeURIComponent(sub)}`)}
                      >
                        {completedMap[`${t.topic}_${sub}`] && (
                          <span style={{ fontSize: '1.1em' }}>✔️</span>
                        )}
                        <span>{sub}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        ) : (
          <div style={{ color: '#b91c1c', fontWeight: 600 }}>No topics found for this subject.</div>
        )}
      </section>
    </div>
  );
}

export default TopicsPage;
