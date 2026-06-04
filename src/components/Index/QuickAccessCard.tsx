import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen, faFilm, faPaperPlane, faPhoneVolume, faScroll, faUsers } from '@fortawesome/free-solid-svg-icons';

        const QuickAccessCard = () => (
          <>
            <div className="bg-brand-card border border-brand-border rounded-xl overflow-hidden" id="quick-access-card">
<div className="px-5 py-4 border-b border-brand-border">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-brand-gold"></div>
<h3 className="font-display font-700 text-brand-white text-sm">Quick Access</h3>
</div>
</div>
<div className="p-4 grid grid-cols-2 gap-2">
<Link className="flex flex-col items-center gap-2 p-3 bg-brand-accent rounded-lg hover:bg-brand-gold/10 hover:border-brand-gold/30 border border-transparent transition-all group" to="/" id="qa-sales">
<FontAwesomeIcon icon={faPhoneVolume} className="text-brand-gold text-lg group-hover:scale-110 transition-transform" />
<span className="text-brand-light text-[10px] font-semibold text-center">Sales Scripts</span>
</Link>
<Link className="flex flex-col items-center gap-2 p-3 bg-brand-accent rounded-lg hover:bg-brand-gold/10 hover:border-brand-gold/30 border border-transparent transition-all group" to="/outreach" id="qa-outreach">
<FontAwesomeIcon icon={faPaperPlane} className="text-blue-400 text-lg group-hover:scale-110 transition-transform" />
<span className="text-brand-light text-[10px] font-semibold text-center">Outreach DMs</span>
</Link>
<Link className="flex flex-col items-center gap-2 p-3 bg-brand-accent rounded-lg hover:bg-brand-gold/10 hover:border-brand-gold/30 border border-transparent transition-all group" to="/content-engine" id="qa-content">
<FontAwesomeIcon icon={faFilm} className="text-purple-400 text-lg group-hover:scale-110 transition-transform" />
<span className="text-brand-light text-[10px] font-semibold text-center">Content Engine</span>
</Link>
<Link className="flex flex-col items-center gap-2 p-3 bg-brand-accent rounded-lg hover:bg-brand-gold/10 hover:border-brand-gold/30 border border-transparent transition-all group" to="/30day-warp-plan" id="qa-hiring">
<FontAwesomeIcon icon={faUsers} className="text-green-400 text-lg group-hover:scale-110 transition-transform" />
<span className="text-brand-light text-[10px] font-semibold text-center">Team &amp; Hiring</span>
</Link>
<Link className="flex flex-col items-center gap-2 p-3 bg-brand-accent rounded-lg hover:bg-brand-gold/10 hover:border-brand-gold/30 border border-transparent transition-all group" to="/30day-warp-plan" id="qa-delivery">
<FontAwesomeIcon icon={faBoxOpen} className="text-orange-400 text-lg group-hover:scale-110 transition-transform" />
<span className="text-brand-light text-[10px] font-semibold text-center">Delivery OS</span>
</Link>
<Link className="flex flex-col items-center gap-2 p-3 bg-brand-accent rounded-lg hover:bg-brand-gold/10 hover:border-brand-gold/30 border border-transparent transition-all group" to="/" id="qa-rules">
<FontAwesomeIcon icon={faScroll} className="text-red-400 text-lg group-hover:scale-110 transition-transform" />
<span className="text-brand-light text-[10px] font-semibold text-center">Exec Rules</span>
</Link>
</div>
</div>
          </>
        );

        export default QuickAccessCard;
