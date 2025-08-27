'use client';
import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

type Props = {
  labels?: string[];
  series?: number[];
  title?: string;
};

export default function OutcomesChart({ labels, series, title = 'Outcomes' }: Props) {
  const safeLabels = labels ?? ['Week 1','Week 2','Week 3','Week 4','Week 5'];
  const safeSeries = series ?? [2, 4, 3, 6, 7];

  const data = {
    labels: safeLabels,
    datasets: [
      {
        label: 'Score',
        data: safeSeries,
        tension: 0.3,
        fill: false,
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: true },
      title: { display: !!title, text: title }
    },
    scales: {
      y: { beginAtZero: true }
    }
  } as const;

  return (
    <div className="w-full h-64">
      <Line data={data} options={options} />
    </div>
  );
}
