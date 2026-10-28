import { Chart, registerables } from "chart.js";
import { Line } from "react-chartjs-2";

Chart.register(...registerables);

// For editable charts
function ChartComponent() {
  const chartData = {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    datasets: [
      {
        label: "views",
        data: [5, 10, 13, 17, 15, 18, 23],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
        pointBackgroundColor: "rgb(255, 0, 0)",
        pointHoverBackgroundColor: "rgb(255, 0, 0)",
        pointBorderColor: "rgb(255, 0, 0)",
        pointHoverBorderColor: "rgb(255, 0, 0)",
      },
      {
        label: "likes",
        data: [0, 2, 5, 9, 12, 14, 16],
        fill: false,
        borderColor: "rgb(0, 75, 192)",
        tension: 0.1,
        pointBackgroundColor: "rgb(0, 255, 0)",
        pointHoverBackgroundColor: "rgb(0, 255, 0)",
        pointBorderColor: "rgb(0, 255, 255)",
        pointHoverBorderColor: "rgb(0, 255, 0)",
      },
      {
        label: "comments",
        data: [0, 1, 1, 3, 4, 7, 10],
        fill: false,
        borderColor: "rgb(109,73,192)",
        tension: 0.1,
        pointBackgroundColor: "rgb(0, 0, 255)",
        pointHoverBackgroundColor: "rgb(0, 0, 255)",
        pointBorderColor: "rgb(0, 0, 255)",
        pointHoverBorderColor: "rgb(0, 0, 255)",
      },
    ],
  };

  const options = {
    maintainAspectRatio: false, // Disable aspect ratio
  };

  return (
    <div className="w-full h-full">
      <Line data={chartData} options={options} />
    </div>
  );
}

export default ChartComponent;
