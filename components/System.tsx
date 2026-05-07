'use client';

import { useEffect, useRef } from 'react';
import Reveal from './Reveal';

type Badge = { label: string; color?: 'cyan' | 'pink' };
type VisualRow = { label: string; badge: Badge };
type Step = {
  num: number;
  title: string;
  description: string;
  rows: VisualRow[];
};

const steps: Step[] = [
  {
    num: 0,
    title: 'The Foundation',
    description:
      'We start with diagnosis, not execution. Brand audit, product fit assessment, commission modeling, and a clear go/no-go on whether TikTok Shop is the right channel for you right now.',
    rows: [
      { label: 'Brand audit', badge: { label: 'Done' } },
      { label: 'Margin analysis', badge: { label: 'Done' } },
      { label: 'Channel fit', badge: { label: 'Approved', color: 'cyan' } },
    ],
  },
  {
    num: 1,
    title: 'Affiliate Program Development',
    description:
      'We architect the offer before we recruit a single creator. Commission structure, sample policy, content guidelines, and full TikTok Shop backend setup designed to be profitable from day one and ready to scale immediately.',
    rows: [
      { label: 'Commission tier', badge: { label: 'Up to 25%', color: 'cyan' } },
      { label: 'Sample policy', badge: { label: 'Live' } },
      { label: 'Shop backend', badge: { label: 'Configured' } },
    ],
  },
  {
    num: 2,
    title: 'Creator Recruitment',
    description:
      'We source the right way. Filtered by skill and niche fit, not follower count. Outbound DMs to proven sellers in your category plus inbound sample requests we triage daily so only qualified creators get product.',
    rows: [
      { label: 'Outbound contacted', badge: { label: '412', color: 'cyan' } },
      { label: 'Inbound applied', badge: { label: '87', color: 'cyan' } },
      { label: 'Approved', badge: { label: '42' } },
    ],
  },
  {
    num: 3,
    title: 'Creator Management',
    description:
      'Every creator relationship managed end to end. Communication, performance tracking, incentive alignment, retention. We keep top performers active and producing while pruning underperformers without burning bridges.',
    rows: [
      { label: 'Daily DMs handled', badge: { label: '120+', color: 'cyan' } },
      { label: 'Active creators', badge: { label: '42' } },
      { label: 'Top performer rev', badge: { label: '$8.4K', color: 'pink' } },
    ],
  },
  {
    num: 4,
    title: 'Sample Delivery',
    description:
      'We coordinate all product seeding to qualified creators and handle the logistics so creators can focus on one thing: making content fast. Tracked from request to delivery to first video.',
    rows: [
      { label: 'Samples shipped', badge: { label: '94' } },
      { label: 'Avg. delivery to video', badge: { label: '5.2 days', color: 'cyan' } },
      { label: 'Conversion to post', badge: { label: '87%' } },
    ],
  },
  {
    num: 5,
    title: 'Content Fulfillment',
    description:
      "We track what's converting, identify the winning formats, and steer the ecosystem toward what's actually working, not just what looks good. Velocity matters: we drove 136 videos live in 22 days for our flagship client.",
    rows: [
      { label: 'Videos live', badge: { label: '136', color: 'cyan' } },
      { label: 'Top format', badge: { label: 'Try-on POV' } },
      { label: 'Avg. views/video', badge: { label: '42K', color: 'pink' } },
    ],
  },
  {
    num: 6,
    title: 'Spark Ads Amplification',
    description:
      "Once we see which organic videos are generating real sales, we run Spark Ads behind them. No guessing. No wasted spend. Just scaling what's already proven on the creator's own handle.",
    rows: [
      { label: 'Spark Ads live', badge: { label: '5' } },
      { label: 'Spend', badge: { label: '$2,400', color: 'cyan' } },
      { label: 'Attributed rev', badge: { label: '$11,800', color: 'pink' } },
    ],
  },
];

export default function System() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = ref.current;
    if (!section) return;

    const cards = section.querySelectorAll<HTMLDivElement>('.system-card');
    const cleanups: (() => void)[] = [];

    cards.forEach((card) => {
      const onMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const mx = ((e.clientX - rect.left) / rect.width) * 100;
        const my = ((e.clientY - rect.top) / rect.height) * 100;
        card.style.setProperty('--mx', `${mx}%`);
        card.style.setProperty('--my', `${my}%`);
      };
      card.addEventListener('mousemove', onMove);
      cleanups.push(() => card.removeEventListener('mousemove', onMove));
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return (
    <section id="system" ref={ref}>
      <div className="container">
        <Reveal className="section-head">
          <div className="section-tag">The System</div>
          <h2>
            How we&apos;ll launch and scale your{' '}
            <span className="highlight">TikTok Shop</span>.
          </h2>
          <p className="section-sub">
            A proven seven-step playbook we&apos;ve used to take a creator-led
            brand from zero to five figures in 22 days. We run it for you
            start to finish.
          </p>
        </Reveal>

        <div className="system-grid">
          {steps.map((step) => (
            <Reveal key={step.num} className="system-card">
              <div className="system-num">{step.num}</div>
              <div className="system-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
              <div className="system-visual">
                {step.rows.map((row) => (
                  <div key={row.label} className="system-visual-row">
                    <span>{row.label}</span>
                    <span
                      className={`badge ${row.badge.color ?? ''}`.trim()}
                    >
                      {row.badge.label}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}