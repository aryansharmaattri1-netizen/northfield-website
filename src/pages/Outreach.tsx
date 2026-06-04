import "@/styles/outreach.css";
import ConversationLogTabSection from "@/components/Outreach/ConversationLogTabSection";
import FollowUpTabSection from "@/components/Outreach/FollowUpTabSection";
import LoomOutreachTabSection from "@/components/Outreach/LoomOutreachTabSection";
import Navigation from "@/components/layout/Navigation";
import OutreachHeroSection from "@/components/Outreach/OutreachHeroSection";
import OutreachTabsNav from "@/components/Outreach/OutreachTabsNav";
import PipelineTabSection from "@/components/Outreach/PipelineTabSection";
import VoicePromptsTabSection from "@/components/Outreach/VoicePromptsTabSection";

const Outreach = () => {
  return (
    <div className="bg-brand-black text-brand-white antialiased">

      <div className="bg-brand-gold text-brand-black text-center text-xs font-semibold tracking-widest uppercase py-2 px-4" id="topbar">
              Northfield OS v3 — Built for Founders Who Execute. Not Just Plan.
          </div>
      <Navigation />
      <main className="max-w-[1440px] mx-auto px-6 lg:px-10 py-8" id="main-content">
      <OutreachHeroSection />
      <OutreachTabsNav />
      <VoicePromptsTabSection />
      <LoomOutreachTabSection />
      <ConversationLogTabSection />
      <FollowUpTabSection />
      <PipelineTabSection /></main>
    </div>
  );
};

export default Outreach;
