import { Bubble } from 'react-chartjs-2';

export const BubbleChart  = ({ chartData }) => {
  return (
    <div className="chart-container">
      <h5 style={{ textAlign: "center" }}>Bubble Chart</h5>
      <Bubble
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
