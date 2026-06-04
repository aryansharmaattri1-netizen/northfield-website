import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';

        const CtaStripSection = () => (
          <>
            <section className="relative overflow-hidden rounded-2xl mb-8" id="cta-strip" style={{ background: "linear-gradient(135deg, #C9A84C 0%, #A07830 50%, #C9A84C 100%)" }}>
<div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(0,0,0,0.3) 20px, rgba(0,0,0,0.3) 21px)" }}></div>
<div className="relative z-10 px-8 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
<div>
<p className="text-brand-black text-xs font-bold uppercase tracking-widest mb-2 opacity-70">You're 76 days from $250K MRR</p>
<h2 className="font-display text-2xl md:text-3xl font-800 text-brand-black leading-tight">
                        Every minute you delay costs you money.<br/>
<span className="opacity-70">Execute. Now.</span>
</h2>
</div>
<div className="flex flex-col items-center gap-3 flex-shrink-0">
<Link
to="/"
className="bg-brand-black text-brand-gold font-display font-800 text-base uppercase tracking-widest px-12 py-4 rounded-lg hover:bg-brand-dark transition-all shadow-xl flex items-center gap-3"
id="cta-execute"
>
<FontAwesomeIcon icon={faBolt} />
                        Execute Today\'s Tasks
                    </Link>
<p className="text-brand-black text-xs opacity-60">Day 14 of 30 • 3 tasks remaining</p>
</div>
</div>
</section>
          </>
        );

        export default CtaStripSection;
