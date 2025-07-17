
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import { db, auth } from './firebase';
import { collection, addDoc, getDocs, query, where, doc, getDoc, deleteDoc } from 'firebase/firestore';
import GraphingCalculator from './GraphingCalculator';
import { evaluate, pi, e } from 'mathjs';

const SUBJECTS = [
  'Mathematics', 'Biology', 'Chemistry', 'Physics', 'Computer Science', 'Economics', 'History', 'English', 'French', 'Spanish', 'Other'
];


function Notes() {
  const [selectedSubject, setSelectedSubject] = useState(SUBJECTS[0]);
  const [noteContent, setNoteContent] = useState('');
  const [noteName, setNoteName] = useState('');
  const [notesList, setNotesList] = useState<{id: string, name: string, subject: string, content: string}[]>([]);
  const [loadingNotes, setLoadingNotes] = useState(false);
  const [noteSavedMsg, setNoteSavedMsg] = useState('');
  const [showDeleteModal, setShowDeleteModal] = useState<{ open: boolean, noteId: string | null }>({ open: false, noteId: null });
  const navigate = useNavigate();
  const [user, setUser] = useState(() => auth.currentUser);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser);
    });
    return unsubscribe;
  }, []);

  // Load notes for user
  useEffect(() => {
    if (!user) return;
    setLoadingNotes(true);
    const q = query(collection(db, 'notes'), where('uid', '==', user.uid));
    getDocs(q).then(snapshot => {
      const notes = snapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          name: data.name || '',
          subject: data.subject || '',
          content: data.content || '',
        };
      });
      setNotesList(notes);
      setLoadingNotes(false);
    });
  }, [user, noteSavedMsg]);

  const handleSaveNote = async () => {
    if (!user || !noteName.trim()) {
      alert('Please enter a name for your note.');
      return;
    }
    await addDoc(collection(db, 'notes'), {
      uid: user.uid,
      name: noteName,
      subject: selectedSubject,
      content: noteContent,
      createdAt: new Date().toISOString(),
    });
    setNoteName('');
    setNoteContent('');
    setNoteSavedMsg('Note saved!');
    setTimeout(() => setNoteSavedMsg(''), 2000);
  };


  const handleLoadNote = async (noteId: string) => {
    const noteDoc = await getDoc(doc(db, 'notes', noteId));
    if (noteDoc.exists()) {
      const data = noteDoc.data();
      setNoteName(data.name || '');
      setSelectedSubject(data.subject || SUBJECTS[0]);
      setNoteContent(data.content || '');
    }
  };

  const handleDeleteNote = async (noteId: string) => {
    setShowDeleteModal({ open: true, noteId });
  };

  const confirmDeleteNote = async () => {
    if (!showDeleteModal.noteId) return;
    await deleteDoc(doc(db, 'notes', showDeleteModal.noteId));
    setShowDeleteModal({ open: false, noteId: null });
    setNoteSavedMsg('Note deleted.');
    setTimeout(() => setNoteSavedMsg(''), 2000);
  };

  return (
    <div className="dashboard-page" style={{ height: '100vh', overflow: 'auto' }}>
      <div style={{ position: 'relative', minHeight: 0 }}>
        <button
          className="btn"
          style={{ position: 'absolute', left: 0, top: 0, margin: 12, background: '#e0e7ff', color: '#222', fontWeight: 600, borderRadius: 8, zIndex: 10 }}
          onClick={() => navigate('/dashboard')}
        >
          ← Back to Dashboard
        </button>
        <header className="dashboard-header" style={{ paddingLeft: 120 }}>
          <h2>Notes</h2>
          <p className="dashboard-subtitle">Pick a subject and take notes. Use drawing tools, calculator, and special symbols for math/science.</p>
        </header>
      </div>
      <section className="dashboard-section" style={{ maxWidth: 900, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 0, minHeight: 0 }}>
        <div style={{ marginBottom: 18 }}>
          <label htmlFor="subject-select" style={{ fontWeight: 600, marginRight: 12 }}>Subject:</label>
          <select id="subject-select" value={selectedSubject} onChange={e => setSelectedSubject(e.target.value)} style={{ fontSize: '1.1rem', padding: '6px 18px', borderRadius: 8 }}>
            {SUBJECTS.map(subj => <option key={subj} value={subj}>{subj}</option>)}
          </select>
        </div>
        <div style={{ marginBottom: 18 }}>
          <input
            type="text"
            value={noteName}
            onChange={e => setNoteName(e.target.value)}
            placeholder="Note name (e.g. Math - Integration)"
            style={{ fontSize: '1.1rem', borderRadius: 8, padding: 10, width: '100%', marginBottom: 8 }}
          />
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, marginBottom: 18 }}>
          <div style={{ flex: '1 1 350px', minWidth: 320, maxWidth: 500, display: 'flex', flexDirection: 'column', gap: 18 }}>
            <textarea
              value={noteContent}
              onChange={e => setNoteContent(e.target.value)}
              placeholder="Write your notes here..."
              style={{ width: '100%', minHeight: 180, fontSize: '1.1rem', borderRadius: 8, padding: 12, marginBottom: 8, resize: 'vertical' }}
            />
            <SpecialKeyboard onInsert={symbol => setNoteContent(noteContent + symbol)} />
            <div style={{ marginTop: 8, display: 'flex', flexDirection: 'column', gap: 18 }}>
              <DrawingTools />
              <StudyTimer />
              <FormulaSheet />
              <StudyTodoList />
            </div>



