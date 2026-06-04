import { useEffect } from 'react';export default function ProgressTrackerCard() {
  const days = Array.from({ length: 30 }, (_, i) => i + 1);

  const getDayClass = (day: number) => {
    const base = 'w-full aspect-square rounded flex items-center justify-center text-[10px] font-bold cursor-pointer transition-all';
    if (day < 14) return `${base} bg-green-400/20 text-green-400 hover:bg-green-400/30`;
    if (day === 14) return `${base} bg-brand-gold text-brand-black shadow-lg shadow-brand-gold/30`;
    if (day <= 21) return `${base} bg-blue-500/10 text-blue-400/50 hover:bg-blue-500/20`;
    return `${base} bg-brand-accent text-brand-muted hover:bg-brand-border`;
  };

  const getDayTitle = (day: number) => {
    if (day < 14) return `Day ${day} — Complete`;
    if (day === 14) return `Day ${day} — Active`;
    if (day <= 21) return `Day ${day} — Upcoming`;
    return `Day ${day} — Locked`;
  };

  return (
    <div className="bg-brand-card border border-brand-border rounded-xl overflow-hidden" id="progress-tracker-card">
      <div className="px-5 py-4 border-b border-brand-border flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
        <h3 className="font-display font-700 text-brand-white text-sm">30-Day Progress</h3>
      </div>
      <div className="px-5 py-5">
        <div className="grid grid-cols-6 gap-1.5 mb-5">
          {days.map((day) => (
            <div
              key={day}
              className={getDayClass(day)}
              title={getDayTitle(day)}
            >
              {day}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between text-[10px] text-brand-muted mb-1">
          <span>Day 1</span>
          <span>Day 30</span>
        </div>
        <div className="h-2 bg-brand-border rounded-full overflow-hidden mb-4">
          <div
            className="h-full bg-gradient-to-r from-brand-gold to-brand-gold-light rounded-full"
            style={{ width: '57%' }}
          ></div>
        </div>
        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="bg-brand-accent rounded-lg p-2.5">
            <div className="font-display font-700 text-green-400 text-lg">13</div>
            <div className="text-brand-muted text-[10px] uppercase tracking-wide">Done</div>
          </div>
          <div className="bg-brand-gold/10 border border-brand-gold/20 rounded-lg p-2.5">
            <div className="font-display font-700 text-brand-gold text-lg">1</div>
            <div className="text-brand-muted text-[10px] uppercase tracking-wide">Active</div>
          </div>
          <div className="bg-brand-accent rounded-lg p-2.5">
            <div className="font-display font-700 text-brand-muted text-lg">16</div>
            <div className="text-brand-muted text-[10px] uppercase tracking-wide">Left</div>
          </div>
        </div>
      </div>
    </div>
  );
}
