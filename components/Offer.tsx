import Reveal from './Reveal';

const ourCard = {
  title: 'SQWAD Agency',
  headline: '10% of revenue. Nothing else.',
  items: [
    '$0 setup fee',
    '$0 monthly retainer',
    '10% only on TikTok Shop revenue we generate',
    'Full creator program build & management',
    'Spark Ads amplification on winning videos',
    'Cancel anytime, no long-term contract',
  ],
};

const theirCard = {
  title: 'Typical Agency',
  headline: 'Retainers, setup fees, lock-ins.',
  items: [
    '$2,000 to $10,000 setup fees',
    '$3,000 to $8,000 monthly retainers',
    'Charged whether you make money or not',
    '6 to 12 month contract minimums',
    'Limited or no paid amplification included',
    'Misaligned incentives from day one',
  ],
};

export default function Offer() {
  return (
    <section id="pricing">
      <div className="container">
        <Reveal className="section-head">
          <div className="section-tag">The Offer</div>
          <h2>
            The only TikTok Shop agency that{' '}
            <span className="highlight">eats what it kills</span>.
          </h2>
          <p className="section-sub">
            We don&apos;t get paid unless you do. Most agencies lock you into
            retainers and setup fees before they&apos;ve made you a single
            dollar. We took that off the table.
          </p>
        </Reveal>

        <div className="offer-grid">
          <Reveal className="offer-card us">
            <div className="offer-title">{ourCard.title}</div>
            <div className="offer-headline">{ourCard.headline}</div>
            <ul className="offer-list">
              {ourCard.items.map((item) => (
                <li key={item}>
                  <span className="offer-icon">✓</span> {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="offer-card them">
            <div className="offer-title">{theirCard.title}</div>
            <div className="offer-headline">{theirCard.headline}</div>
            <ul className="offer-list">
              {theirCard.items.map((item) => (
                <li key={item}>
                  <span className="offer-icon">✕</span> {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}