export default Notes;

          </div>
          <div style={{ flex: '1 1 320px', minWidth: 260, maxWidth: 360, display: 'flex', flexDirection: 'column', gap: 18, marginLeft: 40 }}>
            <Calculator />
            <GraphingCalculator />
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 12, marginBottom: 12 }}>
          <button className="btn" style={{ marginTop: 0 }} onClick={handleSaveNote}>Save Note</button>
          {noteSavedMsg && <span style={{ color: 'green', fontWeight: 500 }}>{noteSavedMsg}</span>}
          <button className="btn" style={{}} onClick={() => navigate('/dashboard')}>Back to Dashboard</button>
        </div>
        <div style={{ marginTop: 32 }}>
          <h3>Your Saved Notes</h3>
          {loadingNotes ? <div>Loading notes...</div> : (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
              <button
                className="btn"
                style={{ background: '#f1f5f9', color: '#222', minWidth: 120, fontWeight: 600, border: '2px dashed #6366f1' }}
                onClick={() => {
                  setNoteName('');
                  setSelectedSubject(SUBJECTS[0]);
                  setNoteContent('');
                }}
              >
                + New Blank Note
              </button>
              {notesList.filter(note => note.name && note.subject).length === 0 ? (
                <span>No notes yet.</span>
              ) : (
                notesList.filter(note => note.name && note.subject).map(note => (
                  <div key={note.id} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <button className="btn" style={{ background: '#e0e7ff', color: '#222', minWidth: 120 }} onClick={() => handleLoadNote(note.id)}>
                      {note.name} ({note.subject})
                    </button>
                    <button
                      className="btn"
                      style={{ background: '#fee2e2', color: '#b91c1c', minWidth: 32, padding: '4px 8px', fontWeight: 700 }}
                      title="Delete note"
                      onClick={() => handleDeleteNote(note.id)}
                    >
                      ×
                    </button>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </section>

      {/* Delete Confirmation Modal */}
      {showDeleteModal.open && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(0,0,0,0.25)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <div style={{ background: '#fff', borderRadius: 12, padding: 32, minWidth: 320, boxShadow: '0 4px 24px #0002', textAlign: 'center' }}>
            <h3 style={{ marginBottom: 16 }}>Delete Note?</h3>
            <p style={{ marginBottom: 24 }}>Are you sure you want to delete this note? This action cannot be undone.</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 18 }}>
              <button className="btn" style={{ background: '#fee2e2', color: '#b91c1c', fontWeight: 700 }} onClick={confirmDeleteNote}>Delete</button>
              <button className="btn" style={{ background: '#e0e7ff', color: '#222' }} onClick={() => setShowDeleteModal({ open: false, noteId: null })}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// --- Drawing Tools Placeholder ---
const useLocalState = useState;
type Shape =
  | { type: 'pen'; points: { x: number; y: number }[] }
  | { type: 'line'; start: { x: number; y: number }; end: { x: number; y: number } }
  | { type: 'rect'; start: { x: number; y: number }; end: { x: number; y: number } }
  | { type: 'circle'; start: { x: number; y: number }; end: { x: number; y: number } }
  | { type: 'eraser'; points: { x: number; y: number }[] };

function DrawingTools() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [tool, setTool] = useLocalState<'pen' | 'line' | 'rect' | 'circle' | 'eraser'>('pen');
  const [drawing, setDrawing] = useLocalState(false);
  const [start, setStart] = useLocalState<{ x: number; y: number } | null>(null);
  const [shapes, setShapes] = useLocalState<Shape[]>([]);

  // Draw all shapes
  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const shape of shapes) {
      ctx.beginPath();
      if (shape.type === 'pen') {
        ctx.moveTo(shape.points[0].x, shape.points[0].y);
        for (const pt of shape.points) ctx.lineTo(pt.x, pt.y);
        ctx.strokeStyle = '#6366f1';
        ctx.lineWidth = 2;
        ctx.stroke();
      } else if (shape.type === 'eraser') {
        ctx.moveTo(shape.points[0].x, shape.points[0].y);
        for (const pt of shape.points) ctx.lineTo(pt.x, pt.y);
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 12;
        ctx.stroke();
      } else if (shape.type === 'line') {
        ctx.moveTo(shape.start.x, shape.start.y);
        ctx.lineTo(shape.end.x, shape.end.y);
        ctx.strokeStyle = '#6366f1';
        ctx.lineWidth = 2;
        ctx.stroke();
      } else if (shape.type === 'rect') {
        ctx.strokeStyle = '#6366f1';
        ctx.lineWidth = 2;
        ctx.strokeRect(shape.start.x, shape.start.y, shape.end.x - shape.start.x, shape.end.y - shape.start.y);
      } else if (shape.type === 'circle') {
        const r = Math.sqrt(Math.pow(shape.end.x - shape.start.x, 2) + Math.pow(shape.end.y - shape.start.y, 2));
        ctx.arc(shape.start.x, shape.start.y, r, 0, 2 * Math.PI);
        ctx.strokeStyle = '#6366f1';
        ctx.lineWidth = 2;
        ctx.stroke();
      }
      ctx.closePath();
    }
  }, [shapes]);

  // Mouse/touch handlers
  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setDrawing(true);
    setStart({ x, y });
    if (tool === 'pen' || tool === 'eraser') {
      setShapes([...shapes, { type: tool, points: [{ x, y }] } as Shape]);
    }
  };
  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!drawing) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    if (tool === 'pen' || tool === 'eraser') {
      setShapes(shapes => {
        const newShapes = [...shapes];
        const lastShape = newShapes[newShapes.length - 1];
        if (lastShape && (lastShape.type === 'pen' || lastShape.type === 'eraser')) {
          lastShape.points.push({ x, y });
        }
        return newShapes;
      });
    }
  };
  const handlePointerUp = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!drawing || !start) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    if (tool === 'line') {
      setShapes([...shapes, { type: 'line', start, end: { x, y } }]);
    } else if (tool === 'rect') {
      setShapes([...shapes, { type: 'rect', start, end: { x, y } }]);
    } else if (tool === 'circle') {
      setShapes([...shapes, { type: 'circle', start, end: { x, y } }]);
    }
    setDrawing(false);
    setStart(null);
  };

  const handleClear = () => setShapes([]);

  return (
    <div style={{ minWidth: 300 }}>
      <h4>Drawing Tools</h4>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 12 }}>
        <div style={{ display: 'flex', gap: 8 }}>
          <button className="btn" style={{ background: tool==='pen'? '#6366f1':'#e0e7ff', color: tool==='pen'? '#fff':'#222' }} onClick={() => setTool('pen')}>Pen</button>
          <button className="btn" style={{ background: tool==='eraser'? '#6366f1':'#e0e7ff', color: tool==='eraser'? '#fff':'#222' }} onClick={() => setTool('eraser')}>Eraser</button>
          <button className="btn" style={{ background: tool==='line'? '#6366f1':'#e0e7ff', color: tool==='line'? '#fff':'#222' }} onClick={() => setTool('line')}>Line</button>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button className="btn" style={{ background: tool==='rect'? '#6366f1':'#e0e7ff', color: tool==='rect'? '#fff':'#222' }} onClick={() => setTool('rect')}>Rect</button>
          <button className="btn" style={{ background: tool==='circle'? '#6366f1':'#e0e7ff', color: tool==='circle'? '#fff':'#222' }} onClick={() => setTool('circle')}>Circle</button>
          <button className="btn" style={{ background: '#e0e7ff', color: '#222' }} onClick={handleClear}>Clear</button>
        </div>
      </div>
      <canvas
        ref={canvasRef}
        width={300}
        height={240}
        style={{ border: '2px solid #6366f1', borderRadius: 8, background: '#fff', touchAction: 'none', cursor: 'crosshair' }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      />
    </div>
  );
}

