import AnimatedCounter from './AnimatedCounter';
import Reveal from './Reveal';

const stats = [
  {
    value: 60,
    prefix: '$',
    suffix: 'K+',
    label: 'TikTok Shop revenue generated',
  },
  { value: 1500, suffix: '+', label: 'Units sold' },
  { value: 22, label: 'Days to first $10K' },
  { value: 136, label: 'Creator videos live' },
];

export default function Proof() {
  return (
    <section className="proof">
      <div className="container">
        <Reveal className="proof-label">
          Real numbers from a real client · TheHoopGang
        </Reveal>
        <Reveal className="proof-grid">
          {stats.map((stat, i) => (
            <div key={i} className="proof-item">
              <div className="proof-num">
                <AnimatedCounter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </div>
              <div className="proof-label-sm">{stat.label}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}