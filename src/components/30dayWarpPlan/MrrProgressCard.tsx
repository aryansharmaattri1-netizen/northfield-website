import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faLock } from '@fortawesome/free-solid-svg-icons';

        const MrrProgressCard = () => (
          <>
            <div className="bg-brand-card border border-brand-border rounded-xl overflow-hidden" id="mrr-progress-card">
<div className="px-5 py-4 border-b border-brand-border flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-brand-gold"></div>
<h3 className="font-display font-700 text-brand-white text-sm">MRR Milestones</h3>
</div>
<div className="px-5 py-4 space-y-3">
<div className="flex items-center gap-3 p-3 bg-green-400/5 border border-green-400/20 rounded-lg" id="mrr-m1">
<div className="w-8 h-8 rounded-full bg-green-400 flex items-center justify-center flex-shrink-0">
<FontAwesomeIcon icon={faCheck} className="text-brand-black text-xs" />
</div>
<div className="flex-1">
<div className="text-brand-white text-xs font-semibold">First $1K MRR</div>
<div className="text-brand-muted text-[10px]">Day 6 — Achieved</div>
</div>
<span className="text-green-400 text-xs font-bold">✓</span>
</div>
<div className="flex items-center gap-3 p-3 bg-green-400/5 border border-green-400/20 rounded-lg" id="mrr-m2">
<div className="w-8 h-8 rounded-full bg-green-400 flex items-center justify-center flex-shrink-0">
<FontAwesomeIcon icon={faCheck} className="text-brand-black text-xs" />
</div>
<div className="flex-1">
<div className="text-brand-white text-xs font-semibold">First $5K MRR</div>
<div className="text-brand-muted text-[10px]">Day 12 — Achieved</div>
</div>
<span className="text-green-400 text-xs font-bold">✓</span>
</div>
<div className="flex items-center gap-3 p-3 bg-brand-gold/5 border border-brand-gold/30 rounded-lg" id="mrr-m3">
<div className="w-8 h-8 rounded-full bg-brand-gold/20 border border-brand-gold/40 flex items-center justify-center flex-shrink-0">
<span className="text-brand-gold font-display font-700 text-xs">→</span>
</div>
<div className="flex-1">
<div className="text-brand-white text-xs font-semibold">First $10K MRR</div>
<div className="text-brand-muted text-[10px]">Target: Day 21</div>
</div>
<span className="text-brand-gold text-xs font-bold">Next</span>
</div>
<div className="flex items-center gap-3 p-3 bg-brand-accent rounded-lg opacity-50" id="mrr-m4">
<div className="w-8 h-8 rounded-full bg-brand-border flex items-center justify-center flex-shrink-0">
<FontAwesomeIcon icon={faLock} className="text-brand-muted text-xs" />
</div>
<div className="flex-1">
<div className="text-brand-muted text-xs font-semibold">First $25K MRR</div>
<div className="text-brand-muted text-[10px]">Target: Day 30</div>
</div>
<span className="text-brand-muted text-xs">Locked</span>
</div>
</div>
</div>
          </>
        );

        export default MrrProgressCard;
