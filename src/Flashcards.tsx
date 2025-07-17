import { useState } from 'react';
import { IB_TOPICS } from './ibTopics';
import { useNavigate } from 'react-router-dom';
import './App.css';

// Simple subject list for demo
const SUBJECTS = [
  'Mathematics', 'Biology', 'Chemistry', 'Physics', 'Computer Science', 'Economics', 'History', 'English', 'Other'
];

export type Flashcard = {
  front: string;
  back: string;
};

function Flashcards() {
  const navigate = useNavigate();
  const [selectedSubject, setSelectedSubject] = useState<string>(SUBJECTS[0]);
  const [selectedTopic, setSelectedTopic] = useState('');
  const [selectedSubtopic, setSelectedSubtopic] = useState('');
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
  const [front, setFront] = useState('');
  const [back, setBack] = useState('');
  const [currentIdx, setCurrentIdx] = useState(0);
  const [showBack, setShowBack] = useState(false);

  // Add new card
  const addCard = () => {
    if (front.trim() && back.trim()) {
      setFlashcards([...flashcards, { front: front.trim(), back: back.trim() }]);
      setFront('');
      setBack('');
    }
  };

  // Delete card
  const deleteCard = (idx: number) => {
    setFlashcards(flashcards.filter((_, i) => i !== idx));
    if (currentIdx >= flashcards.length - 1) setCurrentIdx(0);
  };

  // Practice mode
  const nextCard = () => {
    setShowBack(false);
    setCurrentIdx((currentIdx + 1) % flashcards.length);
  };
  const prevCard = () => {
    setShowBack(false);
    setCurrentIdx((currentIdx - 1 + flashcards.length) % flashcards.length);
  };

  return (
    <div className="dashboard-page" style={{ minHeight: '100vh', padding: 24 }}>
      <button className="btn" style={{ marginBottom: 18, background: '#e0e7ff', color: '#222', fontWeight: 600, borderRadius: 8 }} onClick={() => navigate('/dashboard')}>
        ← Back to Dashboard
      </button>
      <header className="dashboard-header">
        <h2>Flashcards</h2>
        <p className="dashboard-subtitle">Create, edit, and practice IB flashcards. Choose a subject and start learning!</p>
      </header>
      <section className="dashboard-section" style={{ maxWidth: 900, margin: '0 auto', marginTop: 24 }}>
        <div style={{ marginBottom: 18 }}>
          <label htmlFor="subject-select" style={{ fontWeight: 600, marginRight: 12 }}>Subject:</label>
          <select id="subject-select" value={selectedSubject} onChange={e => setSelectedSubject(e.target.value)} style={{ fontSize: '1.1rem', padding: '6px 18px', borderRadius: 8 }}>
            {SUBJECTS.map(subj => <option key={subj} value={subj}>{subj}</option>)}
          </select>
          {/* Topic Dropdown */}
          <select
            value={selectedTopic}
            onChange={e => {
              setSelectedTopic(e.target.value);
              setSelectedSubtopic('');
            }}
            style={{ fontSize: '1.1rem', padding: '6px 18px', borderRadius: 8, marginLeft: 12, marginTop: 8 }}
          >
            <option value="">Select Topic</option>
            {((IB_TOPICS as Record<string, { topic: string; subtopics: string[] }[]>)[selectedSubject] || []).map((t: { topic: string; subtopics: string[] }) => (
              <option key={t.topic} value={t.topic}>{t.topic}</option>
            ))}
          </select>
          {/* Subtopic Dropdown */}
          {selectedTopic && (
            <select
              value={selectedSubtopic}
              onChange={e => setSelectedSubtopic(e.target.value)}
              style={{ fontSize: '1.1rem', padding: '6px 18px', borderRadius: 8, marginLeft: 12, marginTop: 8 }}
            >
              <option value="">Select Subtopic</option>
              {(
                ((IB_TOPICS as Record<string, { topic: string; subtopics: string[] }[]>)[selectedSubject] || [])
                  .find((t: { topic: string; subtopics: string[] }) => t.topic === selectedTopic)?.subtopics
              )?.map((sub: string) => (
                <option key={sub} value={sub}>{sub}</option>
              ))}
            </select>
          )}
        </div>
        <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
          {/* Editor */}
          <div style={{ flex: '1 1 320px', minWidth: 320, maxWidth: 400 }}>
            <h4 style={{ marginBottom: 8 }}>Add/Edit Flashcards</h4>
            <input
              type="text"
              value={front}
              onChange={e => setFront(e.target.value)}
              placeholder="Front (Question/Term)"
              style={{ width: '100%', marginBottom: 8, fontSize: '1.05rem', borderRadius: 8, padding: 8 }}
            />
            <input
              type="text"
              value={back}
              onChange={e => setBack(e.target.value)}
              placeholder="Back (Answer/Definition)"
              style={{ width: '100%', marginBottom: 8, fontSize: '1.05rem', borderRadius: 8, padding: 8 }}
            />
            <button className="btn" style={{ background: '#6366f1', color: '#fff', fontWeight: 600, marginBottom: 12 }} onClick={addCard}>Add Card</button>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {flashcards.map((card, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                  <span style={{ flex: 1 }}><strong>Q:</strong> {card.front}</span>
                  {/* Answer is hidden in Created Ones tab */}
                  <button className="btn" style={{ background: '#fee2e2', color: '#b91c1c', fontWeight: 700, padding: '2px 8px' }} onClick={() => deleteCard(i)}>×</button>
                </li>
              ))}
            </ul>
          </div>
          {/* Practice Viewer */}
          <div style={{ flex: '1 1 320px', minWidth: 320, maxWidth: 400 }}>
            <h4 style={{ marginBottom: 8 }}>Practice Flashcards</h4>
            {flashcards.length === 0 ? (
              <div style={{ color: '#b91c1c', marginBottom: 12 }}>No flashcards yet. Add some cards to start practicing!</div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
                <div style={{ background: '#e0e7ff', borderRadius: 12, padding: 24, minWidth: 260, minHeight: 120, fontSize: '1.2rem', fontWeight: 600, textAlign: 'center', boxShadow: '0 2px 12px #6366f133', cursor: 'pointer' }} onClick={() => setShowBack(b => !b)}>
                  {!showBack ? flashcards[currentIdx].front : flashcards[currentIdx].back}
                </div>
                <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
                  <button className="btn" style={{ background: '#6366f1', color: '#fff', fontWeight: 600 }} onClick={prevCard}>Previous</button>
                  <button className="btn" style={{ background: '#6366f1', color: '#fff', fontWeight: 600 }} onClick={nextCard}>Next</button>
                </div>
                <div style={{ marginTop: 8, color: '#6366f1', fontWeight: 500 }}>
                  Card {currentIdx + 1} of {flashcards.length}
                </div>
                <div style={{ fontSize: '0.95rem', color: '#444', marginTop: 2 }}>
                  Click card to flip between question and answer.
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Flashcards;
