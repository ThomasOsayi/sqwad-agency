const agencyLinks = [
  { href: "#system", label: "How It Works" },
  { href: "#case", label: "Case Studies" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

const companyLinks = [
  { href: "#book", label: "Book a Call" },
  { href: "mailto:hello@sqwadagency.com", label: "Contact" },
  {
    href: "https://joinsqwad.com",
    label: "SQWAD Platform →",
    external: true,
  },
];

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h4>
              <span className="logo-mark">SQWAD</span>{" "}
              <span style={{ color: "var(--color-text-muted)" }}>Agency</span>
            </h4>
            <p>
              The done-for-you TikTok Shop agency. We launch and scale
              creator-led affiliate programs for DTC brands. No retainers, no
              setup fees, just results.
            </p>
          </div>

          <div className="footer-col">
            <h5>Agency</h5>
            <ul>
              {agencyLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h5>Company</h5>
            <ul>
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} SQWAD Technologies LLC. All rights
            reserved.
          </span>
          <span className="powered-by">
            Powered by{" "}
            <a
              href="https://joinsqwad.com"
              target="_blank"
              rel="noopener noreferrer"
              className="platform-link"
            >
              SQWAD Platform
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
