import "@/styles/content-engine.css";
import ContentHeroSection from "@/components/ContentEngine/ContentHeroSection";
import ContentTabsNav from "@/components/ContentEngine/ContentTabsNav";
import IdeaJournalPanel from "@/components/ContentEngine/IdeaJournalPanel";
import Navigation from "@/components/layout/Navigation";
import PerformancePanel from "@/components/ContentEngine/PerformancePanel";
import PublishingChecklistPanel from "@/components/ContentEngine/PublishingChecklistPanel";
import QuickCapturePanel from "@/components/ContentEngine/QuickCapturePanel";
import ReelQueuePanel from "@/components/ContentEngine/ReelQueuePanel";

const ContentEngine = () => {
  return (
    <div className="bg-brand-black text-brand-white antialiased">

      <div className="bg-brand-gold text-brand-black text-center text-xs font-semibold tracking-widest uppercase py-2 px-4" id="topbar">
              Northfield OS v3 — Built for Founders Who Execute. Not Just Plan.
          </div>
      <Navigation />
      <main className="max-w-[1440px] mx-auto px-6 lg:px-10 py-8" id="main-content">
      <ContentHeroSection />
      <ContentTabsNav />
      <IdeaJournalPanel />
      <ReelQueuePanel />
      <PublishingChecklistPanel />
      <QuickCapturePanel />
      <PerformancePanel /></main>
    </div>
  );
};

export default ContentEngine;
