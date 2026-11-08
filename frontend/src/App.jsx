import './App.css'

function App() {
  return (
    <div className="community">
      <header className="header">
        <h2>CommunityHub</h2>

        <nav>
          <a href="#home">Home</a>
          <a href="#posts">Community</a>
          <a href="#about">About</a>
        </nav>
      </header>

      <main>
        <section className="welcome" id="home">
          <p className="tagline">WELCOME TO OUR COMMUNITY</p>
          <h1>Connect. Share. Grow.</h1>
          <p>
            A space to share ideas, learn from one another,
            and build meaningful connections.
          </p>
        </section>

        <section className="posts" id="posts">
          <h2>Community Updates</h2>

          <div className="post-grid">
            <article className="post-card">
              <h3>Welcome to CommunityHub</h3>
              <p>
                We're excited to have you here. This is where
                our community journey begins!
              </p>
              <span>Posted by Admin</span>
            </article>

            <article className="post-card">
              <h3>Share Your Ideas</h3>
              <p>
                Every great idea starts somewhere. Share your
                thoughts and inspire someone today.
              </p>
              <span>Posted by Community Team</span>
            </article>

            <article className="post-card">
              <h3>Learn Together</h3>
              <p>
                Collaboration makes us better. Let's grow
                our knowledge together.
              </p>
              <span>Posted by Learning Team</span>
            </article>
          </div>
        </section>
      </main>

      <footer className="footer" id="about">
        <p>CommunityHub © 2026. Built by our IYF team.</p>
      </footer>
    </div>
  )
}

export default App