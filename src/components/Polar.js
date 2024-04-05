import { PolarArea  } from "react-chartjs-2";

export const PolarChart  = ({ chartData }) => {
  return (
    <div className="chart-container">
      <h5 style={{ textAlign: "center" }}>Polar  Chart</h5>
      <PolarArea 
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
