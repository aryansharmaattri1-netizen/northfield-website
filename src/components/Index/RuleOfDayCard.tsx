import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faScroll } from '@fortawesome/free-solid-svg-icons';

        const RuleOfDayCard = () => (
          <>
            <div className="bg-brand-card border border-brand-gold/30 rounded-xl p-6 relative overflow-hidden" id="rule-of-day">
<div className="absolute inset-0 bg-brand-gold opacity-[0.03]"></div>
<div className="relative z-10">
<div className="flex items-center gap-2 mb-4">
<FontAwesomeIcon icon={faScroll} className="text-brand-gold text-sm" />
<span className="text-brand-gold text-xs font-bold uppercase tracking-widest">Rule of the Day</span>
</div>
<blockquote className="font-display text-brand-white text-lg font-700 leading-snug mb-3">
                        "Speed of execution beats perfection every single time."
                    </blockquote>
<p className="text-brand-muted text-xs leading-relaxed">
                        Don't wait for the perfect reel, the perfect script, or the perfect moment. Ship it. Iterate. Every hour of delay is MRR left on the table.
                    </p>
<div className="mt-4 pt-4 border-t border-brand-border">
<Link className="text-brand-gold text-xs font-semibold hover:underline flex items-center gap-1" to="/content-engine">
                            View All Execution Rules <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
</Link>
</div>
</div>
</div>
          </>
        );

        export default RuleOfDayCard;
