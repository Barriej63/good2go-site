
"use client";

import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export default function OutcomesChart() {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = ref.current.getContext("2d");
    if (!ctx) return;

    const chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
        datasets: [
          { label: "Gait Speed", data: [0.8, 0.92, 1.05, 1.1], fill: false },
          { label: "Balance Score", data: [62, 68, 74, 79], fill: false },
        ],
      },
      options: {
        responsive: true,
        plugins: { legend: { display: true } },
        scales: { y: { beginAtZero: false } },
      },
    });

    return () => chart.destroy();
  }, []);

  return (
    <div className="rounded-xl border border-slate-200 p-4">
      <canvas ref={ref} height={240} />
    </div>
  );
}
