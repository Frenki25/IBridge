import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, Navigate } from 'react-router-dom';
import './App.css';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from './firebase';
import { setDoc, doc } from 'firebase/firestore';
import Dashboard from './Dashboard';
import SubtopicPage from './SubtopicPage';
import TopicsPage from './TopicsPage';
import EditSubjects from './EditSubjects';
import Profile from './Profile';
import Notes from './Notes';
import Flashcards from './Flashcards';
import QuizPage from './QuizPage';
import { onAuthStateChanged } from 'firebase/auth';

function Home() {
  return (
    <div className="home-container">
      <header className="hero">
        <nav className="top-nav">
          <div className="nav-buttons">
            <Link to="/register" className="btn nav-btn">Sign Up</Link>
            <Link to="/login" className="btn nav-btn">Log In</Link>
          </div>
        </nav>
        <div className="hero-content">
          <div className="mascot" title="IBridge Mascot" role="img">🦉</div>
          <h1>Welcome to IBridge</h1>
          <p className="subtitle">A high-end IB study platform for ambitious students</p>
          <Link to="/register" className="btn get-started">Get Started</Link>
        </div>
      </header>
      <section className="features">
        <div className="feature-card">
          <h2>📚 All Your IB Subjects</h2>
          <p>Choose, track, and master your IB subjects with ease.</p>
        </div>
        <div className="feature-card">
          <h2>⏱️ Study Tools</h2>
          <p>Track your study time, take notes, and earn badges for your progress.</p>
        </div>
        <div className="feature-card">
          <h2>📊 Visual Dashboard</h2>
          <p>See your strengths, weaknesses, and progress at a glance.</p>
        </div>
      </section>
    </div>
  );
}

function Register() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // Save user profile to Firestore
      await setDoc(doc(db, 'users', userCredential.user.uid), {
        email,
        name,
        surname,
        createdAt: new Date().toISOString(),
      });
      setSuccess('Registration successful! You can now log in.');
      setEmail('');
      setName('');
      setSurname('');
      setPassword('');
      setConfirmPassword('');
    } catch (err) {
      const error = err as { code?: string; message?: string };
      if (error.code === 'auth/email-already-in-use') {
        setError('This email is already in use.');
      } else {
        setError(error.message || 'Registration failed.');
      }
    }
  };

  return (
    <div className="auth-page">
      <h2>Register</h2>
      <form onSubmit={handleRegister} className="auth-form">
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
        <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} required />
        <input type="text" placeholder="Surname" value={surname} onChange={e => setSurname(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
        <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required />
        <button type="submit">Sign Up</button>
      </form>
      {error && <p className="auth-error">{error}</p>}
      {success && <p className="auth-success">{success}</p>}
    </div>
  );
}

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setSuccess('Login successful!');
      setEmail('');
      setPassword('');
      setTimeout(() => navigate('/dashboard'), 500); // Redirect after short delay
    } catch (err) {
      const error = err as { message?: string };
      setError(error.message || 'Login failed.');
    }
  };

  return (
    <div className="auth-page">
      <h2>Login</h2>
      <form onSubmit={handleLogin} className="auth-form">
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
        <button type="submit">Log In</button>
      </form>
      {error && <p className="auth-error">{error}</p>}
      {success && <p className="auth-success">{success}</p>}

    </div>
  );
}

// ProtectedRoute component
import type { ReactElement } from 'react';
function ProtectedRoute({ children }: { children: ReactElement }) {
  const [user, setUser] = React.useState(() => auth.currentUser);
  const [authChecked, setAuthChecked] = React.useState(false);
  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setAuthChecked(true);
    });
    return unsubscribe;
  }, []);
  if (!authChecked) return <div className="dashboard-page"><div className="dashboard-header"><h2>Loading...</h2></div></div>;
  return user ? children : <Navigate to="/login" replace />;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/edit-subjects" element={<ProtectedRoute><EditSubjects /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/notes" element={<ProtectedRoute><Notes /></ProtectedRoute>} />
        <Route path="/flashcards" element={<ProtectedRoute><Flashcards /></ProtectedRoute>} />
        <Route path="/quizzes" element={<ProtectedRoute><QuizPage /></ProtectedRoute>} />
        <Route path="/subject/:subject/topics" element={<ProtectedRoute><TopicsPage /></ProtectedRoute>} />
        <Route path="/subject/:subject/:topic/:subtopic" element={<ProtectedRoute><SubtopicPage /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
