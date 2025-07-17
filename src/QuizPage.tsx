
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { IB_SUBTOPIC_INFO } from './ibSubtopicInfo';
import './App.css';

function aiGenerateQuestion(subject, topic, type) {
  // Simulate AI generation using explanation text
  const explanation = IB_SUBTOPIC_INFO[subject]?.[topic];
  if (!explanation) return null;
  if (type === 'multiple') {
    return {
      question: `Which of the following best describes ${topic}?`,
      options: [
        'Option A',
        'Option B',
        'Option C',
        'Option D',
      ],
      answer: 'Option A', // Placeholder
    };
  } else if (type === 'short') {
    return {
      question: `Briefly explain the main idea of ${topic}.`,
      answer: 'Sample answer', // Placeholder
    };
  } else if (type === 'long') {
    return {
      question: `Write a detailed explanation about ${topic}.`,
      answer: 'Sample long answer', // Placeholder
    };
  }
  return null;
}

function QuizPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { subject, topic } = location.state || {};
  const [type, setType] = useState(null);
  const [question, setQuestion] = useState(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [result, setResult] = useState(null);

  const handleTypeSelect = (t) => {
    setType(t);
    setResult(null);
    setUserAnswer('');
    setQuestion(aiGenerateQuestion(subject, topic, t));
  };

  const handleSubmit = () => {
    if (!question) return;
    if (type === 'multiple') {
      setResult(userAnswer === question.answer ? 'Correct!' : 'Incorrect.');
    } else {
      // For short/long answer, just show a placeholder check
      setResult('Answer submitted! (AI evaluation coming soon)');
    }
  };

  if (!subject || !topic) {
    return <div style={{ padding: 40 }}>No topic selected for quiz.</div>;
  }

  return (
    <div className="dashboard-page" style={{ minHeight: '100vh', padding: 0 }}>
      <div style={{ maxWidth: 700, margin: '0 auto', padding: '32px 0' }}>
        <button className="btn" style={{ marginBottom: 18 }} onClick={() => navigate(-1)}>
          ← Back
        </button>
        <header style={{ textAlign: 'center', marginBottom: 32 }}>
          <h2 style={{ fontSize: '2.2rem', color: '#6366f1', fontWeight: 800 }}>Quiz: {topic}</h2>
          <p style={{ fontSize: '1.15rem', color: '#444' }}>Choose a question type and test your understanding of <strong>{topic}</strong> in <strong>{subject}</strong>.</p>
        </header>
        <div style={{ display: 'flex', gap: 18, justifyContent: 'center', marginBottom: 32 }}>
          <button className="btn" style={{ background: 'linear-gradient(90deg,#6366f1,#60a5fa)', color: '#fff', fontWeight: 700, borderRadius: 8, padding: '12px 24px', fontSize: '1.08rem' }} onClick={() => handleTypeSelect('multiple')}>Multiple Choice</button>
          <button className="btn" style={{ background: 'linear-gradient(90deg,#22c55e,#4ade80)', color: '#fff', fontWeight: 700, borderRadius: 8, padding: '12px 24px', fontSize: '1.08rem' }} onClick={() => handleTypeSelect('short')}>Short Answer</button>
          <button className="btn" style={{ background: 'linear-gradient(90deg,#f59e42,#fbbf24)', color: '#fff', fontWeight: 700, borderRadius: 8, padding: '12px 24px', fontSize: '1.08rem' }} onClick={() => handleTypeSelect('long')}>Long Answer</button>
        </div>
        {question && (
          <section style={{ background: '#fff', borderRadius: 18, boxShadow: '0 2px 24px #6366f133', padding: 40, marginBottom: 24 }}>
            <div style={{ fontSize: '1.18rem', fontWeight: 700, marginBottom: 18 }}>{question.question}</div>
            {type === 'multiple' ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 18 }}>
                {question.options.map((opt, idx) => (
                  <button
                    key={idx}
                    className={`btn ${userAnswer === opt ? 'selected' : ''}`}
                    style={{
                      background: userAnswer === opt ? 'linear-gradient(90deg,#22c55e,#bbf7d0)' : 'linear-gradient(90deg,#e0e7ff,#f3f4f6)',
                      color: userAnswer === opt ? '#fff' : '#6366f1',
                      fontWeight: 600,
                      borderRadius: 8,
                      padding: '12px 18px',
                      fontSize: '1.08rem',
                      boxShadow: '0 2px 8px #6366f133',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                    onClick={() => setUserAnswer(opt)}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            ) : (
              <textarea
                value={userAnswer}
                onChange={e => setUserAnswer(e.target.value)}
                rows={type === 'long' ? 8 : 3}
                style={{ width: '100%', fontSize: '1.08rem', borderRadius: 8, border: '1px solid #e0e7ff', padding: 12, marginBottom: 18 }}
                placeholder={type === 'long' ? 'Write your detailed answer here...' : 'Write your answer here...'}
              />
            )}
            <button className="btn" style={{ marginTop: 8, background: 'linear-gradient(90deg,#6366f1,#60a5fa)', color: '#fff', fontWeight: 700, borderRadius: 8, padding: '12px 32px', fontSize: '1.08rem' }} onClick={handleSubmit} disabled={!userAnswer}>
              Submit Answer
            </button>
            {result && <div style={{ marginTop: 18, fontWeight: 700, color: result === 'Correct!' ? '#22c55e' : '#f59e42', fontSize: '1.12rem' }}>{result}</div>}
          </section>
        )}
      </div>
    </div>
  );
}

export default QuizPage;
