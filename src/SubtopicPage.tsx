import React, { useEffect, useState } from 'react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db } from './firebase';
import { useParams, useNavigate } from 'react-router-dom';
import { IB_TOPICS } from './ibTopics';
import { IB_SUBTOPIC_INFO } from './ibSubtopicInfo';
import './App.css';

function SubtopicPage() {
  const navigate = useNavigate();
  const { subject, topic, subtopic } = useParams();
  const [showNotes, setShowNotes] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [loading, setLoading] = useState(true);

  // Find the explanation and topic/subtopic objects
  const normalized = subject?.replace(/:.*$/, '').trim();
  const topics = (IB_TOPICS as Record<string, { topic: string; subtopics: string[] }[]>)[normalized || ''];
  const topicObj = topics?.find(t => t.topic === topic);
  const subtopicExists = topicObj?.subtopics.includes(subtopic || '');
  const explanation =
    normalized && topic && subtopic &&
    IB_SUBTOPIC_INFO[normalized]?.[topic]?.[subtopic || ''];

  // Firebase completion state
  const fetchCompletion = async () => {
    setLoading(true);
    try {
      const user = auth.currentUser;
      if (!user || !normalized || !topic || !subtopic) {
        setCompleted(false);
        setLoading(false);
        return;
      }
      const ref = doc(db, 'users', user.uid, 'completion', `${normalized}_${topic}_${subtopic}`);
      const snap = await getDoc(ref);
      setCompleted(!!snap.data()?.completed);
    } catch {
      setCompleted(false);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCompletion();
  }, [normalized, topic, subtopic]);

  async function handleCheck(e: React.ChangeEvent<HTMLInputElement>) {
    const user = auth.currentUser;
    if (!user || !normalized || !topic || !subtopic) return;
    setLoading(true);
    await setDoc(
      doc(db, 'users', user.uid, 'completion', `${normalized}_${topic}_${subtopic}`),
      { completed: e.target.checked },
      { merge: true }
    );
    await fetchCompletion();
    setLoading(false);
  }


  // Helper for subtopic navigation button and progress
  const getSubtopicNav = () => {
    if (!topicObj || !subtopic) return null;
    const idx = topicObj.subtopics.indexOf(subtopic);
    const nextSubtopic = idx >= 0 && idx < topicObj.subtopics.length - 1 ? topicObj.subtopics[idx + 1] : null;
    const progress = idx >= 0 ? `Subtopic ${idx + 1} of ${topicObj.subtopics.length}` : '';
    return (
      <div>
        {progress && (
          <div style={{ color: '#6366f1', fontWeight: 600, fontSize: '1.02rem', marginBottom: 8, textAlign: 'right' }}>{progress}</div>
        )}
        {nextSubtopic ? (
          <button
            className="btn"
            style={{ background: 'linear-gradient(90deg,#f59e42,#fbbf24)', color: '#fff', fontWeight: 700, borderRadius: 8, padding: '10px 24px', fontSize: '1.02rem', boxShadow: '0 2px 8px #6366f133' }}
            onClick={() => navigate(`/subtopic/${subject}/${topic}/${encodeURIComponent(nextSubtopic)}`)}
          >
            Next Subtopic →
          </button>
        ) : (
          <button
            className="btn"
            style={{ background: 'linear-gradient(90deg,#d1d5db,#f3f4f6)', color: '#888', fontWeight: 700, borderRadius: 8, padding: '10px 24px', fontSize: '1.02rem', boxShadow: '0 2px 8px #6366f133', cursor: 'not-allowed' }}
            disabled
            title="You've reached the last subtopic in this topic."
          >
            No More Subtopics
          </button>
        )}
      </div>
    );
  };

  return (
    <div className="dashboard-page" style={{ minHeight: '100vh', padding: 0, background: completed ? 'linear-gradient(135deg, #bbf7d0 0%, #f0fdf4 100%)' : 'linear-gradient(135deg, #e0e7ff 0%, #f8fafc 100%)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '32px 0' }}>
        <button
          className="btn"
          style={{ marginBottom: 18, background: 'linear-gradient(90deg,#6366f1,#60a5fa)', color: '#fff', fontWeight: 600, borderRadius: 8, boxShadow: '0 2px 8px #6366f133' }}
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>
        <header className="dashboard-header" style={{ textAlign: 'center', marginBottom: 32 }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
            <div style={{ background: completed ? '#bbf7d0' : '#fff', borderRadius: '50%', boxShadow: completed ? '0 2px 16px #22c55e33' : '0 2px 16px #6366f133', width: 90, height: 90, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 8, border: completed ? '2px solid #22c55e' : 'none' }}>
              <img src="https://cdn-icons-png.flaticon.com/512/201/201818.png" alt="Math Icon" style={{ width: 60, height: 60, filter: completed ? 'drop-shadow(0 0 8px #22c55e)' : 'none' }} />
            </div>
            <h2 style={{ fontSize: '2.5rem', color: completed ? '#22c55e' : '#6366f1', marginBottom: 0, fontWeight: 800 }}>{subtopic}</h2>
            <p className="dashboard-subtitle" style={{ fontSize: '1.18rem', color: completed ? '#22c55e' : '#444', marginTop: 0 }}>Learn about <strong>{subtopic}</strong> in <span style={{ color: completed ? '#22c55e' : '#6366f1', fontWeight: 600 }}>{topic}</span> (<span style={{ color: completed ? '#22c55e' : '#6366f1', fontWeight: 600 }}>{subject}</span>)</p>
          </div>
        </header>
        <section className="dashboard-section" style={{ maxWidth: 900, margin: '0 auto', marginTop: 0, background: '#fff', borderRadius: 18, boxShadow: '0 2px 24px #6366f133', padding: 40, position: 'relative' }}>
          {subtopicExists ? (
            <div style={{ fontSize: '1.15rem', color: '#222', lineHeight: 1.8 }}>
              {/* Completion checkbox */}
              <div style={{ marginBottom: 18, display: 'flex', alignItems: 'center', gap: 12 }}>
                <input
                  type="checkbox"
                  checked={completed}
                  disabled={loading || !auth.currentUser}
                  onChange={handleCheck}
                  style={{ width: 22, height: 22, accentColor: '#22c55e', cursor: loading ? 'not-allowed' : 'pointer' }}
                  id="subtopic-completed"
                />
                <label htmlFor="subtopic-completed" style={{ fontWeight: 600, color: completed ? '#22c55e' : '#6366f1', fontSize: '1.08rem', cursor: loading ? 'not-allowed' : 'pointer' }}>
                  {completed ? 'Completed!' : 'Mark as completed'}
                </label>
              </div>
              {/* Progress bar and reading time estimate */}
              <div style={{ marginBottom: 24, display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{ flex: 1, background: '#e0e7ff', borderRadius: 8, height: 12, position: 'relative' }}>
                  <div style={{ width: '40%', background: 'linear-gradient(90deg,#6366f1,#60a5fa)', height: '100%', borderRadius: 8 }}></div>
                </div>
                <span style={{ fontSize: '1rem', color: '#6366f1', fontWeight: 600 }}>~15 min read</span>
              </div>
              {/* Callout box */}
              <div style={{ background: 'linear-gradient(90deg,#fef9c3,#fde68a)', borderRadius: 12, padding: '18px 22px', marginBottom: 28, boxShadow: '0 2px 8px #6366f133', fontSize: '1.08rem', color: '#92400e', fontWeight: 600 }}>
                <span role="img" aria-label="lightbulb">💡</span> Key Concept: Sequences and series help you model patterns and solve real-world problems!
              </div>
              <div style={{ textAlign: 'center', marginBottom: 32 }}>
                <img src="https://www.mathsisfun.com/algebra/images/sequence-arithmetic.svg" alt="Arithmetic Sequence Diagram" style={{ maxWidth: '380px', width: '100%', borderRadius: 16, boxShadow: '0 2px 12px #6366f133', background: '#f3f4f6', padding: 8 }} />
                <div style={{ fontSize: '1rem', color: '#555', marginTop: 8, fontStyle: 'italic' }}>Diagram: Arithmetic sequence with evenly spaced terms</div>
              </div>
              {/* Explanation split into sections */}
              {explanation ? (
                explanation.split(/---+/).map((section, idx) => (
                  <div key={idx} style={{ marginBottom: 32 }}>
                    {/* Headings: detect lines starting with # or ## */}
                    {section.trim().split('\n').map((line, i) => {
                      if (line.startsWith('## ')) return <h3 key={i} style={{ color: '#6366f1', fontSize: '1.35rem', margin: '18px 0 10px 0', fontWeight: 700 }}>{line.replace('## ', '')}</h3>;
                      if (line.startsWith('# ')) return <h2 key={i} style={{ color: '#22c55e', fontSize: '1.7rem', margin: '24px 0 12px 0', fontWeight: 800 }}>{line.replace('# ', '')}</h2>;
                      if (line.startsWith('- ')) return <div key={i} style={{ marginLeft: 18, marginBottom: 4, color: '#444' }}>• {line.replace('- ', '')}</div>;
                      if (line.startsWith('**')) return <div key={i} style={{ marginLeft: 18, marginBottom: 4, color: '#6366f1', fontWeight: 600 }}>{line.replace(/\*\*/g, '')}</div>;
                      if (line.startsWith('### ')) return <h4 key={i} style={{ color: '#2563eb', fontSize: '1.13rem', margin: '12px 0 8px 0', fontWeight: 700 }}>{line.replace('### ', '')}</h4>;
                      if (line.match(/^\d+\. /)) return <div key={i} style={{ marginLeft: 18, marginBottom: 4, color: '#22c55e', fontWeight: 600 }}>{line}</div>;
                      return <div key={i} style={{ marginBottom: 4 }}>{line}</div>;
                    })}
                  </div>
                ))
              ) : (
                <>
                  <p><strong>Explanation coming soon!</strong></p>
                  <p>This page will teach you about <strong>{subtopic}</strong> in the context of IB {subject}. More content and resources will be added here.</p>
                </>
              )}
              {/* Did you know box */}
              <div style={{ background: 'linear-gradient(90deg,#e0e7ff,#f3f4f6)', borderRadius: 12, padding: '16px 20px', marginBottom: 28, boxShadow: '0 2px 8px #6366f133', fontSize: '1.05rem', color: '#2563eb', fontWeight: 600 }}>
                <span role="img" aria-label="star">⭐</span>{' '}Did you know? The sum of an infinite geometric series with |r| &lt; 1 is a finite number!
              </div>
              {/* Take Notes button - floating, opens notes in overlay */}
              <button
                className="btn"
                style={{
                  position: 'fixed',
                  bottom: 32,
                  right: 32,
                  zIndex: 1000,
                  background: 'linear-gradient(90deg,#6366f1,#60a5fa)',
                  color: '#fff',
                  fontWeight: 700,
                  borderRadius: 50,
                  padding: '16px 32px',
                  fontSize: '1.12rem',
                  boxShadow: '0 4px 24px #6366f133',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'box-shadow 0.2s',
                }}
                onClick={() => setShowNotes(true)}
                aria-label="Take Notes"
              >
                📝 Take Notes
              </button>
              {/* Notes overlay modal */}
              {showNotes && (
                <div style={{
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  width: '100vw',
                  height: '100vh',
                  background: 'rgba(40, 40, 60, 0.18)',
                  zIndex: 2000,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backdropFilter: 'blur(2px)',
                }}>
                  <div style={{
                    background: '#fff',
                    borderRadius: 18,
                    boxShadow: '0 4px 32px #6366f133',
                    width: 'min(700px,90vw)',
                    minHeight: 420,
                    maxHeight: '90vh',
                    overflowY: 'auto',
                    padding: 32,
                    position: 'relative',
                  }}>
                    <button
                      className="btn"
                      style={{
                        position: 'absolute',
                        top: 18,
                        right: 18,
                        background: 'linear-gradient(90deg,#ef4444,#f59e42)',
                        color: '#fff',
                        fontWeight: 700,
                        borderRadius: 8,
                        padding: '8px 18px',
                        fontSize: '1rem',
                        boxShadow: '0 2px 8px #6366f133',
                        border: 'none',
                        cursor: 'pointer',
                      }}
                      onClick={() => setShowNotes(false)}
                      aria-label="Close Notes"
                    >
                      ✖ Close
                    </button>
                    {/* Notes component in overlay, pass subject/topic/subtopic as props or state */}
                    <h3 style={{ color: '#6366f1', fontWeight: 700, marginBottom: 18 }}>Take Notes for: <span style={{ color: '#22c55e' }}>{subtopic}</span></h3>
                    {/* You can replace below with your Notes component import if needed */}
                    <iframe
                      src="/notes"
                      title="Notes"
                      style={{ width: '100%', height: '340px', border: 'none', borderRadius: 12, background: '#f3f4f6' }}
                    />
                    {/* Alternatively, import and render <Notes subject={subject} topic={topic} subtopic={subtopic} /> if Notes is a React component */}
                  </div>
                </div>
              )}
              {/* Action buttons */}
              <div style={{ display: 'flex', gap: 22, marginTop: 48, justifyContent: 'center' }}>
                <button className="btn" style={{ background: 'linear-gradient(90deg,#6366f1,#60a5fa)', color: '#fff', fontWeight: 700, borderRadius: 8, padding: '12px 32px', fontSize: '1.08rem', boxShadow: '0 2px 8px #6366f133' }} onClick={() => navigate('/flashcards')}>Go to Flashcards</button>
                <button className="btn" style={{ background: 'linear-gradient(90deg,#22c55e,#4ade80)', color: '#fff', fontWeight: 700, borderRadius: 8, padding: '12px 32px', fontSize: '1.08rem', boxShadow: '0 2px 8px #6366f133' }} onClick={() => navigate('/quizzes', { state: { subject, topic } })}>Take a Quiz</button>
              </div>
              {/* Next subtopic button: navigates to next subtopic in topic */}
              <div style={{ textAlign: 'right', marginTop: 36 }}>
                {getSubtopicNav()}
              </div>
            </div>
          ) : (
            <div style={{ color: '#b91c1c', fontWeight: 600, fontSize: '1.2rem', textAlign: 'center', marginTop: 40 }}>Subtopic not found.</div>
          )}
        </section>
      </div>
    </div>
  );
}

export default SubtopicPage;
