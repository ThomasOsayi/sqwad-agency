'use client';

import { useState, type ReactNode } from 'react';
import Reveal from './Reveal';

type FAQItem = { q: string; a: ReactNode };

const faqs: FAQItem[] = [
  {
    q: 'How does the 10% actually work?',
    a: "We take 10% of the gross TikTok Shop revenue we generate for you each month, billed at the end of the month based on TikTok Shop's reported attributed sales. No upfront fees, no minimums, no setup costs. If we generate $0, you pay $0.",
  },
  {
    q: "What's the minimum commitment?",
    a: "Month-to-month. No long-term contract. We ask for a 60-day initial window so we have time to launch the program properly, but you can cancel any time after that with 30 days' notice.",
  },
  {
    q: 'Do I own the creators we recruit?',
    a: 'Yes. Every creator we recruit becomes part of your TikTok Shop affiliate program under your account. If we ever part ways, the creator relationships stay with you. We hand over creator contacts, performance data, and the full program structure on your way out.',
  },
  {
    q: 'What categories do you specialize in?',
    a: "We've worked deepest in apparel, streetwear, and lifestyle DTC. We'll evaluate beauty, accessories, supplements, and home goods on a case-by-case basis. We turn down categories where we don't think we can win for the client.",
  },
  {
    q: 'Who actually runs the program day to day?',
    a: "Our lead operator built TheHoopGang's TikTok Shop from scratch and personally produced the $60K+ in revenue we cite throughout this site. He's a creator first who understands the platform from the inside. You're not getting handed off to a junior account manager.",
  },
  {
    q: 'What happens once my TikTok Shop is scaling?',
    a: (
      <>
        Most brands eventually want more control: creator-level revenue
        attribution, a branded portal for creators to apply through, automated
        content tracking, and Meta Ads amplification on top of TikTok organic.
        When that happens, we graduate clients to{' '}
        <a href="https://joinsqwad.com" target="_blank" rel="noreferrer">
          SQWAD&apos;s creator platform
        </a>
        . Same operating philosophy, more infrastructure, lower variable cost.
      </>
    ),
  },
  {
    q: 'How fast can we start?',
    a: "Discovery call this week, audit and offer build next week, first creators contacted within 14 days of signing. We've taken brands from kickoff call to first creator video in under 21 days.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq">
      <div className="container">
        <Reveal className="section-head">
          <div className="section-tag">FAQ</div>
          <h2>Common questions.</h2>
        </Reveal>

        <div className="faq-list">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            const answerId = `faq-answer-${i}`;
            return (
              <div
                key={item.q}
                className={`faq-item ${isOpen ? 'open' : ''}`.trim()}
              >
                <button
                  type="button"
                  className="faq-q"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  {item.q}
                  <span className="faq-icon" aria-hidden="true">
                    +
                  </span>
                </button>
                <div className="faq-a" id={answerId} role="region">
                  <div className="faq-a-clip">
                    <div className="faq-a-inner">{item.a}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}