import { Doughnut  } from "react-chartjs-2";

export const DoughnutChart  = ({ chartData }) => {
  return (
    <div className="chart-container">
      <h5 style={{ textAlign: "center" }}>Doughnut Chart</h5>
      <Doughnut
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
};
