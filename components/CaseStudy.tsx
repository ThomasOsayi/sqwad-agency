import Reveal from './Reveal';

const stats = [
  { value: '$60K+', label: 'Revenue generated' },
  { value: '1,547', label: 'Units sold' },
  { value: '22', label: 'Days to first $10K' },
  { value: '136', label: 'Videos in 22 days' },
];

export default function CaseStudy() {
  return (
    <section id="case">
      <div className="container">
        <Reveal className="section-head">
          <div className="section-tag">Case Study</div>
          <h2>
            How we took{' '}
            <span className="highlight">TheHoopGang</span> from launch to $60K
            in TikTok Shop revenue.
          </h2>
          <p className="section-sub">
            A streetwear brand with strong product but zero TikTok Shop
            presence. Here&apos;s what happened when we ran the full system.
          </p>
        </Reveal>

        <Reveal className="case-card">
          <div className="case-grid">
            <div>
              <div className="case-tag">Live Client · Jan to May</div>
              <div className="case-headline">
                From zero TikTok Shop presence to $60K+ in revenue in under 4
                months.
              </div>
              <p className="case-body">
                We built TheHoopGang&apos;s TikTok Shop affiliate program from
                scratch. Recruited and managed 40+ creators, coordinated sample
                logistics, drove 136 videos live in the first 22 days, and ran
                Spark Ads behind the winners.
              </p>
              <p className="case-body">
                First $10K hit at day 22. By month 4: 1,500+ units sold, $60K+
                in tracked TikTok Shop revenue, and a creator pipeline still
                actively producing.
              </p>
            </div>

            <div className="case-stats">
              {stats.map((stat, i) => (
                <div key={stat.label} className="case-stat">
                  <div
                    className={`case-stat-num ${i % 2 === 1 ? 'pink' : ''}`.trim()}
                  >
                    {stat.value}
                  </div>
                  <div className="case-stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}