import HeroDashboard from './HeroDashboard';
import Reveal from './Reveal';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">
          <Reveal className="hero-text">
            <div className="pill">
              <span className="pill-dot" />
              Now booking Q3 launches
            </div>
            <h1>
              We build and run your{' '}
              <span className="highlight">TikTok Shop</span> creator program,
              end to end.
            </h1>
            <p className="hero-sub">
              We recruit creators, manage the program, and amplify your winners
              with Spark Ads. Two simple pricing options, both built around your
              growth.
            </p>
            <div className="hero-ctas">
              <a href="#book" className="btn-primary">
                Book a free strategy call →
              </a>
              <a href="#case" className="btn-secondary">
                See real results
              </a>
            </div>
            <div className="hero-trust">
              <div className="hero-trust-item">
                <span className="check">✓</span> $0 upfront
              </div>
              <div className="hero-trust-item">
                <span className="check">✓</span> Done-for-you
              </div>
              <div className="hero-trust-item">
                <span className="check">✓</span> Built by actual creators
              </div>
            </div>
          </Reveal>

          <Reveal className="hero-visual">
            <HeroDashboard />
          </Reveal>
        </div>
      </div>
    </section>
  );
}