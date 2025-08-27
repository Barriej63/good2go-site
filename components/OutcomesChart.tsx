'use client';
import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

export default function OutcomesChart() {
  const data = {
    labels: ['W1','W2','W3','W4','W5'],
    datasets: [
      { label: 'Score', data: [2,3,4,3,5], tension: 0.3, fill: false }
    ]
  };
  const options = { responsive: true, maintainAspectRatio: false, scales: { y: { beginAtZero: true } } } as const;
  return <div style={{height:260}}><Line data={data} options={options} /></div>;
}