// --- Calculator Placeholder ---

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<string | null>(null);

  const handleButton = (val: string) => {
    if (val === 'C') {
      setInput('');
      setResult(null);
    } else if (val === '=') {
      try {
        // Evaluate using mathjs
        const evalResult = evaluate(input
          .replace(/π/g, pi.toString())
          .replace(/e/g, e.toString())
        );
        setResult(evalResult.toString());
      } catch {
        setResult('Error');
      }
    } else {
      setInput(input + val);
    }
  };

  const buttons = [
    '7', '8', '9', '/', 'sqrt(',
    '4', '5', '6', '*', 'pow(',
    '1', '2', '3', '-', '(',
    '0', '.', '=', '+', ')',
    'sin(', 'cos(', 'tan(', 'log(',
    'π', 'e', 'abs(', 'C',
  ];

  return (
    <div style={{ minWidth: 220, maxWidth: 270, width: 270 }}>
      <h4>Calculator</h4>
      <div style={{ background: '#e0e7ff', borderRadius: 8, padding: 12, minHeight: 80, textAlign: 'center', width: '100%' }}>
        <div style={{ width: '100%', margin: '0 auto', maxWidth: 246 }}>
          <input
            type="text"
            value={result !== null ? result : input}
            readOnly
            style={{ width: '100%', marginBottom: 8, fontSize: '1.1rem', borderRadius: 6, padding: 6, textAlign: 'right', border: '1px solid #c7d2fe', background: '#fff', boxSizing: 'border-box' }}
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 6, width: '100%' }}>
            {buttons.map(b => (
              <button
                key={b}
                className="btn"
                style={{ minWidth: 32, padding: '6px 0', fontWeight: 600, background: b === 'C' ? '#fee2e2' : b === '=' ? '#6366f1' : '#fff', color: b === '=' ? '#fff' : b === 'C' ? '#b91c1c' : '#222', width: '100%' }}
                onClick={() => handleButton(b)}
              >
                {b}
              </button>
            ))}
          </div>
        </div>
        <div style={{ fontSize: '0.9rem', color: '#6366f1', marginTop: 8 }}>
          <span>Functions: sqrt, pow, sin, cos, tan, log, abs, π, e</span>
        </div>
      </div>
    </div>
  );
}

