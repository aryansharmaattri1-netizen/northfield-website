import { useState } from 'react';import "@/styles/30day-warp-plan.css";
import CtaStripSection from "@/components/30dayWarpPlan/CtaStripSection";
import DailyOutputTrackerCard from "@/components/30dayWarpPlan/DailyOutputTrackerCard";
import DayCardsColumn from "@/components/30dayWarpPlan/DayCardsColumn";
import Footer from "@/components/layout/Footer";
import MrrProgressCard from "@/components/30dayWarpPlan/MrrProgressCard";
import Navigation from "@/components/layout/Navigation";
import PhaseOverviewRow from "@/components/30dayWarpPlan/PhaseOverviewRow";
import ProgressTrackerCard from "@/components/30dayWarpPlan/ProgressTrackerCard";
import WarpHeroSection from "@/components/30dayWarpPlan/WarpHeroSection";
import WarpRuleCard from "@/components/30dayWarpPlan/WarpRuleCard";

const ThirtyDayWarpPlan = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);
  const [days37Expanded, setDays37Expanded] = useState<boolean>(false);
  const [days813Expanded, setDays813Expanded] = useState<boolean>(false);

  const onDays813ExpandedChange = (newValue: boolean) => {
    setDays813Expanded(newValue);
  };

  const onMobileNavOpenChange = (newValue: boolean) => {
    setMobileNavOpen(newValue);
  };

  const onDays37ExpandedChange = (newValue: boolean) => {
    setDays37Expanded(newValue);
  };


  return (
    <div className="bg-brand-black text-brand-white antialiased">

      <div className="bg-brand-gold text-brand-black text-center text-xs font-semibold tracking-widest uppercase py-2 px-4" id="topbar">
              Northfield OS v3 — Built for Founders Who Execute. Not Just Plan.
          </div>
      <Navigation mobileNavOpen={mobileNavOpen} onMobileNavOpenChange={onMobileNavOpenChange} />
      <main className="max-w-[1440px] mx-auto px-6 lg:px-10 py-8" id="main-content">
      <WarpHeroSection />
      <PhaseOverviewRow />
      <section className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8" id="main-grid">
      <DayCardsColumn days37Expanded={days37Expanded} days813Expanded={days813Expanded} onDays37ExpandedChange={onDays37ExpandedChange} onDays813ExpandedChange={onDays813ExpandedChange} />
      <div className="flex flex-col gap-6" id="warp-sidebar">
      <ProgressTrackerCard />
      <DailyOutputTrackerCard />
      <MrrProgressCard />
      <WarpRuleCard />
      </div>
      </section>
      <CtaStripSection />
      </main>
      <Footer />
    </div>
  );
};

export default ThirtyDayWarpPlan;
