import { useEffect, useRef } from 'react';export default function DailyOutputTrackerCard() {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let plotlyInstance: typeof import('plotly.js') | null = null;

    const initChart = async () => {
      try {
        const Plotly = await import('plotly.js-dist-min' as string);
        plotlyInstance = Plotly as unknown as typeof import('plotly.js');

        if (!chartRef.current) return;

        const outputData = [
          {
            type: 'bar' as const,
            x: ['Reels', 'DMs', 'Looms', 'Calls', 'Reports'],
            y: [100, 100, 100, 50, 0],
            marker: {
              color: ['#4ade80', '#4ade80', '#4ade80', '#C9A84C', '#374151'],
              line: { color: '#161616', width: 1 },
            },
            hovertemplate: '<b>%{x}</b><br>%{y}% complete<extra></extra>',
          },
        ];

        const outputLayout = {
          paper_bgcolor: '#161616',
          plot_bgcolor: '#161616',
          margin: { t: 15, r: 15, b: 40, l: 35 },
          xaxis: {
            color: '#6B6B6B',
            gridcolor: 'transparent',
            tickfont: { size: 10, color: '#6B6B6B' },
          },
          yaxis: {
            color: '#6B6B6B',
            gridcolor: '#222222',
            tickfont: { size: 10, color: '#6B6B6B' },
            ticksuffix: '%',
            range: [0, 120],
          },
          showlegend: false,
        };

        (plotlyInstance as any).newPlot(chartRef.current, outputData, outputLayout, {
          responsive: true,
          displayModeBar: false,
          displaylogo: false,
        });
      } catch {
        if (chartRef.current) {
          chartRef.current.innerHTML =
            '<div class="flex items-center justify-center h-full text-brand-muted text-sm p-4">Chart unavailable</div>';
        }
      }
    };

    initChart();

    return () => {
      if (chartRef.current && plotlyInstance) {
        try {
          (plotlyInstance as any).purge(chartRef.current);
        } catch {
          // ignore
        }
      }
    };
  }, []);

  const outputs = [
    { color: 'bg-green-400', label: 'Reels Posted', value: '1/1' },
    { color: 'bg-green-400', label: 'DMs Sent', value: '20/20' },
    { color: 'bg-green-400', label: 'Looms Sent', value: '5/5' },
    { color: 'bg-brand-gold', label: 'Discovery Calls', value: '1/2' },
    { color: 'bg-brand-border', label: 'Client Reports', value: '0/3' },
  ];

  return (
    <div
      className="bg-brand-card border border-brand-border rounded-xl overflow-hidden"
      id="daily-output-tracker"
    >
      <div className="px-5 py-4 border-b border-brand-border flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
          <h3 className="font-display font-700 text-brand-white text-sm">Today's Outputs</h3>
        </div>
        <span className="text-brand-gold text-xs font-bold">Day 14</span>
      </div>

      <div ref={chartRef} id="output-chart" style={{ height: '220px' }}></div>

      <div className="px-5 pb-4 space-y-2">
        {outputs.map(({ color, label, value }) => (
          <div key={label} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${color}`}></div>
              <span className="text-brand-light text-xs">{label}</span>
            </div>
            <span className="text-brand-white text-xs font-semibold">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
