import { useState } from "react";

export interface NavigationProps {
  mobileNavOpen?: boolean;
  onMobileNavOpenChange?: (value: boolean) => void;
}

const Navigation = ({ mobileNavOpen: mobileNavOpenProp, onMobileNavOpenChange: onMobileNavOpenChangeProp }: NavigationProps) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const mobileNavOpen = mobileNavOpenProp !== undefined ? mobileNavOpenProp : internalOpen;
  const onMobileNavOpenChange = onMobileNavOpenChangeProp ?? setInternalOpen;
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/60 backdrop-blur-2xl" id="header">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="/" className="inline-flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-gold/10 text-brand-gold ring-1 ring-brand-gold/20">
            <span className="text-xs font-bold text-brand-gold">O</span>
          </span>
          <span className="text-sm font-semibold tracking-tight text-brand-white">OpenClaw</span>
        </a>

        <nav className="hidden md:flex items-center gap-6" id="main-nav">
          {[
            { label: "Philosophy", href: "#philosophy" },
            { label: "Services", href: "#service" },
            { label: "Clients", href: "#clients" },
            { label: "Pricing", href: "#pricing" },
            { label: "Outreach", href: "#outreach" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs font-medium uppercase tracking-widest text-brand-light/70 transition-colors hover:text-brand-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-brand-gold px-4 py-2 text-xs font-bold uppercase tracking-widest text-brand-black transition-all hover:bg-brand-gold-light hover:shadow-[0_0_30px_rgba(201,168,76,0.2)]"
          >
            Book a Call
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