// --- Special Keyboard Placeholder ---
const MATH_SYMBOLS = ['π', '√', '∑', '∫', '≈', '≠', '≤', '≥', '∞', 'Δ', 'θ', 'λ', 'μ', 'Ω', 'α', 'β', 'γ', '∂', '∇', '∈', '∉', '∅', '∧', '∨', '⊂', '⊃', '⊆', '⊇', '∩', '∪', '∃', '∀', '∴', '∵', '∗', '⊗', '⊕', '⊥', '∠', '°', '′', '″', '→', '←', '↑', '↓'];
function SpecialKeyboard({ onInsert }: { onInsert: (symbol: string) => void }) {
  return (
    <div style={{ minWidth: 180 }}>
      <h4>Special Symbols</h4>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, background: '#e0e7ff', borderRadius: 8, padding: 8 }}>
        {MATH_SYMBOLS.map(sym => (
          <button key={sym} className="btn" style={{ minWidth: 32, padding: '4px 8px', fontSize: '1.1rem' }} onClick={() => onInsert(sym)}>{sym}</button>
        ))}
      </div>
    </div>
  );
}


// --- Study Timer ---
function StudyTimer() {
  const [seconds, setSeconds] = React.useState(0);
  const [running, setRunning] = React.useState(false);
  React.useEffect(() => {
    if (!running) return;
    const interval = setInterval(() => setSeconds(s => s + 1), 1000);
    return () => clearInterval(interval);
  }, [running]);
  const reset = () => setSeconds(0);
  const format = (s: number) => `${Math.floor(s/3600).toString().padStart(2,'0')}:${Math.floor((s%3600)/60).toString().padStart(2,'0')}:${(s%60).toString().padStart(2,'0')}`;
  return (
    <div style={{ background: '#f1f5f9', borderRadius: 8, padding: 10, textAlign: 'center' }}>
      <h4 style={{ margin: 0, fontSize: '1.05rem' }}>Study Timer</h4>
      <div style={{ fontSize: '1.3rem', fontWeight: 600, margin: '8px 0' }}>{format(seconds)}</div>
      <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
        <button className="btn" style={{ background: running ? '#fee2e2' : '#6366f1', color: running ? '#b91c1c' : '#fff', fontWeight: 600 }} onClick={() => setRunning(r => !r)}>{running ? 'Pause' : 'Start'}</button>
        <button className="btn" style={{ background: '#e0e7ff', color: '#222' }} onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

// --- Formula Sheet ---
const IB_FORMULA_BOOKLETS = [
  {
    subject: 'Mathematics: Analysis & Approaches (AA) (2021 Syllabus)',
    url: 'https://www.ibdocuments.com/IB%20FORMULA%20BOOKLETS/IB%20Maths%20AA%20Formula%20Booklet%202021.pdf',
    desc: 'Maths AA (SL/HL) Formula Booklet (2021)'
  },
  {
    subject: 'Mathematics: Applications & Interpretation (AI) (2021 Syllabus)',
    url: 'https://www.ibdocuments.com/IB%20FORMULA%20BOOKLETS/IB%20Maths%20AI%20Formula%20Booklet%202021.pdf',
    desc: 'Maths AI (SL/HL) Formula Booklet (2021)'
  },
  {
    subject: 'Physics',
    url: 'https://www.ibdocuments.com/IB%20FORMULA%20BOOKLETS/IB%20Physics%20Data%20Booklet.pdf',
    desc: 'Physics Data Booklet (SL/HL)'
  },
  {
    subject: 'Chemistry',
    url: 'https://www.ibdocuments.com/IB%20FORMULA%20BOOKLETS/IB%20Chemistry%20Data%20Booklet.pdf',
    desc: 'Chemistry Data Booklet (SL/HL)'
  },
  {
    subject: 'Biology',
    url: 'https://www.ibdocuments.com/IB%20FORMULA%20BOOKLETS/IB%20Biology%20Data%20Booklet.pdf',
    desc: 'Biology Data Booklet (SL/HL)'
  },
  {
    subject: 'Further Mathematics',
    url: 'https://www.ibdocuments.com/IB%20FORMULA%20BOOKLETS/IB%20Further%20Mathematics%20HL%20Formula%20Booklet.pdf',
    desc: 'Further Mathematics HL Formula Booklet'
  },
  {
    subject: 'Computer Science',
    url: 'https://www.ibdocuments.com/IB%20FORMULA%20BOOKLETS/IB%20Computer%20Science%20Resource%20Booklet.pdf',
    desc: 'Computer Science Resource Booklet'
  },
];

function FormulaSheet() {
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{ background: '#f1f5f9', borderRadius: 8, padding: 10 }}>
      <button className="btn" style={{ background: '#6366f1', color: '#fff', width: '100%', fontWeight: 600, marginBottom: 6 }} onClick={() => setOpen(o => !o)}>
        {open ? 'Hide' : 'Show'} IB Formula Booklets
      </button>
      {open && (
        <div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {IB_FORMULA_BOOKLETS.map(bk => (
              <li key={bk.subject} style={{ marginBottom: 10 }}>
                <a href={bk.url} target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', fontWeight: 600, textDecoration: 'underline' }}>{bk.subject}</a>
                <div style={{ fontSize: '0.95em', color: '#444', marginTop: 2 }}>{bk.desc}</div>
              </li>
            ))}
          </ul>
          <div style={{ marginTop: 10, fontSize: '0.95em', color: '#6366f1' }}>
            Official IB formula/data booklets. Click a subject to view or download the PDF.
          </div>
        </div>
      )}
    </div>
  );
}

