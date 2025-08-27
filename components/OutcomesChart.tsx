'use client';
import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

type Props = {
  labels?: string[];
  series?: number[];
  title?: string;
};

export default function OutcomesChart({
  labels = ['W1','W2','W3','W4','W5'],
  series = [2, 3, 4, 3, 5],
  title = 'Outcomes'
}: Props) {
  const data = {
    labels,
    datasets: [
      {
        label: 'Score',
        data: series,
        tension: 0.3,
        fill: false
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
    scales: { y: { beginAtZero: true } }
  } as const;

  return <div style={{height:260}}><Line data={data} options={options} /></div>;
}
