import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Data } from './utils/data';


const BarChart = () => {
  const chartData = {
    labels: Data.map((item) => item.year),
    datasets: [
      {
        label: 'User Gain',
        data: Data.map((item) => item.userGain),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
      {
        label: 'User Lost',
        data: Data.map((item) => item.userLost),
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
    ],
  };

  return (
    <div>
      <h2>User Gain vs. User Lost</h2>
      <Bar data={chartData} />
    </div>
  );
};

export default BarChart;
