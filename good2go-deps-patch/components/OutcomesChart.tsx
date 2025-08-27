
'use client';

import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

type OutcomesChartProps = {
  labels?: string[];
  seriesA?: number[];
  seriesB?: number[];
  height?: number;
};

export default function OutcomesChart({
  labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
  seriesA = [42, 55, 63, 70],
  seriesB = [0.42, 0.36, 0.30, 0.26],
  height = 240,
}: OutcomesChartProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    if (chartRef.current) chartRef.current.destroy();

    chartRef.current = new Chart(canvasRef.current, {
      type: 'line',
      data: {
        labels,
        datasets: [
          {
            label: 'Gait Speed (cm/s)',
            data: seriesA,
            borderWidth: 2,
            pointRadius: 2,
            tension: 0.3,
          },
          {
            label: 'Double Support Time (s)',
            data: seriesB,
            borderWidth: 2,
            pointRadius: 2,
            tension: 0.3,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: true },
          tooltip: { mode: 'nearest', intersect: false },
        },
        scales: {
          x: {
            ticks: { autoSkip: true, maxTicksLimit: 6 },
            grid: { display: false },
          },
          y: {
            beginAtZero: false,
            grid: { drawBorder: false },
          },
        },
      },
    });

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
        chartRef.current = null;
      }
    };
  }, [labels, seriesA, seriesB]);

  return (
    <div style={{ height }}>
      <canvas ref={canvasRef} />
    </div>
  );
}
