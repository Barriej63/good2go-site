'use client';
import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

export default function OutcomesChart() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;

    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Week 0', 'Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [
          {
            label: 'Gait Speed (m/s)',
            data: [0.9, 1.0, 1.05, 1.1, 1.15],
            borderWidth: 2,
            fill: false,
          },
          {
            label: 'Double-Support Time (s)',
            data: [0.32, 0.30, 0.28, 0.26, 0.25],
            borderWidth: 2,
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: { legend: { display: true } },
        elements: { point: { radius: 2 } },
        scales: {
          x: { grid: { display: false } },
          y: { grid: { color: 'rgba(0,0,0,0.05)' } },
        },
      },
    });

    return () => chart.destroy();
  }, []);

  return <canvas ref={canvasRef} className="w-full h-56" />;
}
