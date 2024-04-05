import { Radar  } from "react-chartjs-2";

export const RadarChart  = ({ chartData }) => {
  return (
    <div className="chart-container">
      <h5 style={{ textAlign: "center" }}>Bar Chart</h5>
      <Radar 
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
