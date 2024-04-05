import { useEffect, useState } from "react";

import { BarChart } from "./components/BarChart";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";

import { Radar, Scatter } from "react-chartjs-2";
import { DoughnutChart } from "./components/Doughnut";
import { BubbleChart } from "./components/Bubble";
import { RadarChart } from "./components/Radar";
import { ScatterChart } from "./components/Scatter";
import { PolarChart } from "./components/Polar";


Chart.register(CategoryScale);

const defaultData = [
  {
    id: 1,
    year: 2016,
    userGain: 80000,
    userLost: 823
  },
  {
    id: 2,
    year: 2017,
    userGain: 45677,
    userLost: 345
  },
  {
    id: 3,
    year: 2018,
    userGain: 78888,
    userLost: 555
  },
  {
    id: 4,
    year: 2019,
    userGain: 90000,
    userLost: 4555
  },
  {
    id: 5,
    year: 2020,
    userGain: 4300,
    userLost: 234
  }
];

export default function App() {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Users Gained",
        data: [],
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#f0331a",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "black",
        borderWidth: 2
      }
    ]
  });

  useEffect(() => {
    setChartData({
      labels: defaultData.map((data) => data.year),
      datasets: [
        {
          label: "Users Gained",
          data: defaultData.map((data) => data.userGain),
          backgroundColor: [
            "rgba(75,192,192,1)",
            "#ecf0f1",
            "#f0331a",
            "#f3ba2f",
            "#2a71d0"
          ],
          borderColor: "black",
          borderWidth: 2
        }
      ]
    });
  }, []);

  return (
    <div className="App">
    <div className="row">
      <div className="col">
        <div className="chart-box">
          <BarChart chartData={chartData} />
        </div>
      </div>
      <div className="col">
        <div className="chart-box">
          <LineChart chartData={chartData} />
        </div>
      </div>
      <div className="col">
        <div className="chart-box">
          <BubbleChart chartData={chartData}/>
        </div>
      </div>
    </div>



    <div className="row">
      <div className="col">
        <div className="chart-box">
          <PieChart chartData={chartData} />
        </div>
      </div>
      <div className="col">
        <div className="chart-box">
          <PolarChart chartData={chartData} />
        </div>
      </div>
      <div className="col">
        <div className="chart-box">
          <RadarChart chartData={chartData} />
        </div>
      </div>
    </div>

    <div className="row">

    <div className="col">
        <div className="chart-box">
          <DoughnutChart chartData={chartData} />
        </div>
      </div>
     
      <div className="col">
        <div className="chart-box">
          <ScatterChart chartData={chartData} />
        </div>
      </div>
      <div className="col">
        <div className="chart-box">
          {/* <ScatterChart chartData={chartData} /> */}
        </div>
      </div>
    </div>
 
  </div>
  
  );
}
