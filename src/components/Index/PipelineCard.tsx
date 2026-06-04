import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

        const PipelineCard = () => (
          <>
            <div className="bg-brand-card border border-brand-border rounded-xl overflow-hidden" id="pipeline-card">
<div className="flex items-center justify-between px-5 py-4 border-b border-brand-border">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-blue-400"></div>
<h3 className="font-display font-700 text-brand-white text-sm">Sales Pipeline</h3>
</div>
<span className="text-blue-400 text-xs font-semibold">7 Active</span>
</div>
<div className="px-5 py-4 space-y-3">
<div className="flex items-center justify-between p-3 bg-brand-accent rounded-lg" id="pipeline-item-1">
<div className="flex items-center gap-3">
<img className="w-7 h-7 rounded-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg"/>
<div>
<p className="text-brand-white text-xs font-semibold">Marcus T.</p>
<p className="text-brand-muted text-[10px]">SaaS Founder</p>
</div>
</div>
<div className="text-right">
<p className="text-brand-gold text-xs font-bold">$4,500/mo</p>
<span className="bg-brand-gold/10 text-brand-gold text-[9px] font-bold px-1.5 py-0.5 rounded uppercase">Closing</span>
</div>
</div>
<div className="flex items-center justify-between p-3 bg-brand-accent rounded-lg" id="pipeline-item-2">
<div className="flex items-center gap-3">
<img className="w-7 h-7 rounded-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-7.jpg"/>
<div>
<p className="text-brand-white text-xs font-semibold">Sarah K.</p>
<p className="text-brand-muted text-[10px]">E-commerce</p>
</div>
</div>
<div className="text-right">
<p className="text-brand-gold text-xs font-bold">$3,200/mo</p>
<span className="bg-blue-500/10 text-blue-400 text-[9px] font-bold px-1.5 py-0.5 rounded uppercase">Discovery</span>
</div>
</div>
<div className="flex items-center justify-between p-3 bg-brand-accent rounded-lg" id="pipeline-item-3">
<div className="flex items-center gap-3">
<img className="w-7 h-7 rounded-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-4.jpg"/>
<div>
<p className="text-brand-white text-xs font-semibold">James R.</p>
<p className="text-brand-muted text-[10px]">Agency Owner</p>
</div>
</div>
<div className="text-right">
<p className="text-brand-gold text-xs font-bold">$6,000/mo</p>
<span className="bg-purple-500/10 text-purple-400 text-[9px] font-bold px-1.5 py-0.5 rounded uppercase">Proposal</span>
</div>
</div>
<Link className="block text-center text-brand-gold text-xs font-semibold hover:underline mt-1" to="/content-engine">
                            View Full Pipeline <FontAwesomeIcon icon={faArrowRight} className="text-xs ml-1" />
</Link>
</div>
</div>
          </>
        );

        export default PipelineCard;
