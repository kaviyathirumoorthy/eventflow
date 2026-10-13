import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'


function App() {
  return (
    <div>
      <nav className="navbar">
        <a href="/" className="logo">
          Event<span>Flow</span>
        </a>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="#events">Events</a>
          <a href="#categories">Categories</a>
          <a href="#about">About</a>
        </div>

        <div className="nav-actions">
          <a href="#login">Login</a>
          <button className="signup-button">Sign Up</button>
        </div>
      </nav>

      <main>
        <section className="hero">
          <div className="hero-content">
            <p className="eyebrow">
              DISCOVER · CONNECT · EXPERIENCE
            </p>

            <h1>
              Find Amazing Events
              <span> Near You</span>
            </h1>

            <p className="hero-description">
              From concerts and festivals to workshops and
              conferences, discover experiences worth sharing.
            </p>

            <form className="search-box"
              onSubmit={(event) => event.preventDefault()}>
              <input
                type="search"
                placeholder="Search events, artists, venues..."
                aria-label="Search events"
              />
              <button type="submit">Search</button>
            </form>
          </div>
        </section>
        
<section className="categories" id="categories">
  <h2>Explore by Category</h2>

  <div className="category-grid">
    <div className="category-card">
      <span>🎵</span>
      <h3>Music</h3>
    </div>

    <div className="category-card">
      <span>🎨</span>
      <h3>Arts & Culture</h3>
    </div>

    <div className="category-card">
      <span>💻</span>
      <h3>Technology</h3>
    </div>

    <div className="category-card">
      <span>⚽</span>
      <h3>Sports</h3>
    </div>

    <div className="category-card">
      <span>🍜</span>
      <h3>Food & Drink</h3>
    </div>

    <div className="category-card">
      <span>📚</span>
      <h3>Education</h3>
    </div>
  </div>
</section>

<section className="featured-events" id="events">
  <div className="section-heading">
    <div>
      <h2>Featured Events</h2>
      <p>Discover experiences worth remembering.</p>
    </div>

    <a href="#events">Explore events →</a>
  </div>

  <div className="event-grid">
    <article className="event-card">
      <img
        src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=700&q=80"
        alt="Live music concert"
      />
      <div className="event-details">
        <span className="event-category">MUSIC</span>
        <h3>Summer Music Festival</h3>
        <p>📅 July 26 · 6:00 PM</p>
        <p>📍 Riverside Park, Bangalore</p>
        <button>View Event</button>
      </div>
    </article>

    <article className="event-card">
      <img
        src="https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=700&q=80"
        alt="Paintings displayed in an art gallery"
      />
      <div className="event-details">
        <span className="event-category">ARTS</span>
        <h3>Modern Art Exhibition</h3>
        <p>📅 August 12 · 10:00 AM</p>
        <p>📍 City Art Gallery, Bangalore</p>
        <button>View Event</button>
      </div>
    </article>

    <article className="event-card">
      <img
        src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=700&q=80"
        alt="Technology conference audience"
      />
      <div className="event-details">
        <span className="event-category">TECHNOLOGY</span>
        <h3>Future Tech Conference</h3>
        <p>📅 September 5 · 9:00 AM</p>
        <p>📍 Convention Centre, Bangalore</p>
        <button>View Event</button>
      </div>
    </article>
  </div>
</section>

      </main>
    </div>
  );
}

export default App;
