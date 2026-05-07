import Reveal from './Reveal';

export default function FinalCTA() {
  return (
    <section id="book" style={{ paddingTop: 0 }}>
      <div className="container">
        <Reveal className="final-cta">
          <h2>
            Ready to see what your brand could do on{' '}
            <span className="highlight">TikTok Shop</span>?
          </h2>
          <p>
            30-minute strategy call. We&apos;ll review your product, do a live
            channel fit assessment, and show you the exact playbook we&apos;d
            run. Free, zero pressure.
          </p>

          <div className="final-cta-buttons">
            <a
              href="https://calendly.com/thomasosayi/30min"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Book my free strategy call →
            </a>
            <a href="#case" className="btn-secondary">
              See case study first
            </a>
          </div>

          <div className="final-trust">
            <span>
              <span className="check">✓</span> No upfront cost
            </span>
            <span>
              <span className="check">✓</span> No long-term contract
            </span>
            <span>
              <span className="check">✓</span> Real results, real client
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}