import React from "react";
import { Link } from "react-router-dom";

        const QualifiedConversationsCard = () => (
          <>
            <div className="bg-brand-card border border-brand-border rounded-xl overflow-hidden" id="qualified-convos">
<div className="flex items-center justify-between px-5 py-4 border-b border-brand-border">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-brand-gold"></div>
<h3 className="font-display font-700 text-brand-white text-sm">Qualified Convos</h3>
</div>
<span className="bg-brand-gold/10 text-brand-gold text-xs font-bold px-2 py-0.5 rounded">4 Today</span>
</div>
<div className="px-5 py-4 space-y-3">
<div className="flex items-center gap-3">
<img className="w-8 h-8 rounded-full object-cover flex-shrink-0" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-8.jpg"/>
<div className="flex-1 min-w-0">
<p className="text-brand-white text-xs font-semibold truncate">Daniel M. — SaaS Founder</p>
<p className="text-brand-muted text-[10px]">Replied to Loom video • 2h ago</p>
</div>
<span className="text-brand-gold text-[10px] font-bold bg-brand-gold/10 px-2 py-0.5 rounded">Hot</span>
</div>
<div className="flex items-center gap-3">
<img className="w-8 h-8 rounded-full object-cover flex-shrink-0" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg"/>
<div className="flex-1 min-w-0">
<p className="text-brand-white text-xs font-semibold truncate">Priya L. — E-com Brand</p>
<p className="text-brand-muted text-[10px]">Booked discovery call • 3h ago</p>
</div>
<span className="text-green-400 text-[10px] font-bold bg-green-400/10 px-2 py-0.5 rounded">Booked</span>
</div>
<div className="flex items-center gap-3">
<img className="w-8 h-8 rounded-full object-cover flex-shrink-0" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg"/>
<div className="flex-1 min-w-0">
<p className="text-brand-white text-xs font-semibold truncate">Alex W. — Agency Owner</p>
<p className="text-brand-muted text-[10px]">Asked for pricing • 5h ago</p>
</div>
<span className="text-blue-400 text-[10px] font-bold bg-blue-400/10 px-2 py-0.5 rounded">Warm</span>
</div>
<div className="flex items-center gap-3">
<img className="w-8 h-8 rounded-full object-cover flex-shrink-0" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-9.jpg"/>
<div className="flex-1 min-w-0">
<p className="text-brand-white text-xs font-semibold truncate">Ryan C. — Consultant</p>
<p className="text-brand-muted text-[10px]">DM reply received • 6h ago</p>
</div>
<span className="text-brand-muted text-[10px] font-bold bg-brand-border px-2 py-0.5 rounded">New</span>
</div>
</div>
<div className="px-5 pb-4">
<Link to="/outreach" className="w-full inline-block">
<button className="w-full bg-brand-accent border border-brand-border text-brand-light text-xs font-semibold py-2 rounded-lg hover:border-brand-gold/30 hover:text-brand-gold transition-all">
                        + Log New Conversation
                    </button>
</Link>
</div>
</div>
          </>
        );

        export default QualifiedConversationsCard;
