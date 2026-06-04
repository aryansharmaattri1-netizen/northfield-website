import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faScroll } from '@fortawesome/free-solid-svg-icons';

        const WarpRuleCard = () => (
          <>
            <div className="bg-brand-card border border-brand-gold/30 rounded-xl p-5 relative overflow-hidden" id="warp-rule-card">
<div className="absolute inset-0 bg-brand-gold opacity-[0.03]"></div>
<div className="relative z-10">
<div className="flex items-center gap-2 mb-3">
<FontAwesomeIcon icon={faScroll} className="text-brand-gold text-sm" />
<span className="text-brand-gold text-[10px] font-bold uppercase tracking-widest">Warp Rule #14</span>
</div>
<blockquote className="font-display text-brand-white text-base font-700 leading-snug mb-3">
                            "The founder who sends the most DMs wins. Volume is a strategy."
                        </blockquote>
<p className="text-brand-muted text-xs leading-relaxed">
                            At Day 14, your only job is outreach volume and discovery calls. Every conversation is a data point. Every rejection is a lesson. Keep moving.
                        </p>
<div className="mt-4 pt-4 border-t border-brand-border">
<Link className="text-brand-gold text-xs font-semibold hover:underline flex items-center gap-1" to="/30day-warp-plan">
                                All Execution Rules <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
</Link>
</div>
</div>
</div>
          </>
        );

        export default WarpRuleCard;
