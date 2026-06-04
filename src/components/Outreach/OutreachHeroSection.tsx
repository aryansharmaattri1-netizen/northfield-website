import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faPlus } from '@fortawesome/free-solid-svg-icons';

        const OutreachHeroSection = () => (
          <>
            <section className="relative overflow-hidden rounded-2xl mb-8 bg-brand-card border border-brand-border" id="outreach-hero" style={{ backgroundImage: "linear-gradient(135deg, #111111 0%, #0d1a0a 60%, #0A0A0A 100%)" }}>
<div className="absolute inset-0 opacity-5" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 40px, #C9A84C 40px, #C9A84C 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, #C9A84C 40px, #C9A84C 41px)" }}></div>
<div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
<div className="relative z-10 px-8 md:px-12 py-10 md:py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
<div>
<div className="flex items-center gap-2 mb-3">
<span className="text-brand-gold text-xs font-bold uppercase tracking-widest">Outreach Engine</span>
<span className="text-brand-muted text-xs">•</span>
<span className="text-brand-muted text-xs font-medium">Voice-to-Text · Loom · Follow-Up Sequences</span>
</div>
<h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-800 text-brand-white leading-tight mb-3">
                        Reach Out. Log It.<br/>
<span className="text-brand-gold">Close the Loop.</span>
</h1>
<p className="text-brand-light text-sm md:text-base max-w-xl leading-relaxed">
                        Every qualified conversation starts with a precise outreach. Use voice-to-text DMs, Loom videos, and structured follow-up sequences to fill your pipeline daily.
                    </p>
<div className="flex items-center gap-4 mt-5 flex-wrap">
<Link
  to="/outreach"
  className="bg-brand-gold hover:bg-brand-gold-light text-brand-black text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-lg transition-all flex items-center gap-2"
>
<FontAwesomeIcon icon={faMicrophone} /> New Voice DM
                        </Link>
<Link
  to="/"
  className="border border-brand-border hover:border-brand-gold/50 text-brand-light hover:text-brand-white text-xs font-semibold uppercase tracking-wide px-5 py-2.5 rounded-lg transition-all flex items-center gap-2"
>
<FontAwesomeIcon icon={faPlus} /> Log Conversation
                        </Link>
</div>
</div>
<div className="flex flex-col sm:flex-row md:flex-col items-start md:items-end gap-3 flex-shrink-0">
<div className="bg-brand-accent border border-brand-border rounded-xl p-5 min-w-[160px]">
<div className="text-brand-muted text-[10px] font-bold uppercase tracking-widest mb-1">Today</div>
<div className="font-display text-3xl font-800 text-brand-gold">7</div>
<div className="text-brand-light text-xs">Conversations Sent</div>
</div>
<div className="bg-brand-accent border border-brand-border rounded-xl p-5 min-w-[160px]">
<div className="text-brand-muted text-[10px] font-bold uppercase tracking-widest mb-1">Qualified</div>
<div className="font-display text-3xl font-800 text-green-400">3</div>
<div className="text-brand-light text-xs">Hot Leads</div>
</div>
<div className="bg-brand-accent border border-brand-border rounded-xl p-5 min-w-[160px]">
<div className="text-brand-muted text-[10px] font-bold uppercase tracking-widest mb-1">This Week</div>
<div className="font-display text-3xl font-800 text-brand-white">31</div>
<div className="text-brand-light text-xs">Total Outreaches</div>
</div>
</div>
</div>
</section>
          </>
        );

        export default OutreachHeroSection;
