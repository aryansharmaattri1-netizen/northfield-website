import React from "react";

        const ExecScoreCard = () => (
          <>
            <div className="bg-brand-card border border-brand-border rounded-xl overflow-hidden" id="exec-score-card">
<div className="flex items-center justify-between px-5 py-4 border-b border-brand-border">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-green-400"></div>
<h3 className="font-display font-700 text-brand-white text-sm">Execution Score</h3>
</div>
<span className="text-green-400 text-xs font-bold">84/100</span>
</div>
<div className="px-5 py-4 space-y-3">
<div>
<div className="flex justify-between mb-1">
<span className="text-brand-light text-xs">Content Published</span>
<span className="text-brand-white text-xs font-semibold">1/1</span>
</div>
<div className="h-1.5 bg-brand-border rounded-full overflow-hidden">
<div className="h-full bg-green-400 rounded-full" style={{ width: "100%" }}></div>
</div>
</div>
<div>
<div className="flex justify-between mb-1">
<span className="text-brand-light text-xs">Outreach Sent</span>
<span className="text-brand-white text-xs font-semibold">20/20</span>
</div>
<div className="h-1.5 bg-brand-border rounded-full overflow-hidden">
<div className="h-full bg-green-400 rounded-full" style={{ width: "100%" }}></div>
</div>
</div>
<div>
<div className="flex justify-between mb-1">
<span className="text-brand-light text-xs">Discovery Calls</span>
<span className="text-brand-white text-xs font-semibold">1/2</span>
</div>
<div className="h-1.5 bg-brand-border rounded-full overflow-hidden">
<div className="h-full bg-brand-gold rounded-full" style={{ width: "50%" }}></div>
</div>
</div>
<div>
<div className="flex justify-between mb-1">
<span className="text-brand-light text-xs">Client Delivery</span>
<span className="text-brand-white text-xs font-semibold">0/3</span>
</div>
<div className="h-1.5 bg-brand-border rounded-full overflow-hidden">
<div className="h-full bg-red-400 rounded-full" style={{ width: "0%" }}></div>
</div>
</div>
<div>
<div className="flex justify-between mb-1">
<span className="text-brand-light text-xs">EOD Review</span>
<span className="text-brand-white text-xs font-semibold">Pending</span>
</div>
<div className="h-1.5 bg-brand-border rounded-full overflow-hidden">
<div className="h-full bg-brand-border rounded-full" style={{ width: "0%" }}></div>
</div>
</div>
</div>
</div>
          </>
        );

        export default ExecScoreCard;
