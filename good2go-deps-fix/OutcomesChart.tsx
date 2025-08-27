"use client";
import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export default function OutcomesChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    if (!chartRef.current) return;
    const ctx = chartRef.current.getContext("2d");
    const myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
        datasets: [
          {
            label: "Recovery Trend",
            data: [2, 4, 6, 8],
            borderColor: "rgb(37, 99, 235)",
            backgroundColor: "rgba(37, 99, 235, 0.2)",
            fill: true,
            tension: 0.4,
          },
        ],
      },
      options: { responsive: true, maintainAspectRatio: false },
    });
    return () => myChart.destroy();
  }, []);

  return <canvas ref={chartRef} className="w-full h-64" />;
}
