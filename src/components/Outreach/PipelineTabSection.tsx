import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faPlus } from '@fortawesome/free-solid-svg-icons';

        const PipelineTabSection = () => (
          <>
            <section className="outreach-tab-content hidden" id="tab-content-pipeline">
<div className="flex flex-col gap-6">
{/* Pipeline Header */}
<div className="flex items-center justify-between flex-wrap gap-3">
<div>
<h3 className="font-display font-700 text-brand-white text-base">Outreach Pipeline</h3>
<p className="text-brand-muted text-xs mt-0.5">Your full outreach funnel. Move prospects through stages until they close or die.</p>
</div>
<div className="flex items-center gap-2">
<button className="border border-brand-border hover:border-brand-gold/40 text-brand-light text-xs font-semibold uppercase tracking-wide px-4 py-2 rounded-lg transition-all flex items-center gap-2">
<FontAwesomeIcon icon={faFilter} /> Filter
                        </button>
<Link
  to="/outreach"
  className="bg-brand-gold hover:bg-brand-gold-light text-brand-black text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-lg transition-all flex items-center gap-2"
>
<FontAwesomeIcon icon={faPlus} /> Add Prospect
                        </Link>
</div>
</div>
{/* Kanban Pipeline */}</div></section>
          </>
        );

        export default PipelineTabSection;
