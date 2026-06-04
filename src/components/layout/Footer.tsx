import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-brand-border/50 bg-brand-black/40 backdrop-blur-md" id="footer">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="inline-flex items-center gap-2 text-xl font-semibold text-brand-white tracking-tight">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-gold/10 text-brand-gold">
                <span className="text-sm">OC</span>
              </span>
              OpenClaw
            </div>
            <p className="mt-4 max-w-md text-sm text-brand-light/70 leading-relaxed">
              A clarity-led studio for founders who already win. We build authority, not noise,
              through precision content systems that convert at the highest level.
            </p>
            <p className="mt-4 text-xs text-brand-muted">Built from Obsidian memory, ready to scale.</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-brand-muted">Navigate</h4>
            <ul className="mt-4 space-y-3 text-sm text-brand-light/70">
              <li><FooterLink href="#philosophy">Philosophy</FooterLink></li>
              <li><FooterLink href="#service">Services</FooterLink></li>
              <li><FooterLink href="#clients">Clients</FooterLink></li>
              <li><FooterLink href="#pricing">Pricing</FooterLink></li>
              <li><FooterLink href="#outreach">Outreach</FooterLink></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-brand-muted">Services</h4>
            <ul className="mt-4 space-y-3 text-sm text-brand-light/70">
              <li><FooterLink href="#service">Content Clarity</FooterLink></li>
              <li><FooterLink href="#service">Editing Direction</FooterLink></li>
              <li><FooterLink href="#service">Authority Building</FooterLink></li>
              <li><FooterLink href="#service">Short-Form Mastery</FooterLink></li>
              <li><FooterLink href="#service">Long-Form Depth</FooterLink></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-brand-border/50 pt-8 md:flex-row">
          <p className="text-xs text-brand-muted">© {year} OpenClaw Agency. All rights reserved.</p>
          <p className="text-xs text-brand-muted">Clarity over chaos.</p>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ children, href = "#" }: { children: React.ReactNode; href?: string }) => (
  <li>
    <a
      href={href}
      className="inline-block transition-transform duration-200 hover:translate-x-1 hover:text-brand-gold"
    >
      {children}
    </a>
  </li>
);

export default Footer;
