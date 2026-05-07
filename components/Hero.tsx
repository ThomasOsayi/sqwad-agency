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
              Pay nothing until your{' '}
              <span className="highlight">TikTok Shop</span> is making money.
            </h1>
            <p className="hero-sub">
              We build, recruit, manage, and scale your full TikTok Shop
              creator program end to end. No setup fee. No retainer. We take
              10% of the revenue we generate. That&apos;s it.
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
                <span className="check">✓</span> Cancel anytime
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