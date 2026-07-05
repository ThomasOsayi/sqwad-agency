'use client';

import { useState, type ReactNode } from 'react';
import Reveal from './Reveal';

type FAQItem = { q: string; a: ReactNode };

const faqs: FAQItem[] = [
  {
    q: 'How does pricing work?',
    a: "Two options, both with no setup fee. Performance is $500 a month plus 10% of the TikTok Shop revenue we generate, billed at month end on TikTok Shop's reported attributed sales. Flat is $1,000 a month with zero commission, so you keep 100% of revenue and can put more toward creator payouts. Both cover the full program build and management. We help you pick the model that fits your margins on the strategy call.",
  },
  {
    q: "What's the minimum commitment?",
    a: "A 3-month initial term. That gives us enough runway to launch the program, recruit creators, and get content converting before results get judged. After the initial term it continues month-to-month, cancel with 30 days' notice.",
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