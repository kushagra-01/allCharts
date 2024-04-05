import React from "react";
import { Line } from "react-chartjs-2";

function LineChart({ chartData }) {
  return (
    <div className="chart-container">
      <h5 style={{ textAlign: "center" }}>Line Chart</h5>
      <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users Gained between 2016-2020"
            },
            legend: {
              display: true
            }
          }
        }}
      />
    </div>
  );
}

export default LineChart;
