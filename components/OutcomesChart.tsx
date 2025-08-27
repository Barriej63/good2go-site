'use client';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend,
} from 'chart.js';
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

export default function OutcomesChart() {
  const data = {
    labels: ['Week 1', '2', '3', '4', '5', '6'],
    datasets: [
      { label: 'Gait Speed (m/s)', data: [0.8, 0.92, 1.0, 1.06, 1.12, 1.15], tension: 0.35, pointRadius: 2.5 },
      { label: 'Double-Support (%)', data: [34, 31, 28, 26, 24, 23], tension: 0.35, pointRadius: 2.5 },
    ],
  };
  const options = { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: true } }, scales: { x: { grid: { display: false } }, y: { grid: { display: false } } } } as const;
  return <Line data={data} options={options} />;
}
