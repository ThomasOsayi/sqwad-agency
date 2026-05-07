import Reveal from './Reveal';

const yes = [
  'You sell physical product with margin to support up to 25% creator commission plus our 10%',
  "You're a DTC brand doing $20K+ in monthly revenue and want to add TikTok Shop as a new channel",
  'You have product-market fit but limited TikTok presence and no affiliate program running',
  'Your product is visual, demonstrable, and lends itself to creator content',
  'You can fulfill orders reliably and ship samples within 3 to 5 days',
];

const no = [
  "You're selling services, digital products, or anything that can't ship as a sample",
  "Your margins can't support 25%+ in combined commission and agency fees",
  "You haven't validated product-market fit yet (we scale what works, we don't fix what's broken)",
  "You want full creative control and won't trust creators to make content their own way",
  'You need guaranteed results in a specific timeframe (we work fast, but TikTok is TikTok)',
];

export default function WhoFor() {
  return (
    <section style={{ paddingTop: 0 }}>
      <div className="container">
        <Reveal className="section-head">
          <div className="section-tag">Qualification</div>
          <h2>
            This works best for a{' '}
            <span className="highlight">specific kind of brand</span>.
          </h2>
          <p className="section-sub">
            We don&apos;t take every client. The model only works when we can
            actually move the needle.
          </p>
        </Reveal>

        <div className="who-grid">
          <Reveal className="who-card yes">
            <h3>✓ Built for you if</h3>
            <ul className="who-list">
              {yes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="who-card no">
            <h3>✕ Not the right fit if</h3>
            <ul className="who-list">
              {no.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}