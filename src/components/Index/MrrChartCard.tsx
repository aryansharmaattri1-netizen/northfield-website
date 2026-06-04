import { useEffect, useRef } from 'react';import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';

export default function MrrChartCard() {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mounted = true;

    const initChart = async () => {
      try {
        const Plotly = await import('plotly.js-dist-min');

        if (!mounted || !chartRef.current) return;

        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
        const mrr = [12000, 18500, 24200, 31800, 38800, 47200];
        const target = [20000, 40000, 60000, 80000, 100000, 120000];

        const trace1 = {
          type: 'scatter' as const,
          mode: 'lines+markers' as const,
          name: 'Actual MRR',
          x: months,
          y: mrr,
          fill: 'tozeroy' as const,
          fillcolor: 'rgba(201, 168, 76, 0.08)',
          line: { color: '#C9A84C', width: 3, shape: 'spline' as const },
          marker: { color: '#C9A84C', size: 6, line: { color: '#111111', width: 2 } },
          hovertemplate: '<b>%{x}</b><br>MRR: $%{y:,.0f}<extra></extra>',
        };

        const trace2 = {
          type: 'scatter' as const,
          mode: 'lines' as const,
          name: '90-Day Target Path',
          x: months,
          y: target,
          line: { color: '#3B82F6', width: 2, dash: 'dot' as const },
          hovertemplate: '<b>%{x}</b><br>Target: $%{y:,.0f}<extra></extra>',
        };

        const layout = {
          paper_bgcolor: '#161616',
          plot_bgcolor: '#161616',
          margin: { t: 20, r: 20, b: 40, l: 60 },
          xaxis: {
            color: '#6B6B6B',
            gridcolor: '#222222',
            tickfont: { size: 11, color: '#6B6B6B' },
          },
          yaxis: {
            color: '#6B6B6B',
            gridcolor: '#222222',
            tickfont: { size: 11, color: '#6B6B6B' },
            tickprefix: '$',
            tickformat: ',.0f',
          },
          legend: {
            font: { color: '#ABABAB', size: 11 },
            bgcolor: 'transparent',
            orientation: 'h' as const,
            x: 0,
            y: -0.15,
          },
          showlegend: true,
        };

        const config = { responsive: true, displayModeBar: false, displaylogo: false };

        Plotly.newPlot(chartRef.current, [trace1, trace2], layout, config);
      } catch {
        if (chartRef.current) {
          chartRef.current.innerHTML =
            '<div class="flex items-center justify-center h-full text-brand-muted text-sm">Chart unavailable</div>';
        }
      }
    };

    initChart();

    return () => {
      mounted = false;
      if (chartRef.current) {
        import('plotly.js-dist-min').then((Plotly) => {
          if (chartRef.current) {
            Plotly.purge(chartRef.current);
          }
        });
      }
    };
  }, []);

  return (
    <div className="bg-brand-card border border-brand-border rounded-xl overflow-hidden" id="mrr-chart-card">
      <div className="flex items-center justify-between px-6 py-4 border-b border-brand-border">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
          <h2 className="font-display font-700 text-brand-white text-base">MRR Growth Trajectory</h2>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-brand-muted text-xs">Last 6 months</span>
          <div className="flex items-center gap-1 bg-brand-gold/10 text-brand-gold text-[10px] font-bold px-2 py-1 rounded">
            <FontAwesomeIcon icon={faArrowTrendUp} className="text-xs" /> +$8.4K MoM
          </div>
        </div>
      </div>
      <div className="px-2" id="mrr-chart" style={{ height: '260px' }} ref={chartRef}></div>
    </div>
  );
}
