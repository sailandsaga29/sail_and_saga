import React, { useState, useEffect } from 'react';
import './App.css';
import Preloader from './components/Preloader';
import Countdown from './components/Countdown';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [saved, setSaved] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  const saveEmail = () => {
    if (!email) return alert("Enter email");
    setSaved(true);
    console.log("Email saved:", email);
  };

  if (loading) return <Preloader />;

  return (
    <div className={dark ? "hero dark" : "hero"}>
      <div className="overlay"></div>

      {/* <button className="themeToggle" onClick={() => setDark(!dark)}>
        {dark ? "Light" : "Dark"}
      </button> */}

      <div className="content fade-in">
        <h1 className="logo slide-down">SAIL & SAGA</h1>
        <p className="tagline fade-in-delay">Adventure in Every Thread</p>

        <h3 className="coming pop-in">
          LAUNCHING SOON</h3>

        <Countdown />

        {!saved ? (
          <div className="emailBox fade-in">
            <input 
              type="email" 
              placeholder="Join our waitlist" 
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <button className="cta pulse" onClick={saveEmail}>Notify Me</button>
          </div>
        ) : (
          <p className="thanks fade-in">You're on the list! 🥇</p>
        )}

        <p className="lead">Crafted apparel for people who chase stories, style, and adventure.</p>

        <div className="features fade-in-delay">
          <div className="feature"><span className="icon">👕</span> Premium Apparel</div>
          <div className="feature"><span className="icon">🧭</span> Adventure-Inspired Designs</div>
          <div className="feature"><span className="icon">🍃</span> Sustainable Materials</div>
          <div className="feature"><span className="icon">🎁</span> Limited Launch Collection</div>
        </div>

        <div className="social fade-in-delay">
          <a><i className="fab fa-instagram"></i></a>
          <a><i className="fab fa-facebook"></i></a>
          <a><i className="fab fa-tiktok"></i></a>
        </div>
      </div>
    </div>
  );
}
