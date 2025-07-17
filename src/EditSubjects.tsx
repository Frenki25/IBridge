import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './App.css';

const IB_CATEGORIES = [
  {
    name: 'Studies in Language & Literature',
    icon: '📖',
    subjects: [
      'English A: Literature',
      'English A: Language & Literature',
      'French A',
      'Spanish A',
      'German A',
    ],
  },
  {
    name: 'Language Acquisition',
    icon: '🗣️',
    subjects: [
      'English B',
      'French B',
      'Spanish B',
      'German B',
    ],
  },
  {
    name: 'Individuals & Societies',
    icon: '🌍',
    subjects: [
      'Business Management',
      'Economics',
      'Geography',
      'History',
      'Philosophy',
      'Psychology',
      'Global Politics',
    ],
  },
  {
    name: 'Sciences',
    icon: '🔬',
    subjects: [
      'Biology',
      'Chemistry',
      'Physics',
      'Computer Science',
      'Environmental Systems & Societies',
      'Sports, Exercise & Health Science',
      'Design Technology',
    ],
  },
  {
    name: 'Mathematics',
    icon: '➗',
    subjects: [
      'Mathematics: Analysis & Approaches',
      'Mathematics: Applications & Interpretation',
      'Further Mathematics HL',
    ],
  }
];

function EditSubjects() {
  const navigate = useNavigate();
  const location = useLocation();
  const initialSelected = (location.state && location.state.selectedSubjects) || [];
  const [selected, setSelected] = useState<string[]>(initialSelected);

  const toggleSubject = (subject: string) => {
    setSelected(prev => prev.includes(subject)
      ? prev.filter(s => s !== subject)
      : [...prev, subject]
    );
  };

  const handleSave = () => {
    navigate('/dashboard', { state: { selectedSubjects: selected } });
  };

  return (
    <div className="dashboard-page">
      <header className="dashboard-header">
        <h2>Edit Your IB Subjects</h2>
        <p className="dashboard-subtitle">Pick your subjects by clicking the cards below. Selected subjects will appear on your dashboard.</p>
      </header>
      <section className="dashboard-section subjects-section">
        {IB_CATEGORIES.map(category => (
          <div key={category.name} style={{ marginBottom: 32 }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '1.2rem' }}>{category.icon} {category.name}</h3>
            <div className="subjects-grid">
              {category.subjects.map(subject => (
                <div
                  key={subject}
                  className={`subject-card subject-toggle-card${selected.includes(subject) ? ' selected' : ''}`}
                  onClick={() => toggleSubject(subject)}
                  style={{ cursor: 'pointer', border: selected.includes(subject) ? '2.5px solid #646cff' : '2.5px solid transparent', boxShadow: selected.includes(subject) ? '0 4px 16px #646cff22' : undefined }}
                >
                  <span style={{ fontWeight: 600, fontSize: '1.08rem' }}>{subject}</span>
                  <div style={{ marginTop: 16 }}>
                    <span className={`subject-toggle ${selected.includes(subject) ? 'on' : ''}`}></span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div style={{ marginTop: 24, textAlign: 'center' }}>
          <button className="btn" onClick={handleSave} type="button" style={{ fontSize: '1.1rem', padding: '12px 32px' }}>
            Save Subjects
          </button>
        </div>
      </section>
    </div>
  );
}

export default EditSubjects;
