import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCirclePlus } from '@fortawesome/free-solid-svg-icons';

        const HiringStatusCard = () => (
          <>
            <div className="bg-brand-card border border-brand-border rounded-xl overflow-hidden" id="hiring-status">
<div className="flex items-center justify-between px-5 py-4 border-b border-brand-border">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-purple-400"></div>
<h3 className="font-display font-700 text-brand-white text-sm">Hiring Status</h3>
</div>
<span className="text-purple-400 text-xs font-semibold">3 Applicants</span>
</div>
<div className="px-5 py-4 space-y-3">
<div className="p-3 bg-brand-accent rounded-lg">
<div className="flex items-center justify-between mb-2">
<span className="text-brand-white text-xs font-semibold">Content VA</span>
<span className="bg-green-400/10 text-green-400 text-[9px] font-bold px-2 py-0.5 rounded uppercase">Interview</span>
</div>
<div className="flex items-center gap-2">
<div className="flex -space-x-1">
<img className="w-5 h-5 rounded-full object-cover border border-brand-card" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg"/>
<img className="w-5 h-5 rounded-full object-cover border border-brand-card" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg"/>
</div>
<span className="text-brand-muted text-[10px]">2 candidates shortlisted</span>
</div>
</div>
<div className="p-3 bg-brand-accent rounded-lg">
<div className="flex items-center justify-between mb-2">
<span className="text-brand-white text-xs font-semibold">Sales Setter</span>
<span className="bg-brand-gold/10 text-brand-gold text-[9px] font-bold px-2 py-0.5 rounded uppercase">Reviewing</span>
</div>
<div className="flex items-center gap-2">
<div className="flex -space-x-1">
<img className="w-5 h-5 rounded-full object-cover border border-brand-card" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg"/>
</div>
<span className="text-brand-muted text-[10px]">1 application received</span>
</div>
</div>
<div className="p-3 bg-brand-accent rounded-lg">
<div className="flex items-center justify-between mb-2">
<span className="text-brand-white text-xs font-semibold">Client Fulfillment</span>
<span className="bg-brand-border/60 text-brand-muted text-[9px] font-bold px-2 py-0.5 rounded uppercase">Open</span>
</div>
<div className="flex items-center gap-2">
<FontAwesomeIcon icon={faCirclePlus} className="text-brand-muted text-sm" />
<span className="text-brand-muted text-[10px]">Accepting applications</span>
</div>
</div>
</div>
<div className="px-5 pb-4">
<Link className="block text-center text-brand-gold text-xs font-semibold hover:underline" to="/content-engine">
                        Open Team &amp; Hiring Module <FontAwesomeIcon icon={faArrowRight} className="text-xs ml-1" />
</Link>
</div>
</div>
          </>
        );

        export default HiringStatusCard;
