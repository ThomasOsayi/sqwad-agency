'use client';

import { useEffect, useRef } from 'react';

const stats: {
  label: string;
  value: string;
  tone?: 'cyan' | 'pink';
  delta: string;
}[] = [
  { label: 'Revenue', value: '$48.2k', tone: 'cyan', delta: '+12.4%' },
  { label: 'Active deals', value: '24', delta: '+3 this week' },
  { label: 'Creators', value: '1,842', tone: 'pink', delta: '+89' },
  { label: 'Avg. payout', value: '$312', delta: 'On track' },
];

const creators = [
  { name: 'Maya Chen', rev: '$4.2k' },
  { name: 'Jordan Lee', rev: '$3.8k' },
  { name: 'Alex Rivera', rev: '$3.1k' },
];

export default function HeroDashboard() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const mockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia('(min-width: 901px)').matches) return;

    const wrap = wrapRef.current;
    const mock = mockRef.current;
    if (!wrap || !mock) return;

    let rect: DOMRect | null = null;
    let rafId: number | null = null;
    let targetRX = 8;
    let targetRY = -12;
    let curRX = 8;
    let curRY = -12;

    const updateTilt = () => {
      curRX += (targetRX - curRX) * 0.18; // bumped from 0.12 for snappier feel
      curRY += (targetRY - curRY) * 0.18;
      mock.style.transform = `rotateX(${curRX}deg) rotateY(${curRY}deg) rotateZ(2deg)`;
      if (
        Math.abs(targetRX - curRX) > 0.05 ||
        Math.abs(targetRY - curRY) > 0.05
      ) {
        rafId = requestAnimationFrame(updateTilt);
      } else {
        rafId = null;
      }
    };

    const onEnter = () => {
      rect = wrap.getBoundingClientRect();
      mock.style.animation = 'none';
      mock.style.transition = 'none'; // ← kill the 600ms transition during tracking
    };

    const onMove = (e: MouseEvent) => {
      if (!rect) rect = wrap.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      targetRY = -12 + (x - 0.5) * 16;
      targetRX = 8 - (y - 0.5) * 16;
      if (!rafId) rafId = requestAnimationFrame(updateTilt);
    };

    let restoreTimer: ReturnType<typeof setTimeout> | null = null;
    const onLeave = () => {
      // Cancel any in-flight tracking frame so it doesn't fight the return
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
      // Restore the CSS transition so the snap-back eases smoothly
      mock.style.transition = '';
      // Clear inline transform → falls back to the CSS rest pose
      mock.style.transform = '';
      restoreTimer = setTimeout(() => {
        mock.style.animation = '';
      }, 600);
    };

    wrap.addEventListener('mouseenter', onEnter);
    wrap.addEventListener('mousemove', onMove);
    wrap.addEventListener('mouseleave', onLeave);

    return () => {
      wrap.removeEventListener('mouseenter', onEnter);
      wrap.removeEventListener('mousemove', onMove);
      wrap.removeEventListener('mouseleave', onLeave);
      if (rafId) cancelAnimationFrame(rafId);
      if (restoreTimer) clearTimeout(restoreTimer);
    };
  }, []);

  return (
    <div ref={wrapRef} className="dashboard-wrap">
      <div ref={mockRef} className="dashboard-mock">
        <div className="float-badge float-badge-1">
          <span className="float-badge-icon" aria-hidden />
          New payout sent
        </div>
        <div className="float-badge float-badge-2">
          <span className="float-badge-icon" aria-hidden />
          Campaign live
        </div>

        <div className="mock-header">
          <div className="mock-header-left">
            <span className="mock-dot" aria-hidden />
            <span>SQWAD pulse</span>
          </div>
          <span>Last 30 days</span>
        </div>

        <div className="stats-grid">
          {stats.map((s) => (
            <div key={s.label} className="stat-card">
              <div className="stat-label">{s.label}</div>
              <div className={`stat-value ${s.tone ?? ''}`.trim()}>
                {s.value}
              </div>
              <div className="stat-delta">{s.delta}</div>
            </div>
          ))}
        </div>

        <div>
          {creators.map((c) => (
            <div key={c.name} className="creator-row">
              <div className="creator-name">
                <span
                  className="creator-avatar"
                  style={{
                    background:
                      'linear-gradient(135deg, var(--color-cyan), var(--color-pink))',
                  }}
                  aria-hidden
                />
                {c.name}
              </div>
              <span className="creator-rev">{c.rev}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}