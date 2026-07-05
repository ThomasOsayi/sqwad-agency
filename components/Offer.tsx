import Reveal from './Reveal';

const performance = {
  badge: 'Recommended',
  title: 'Performance',
  price: '$500/mo + 10%',
  note: 'Low base, plus 10% of the TikTok Shop revenue we generate.',
  items: [
    '$500 monthly base',
    '10% of TikTok Shop revenue we generate',
    'Full creator program build & management',
    'Spark Ads amplification on winning videos',
  ],
};

const flat = {
  title: 'Flat',
  price: '$1,000/mo',
  note: 'Zero commission. Keep 100% of revenue to fund higher creator payouts.',
  items: [
    '$1,000 flat monthly, 0% commission',
    'Keep every dollar of revenue you generate',
    'Fund more competitive creator commissions',
    'Full creator program build & management',
    'Spark Ads amplification on winning videos',
  ],
};

export default function Offer() {
  return (
    <section id="pricing">
      <div className="container">
        <Reveal className="section-head">
          <div className="section-tag">The Offer</div>
          <h2>
            Two ways to pay. Both{' '}
            <span className="highlight">built around your growth</span>.
          </h2>
          <p className="section-sub">
            No setup fees. Pick the model that fits your margins. We build and run
            the entire creator program either way, on a 3-month initial term.
          </p>
        </Reveal>

        <div className="offer-grid">
          <Reveal className="offer-card us">
            <span className="offer-badge">{performance.badge}</span>
            <div className="offer-title">{performance.title}</div>
            <div className="offer-headline">{performance.price}</div>
            <p className="offer-price-note">{performance.note}</p>
            <ul className="offer-list">
              {performance.items.map((item) => (
                <li key={item}>
                  <span className="offer-icon">✓</span> {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="offer-card us">
            <div className="offer-title">{flat.title}</div>
            <div className="offer-headline">{flat.price}</div>
            <p className="offer-price-note">{flat.note}</p>
            <ul className="offer-list">
              {flat.items.map((item) => (
                <li key={item}>
                  <span className="offer-icon">✓</span> {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}