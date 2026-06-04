import { useState } from 'react';import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faFilm, faCalendarCheck, faBolt, faChartLine } from '@fortawesome/free-solid-svg-icons';

const tabs = [
  { id: 'idea-journal', label: 'Idea Journal', icon: faLightbulb },
  { id: 'reel-queue', label: 'Reel & Post Queue', icon: faFilm },
  { id: 'publishing', label: 'Publishing Checklist', icon: faCalendarCheck },
  { id: 'quick-capture', label: 'Quick Capture', icon: faBolt },
  { id: 'performance', label: 'Performance Notes', icon: faChartLine },
];

export default function ContentTabsNav() {
  const [activeTab, setActiveTab] = useState('idea-journal');

  return (
    <div className="flex items-center gap-1 mb-6 bg-brand-card border border-brand-border rounded-xl p-1.5 overflow-x-auto" id="content-tabs">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          id={`tab-${tab.id}`}
          className={`content-tab flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wide whitespace-nowrap transition-all ${
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