// --- Study To-Do List ---
function StudyTodoList() {
  const [tasks, setTasks] = React.useState<string[]>([]);
  const [input, setInput] = React.useState('');
  const addTask = () => {
    if (input.trim()) setTasks([...tasks, input.trim()]);
    setInput('');
  };
  const removeTask = (idx: number) => setTasks(tasks => tasks.filter((_, i) => i !== idx));
  return (
    <div style={{ background: '#f1f5f9', borderRadius: 8, padding: 10 }}>
      <h4 style={{ margin: 0, fontSize: '1.05rem' }}>Study To-Do</h4>
      <div style={{ display: 'flex', gap: 6, margin: '8px 0' }}>
        <input value={input} onChange={e => setInput(e.target.value)} placeholder="Add task..." style={{ flex: 1, borderRadius: 6, border: '1px solid #c7d2fe', padding: 4 }} />
        <button className="btn" style={{ background: '#6366f1', color: '#fff', fontWeight: 600 }} onClick={addTask}>Add</button>
      </div>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {tasks.map((t, i) => (
          <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
            <span style={{ flex: 1 }}>{t}</span>
            <button className="btn" style={{ background: '#fee2e2', color: '#b91c1c', fontWeight: 700, padding: '2px 8px' }} onClick={() => removeTask(i)}>×</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notes;
