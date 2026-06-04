import { useState } from 'react';import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faVideo, faComments, faRotateRight, faChartGantt } from '@fortawesome/free-solid-svg-icons';

const tabs = [
  { id: 'voice-prompts', label: 'Voice-to-Text Prompts', icon: faMicrophone },
  { id: 'loom-outreach', label: 'Loom Outreach', icon: faVideo },
  { id: 'conversation-log', label: 'Conversation Log', icon: faComments },
  { id: 'follow-up', label: 'Follow-Up Sequences', icon: faRotateRight },
  { id: 'pipeline', label: 'Pipeline View', icon: faChartGantt },
];

export default function OutreachTabsNav() {
  const [activeTab, setActiveTab] = useState('voice-prompts');

  return (
    <div className="flex items-center gap-1 mb-6 bg-brand-card border border-brand-border rounded-xl p-1.5 overflow-x-auto" id="outreach-tabs">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          id={`tab-${tab.id}`}
          className={`outreach-tab flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wide whitespace-nowrap transition-all ${
            activeTab === tab.id
              ? 'active-tab bg-brand-gold text-brand-black'
              : 'text-brand-light hover:text-brand-white hover:bg-brand-accent'
          }`}
          onClick={() => setActiveTab(tab.id)}
        >
          <FontAwesomeIcon icon={tab.icon} /> {tab.label}
        </button>
      ))}
    </div>
  );
}
