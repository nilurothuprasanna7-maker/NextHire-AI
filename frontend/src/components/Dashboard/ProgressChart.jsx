import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import "./ProgressChart.css";

const data = [
  { day: "Mon", score: 45 },
  { day: "Tue", score: 55 },
  { day: "Wed", score: 62 },
  { day: "Thu", score: 70 },
  { day: "Fri", score: 76 },
  { day: "Sat", score: 83 },
  { day: "Sun", score: 90 },
];

function ProgressChart() {
  return (
    <div className="progress-chart">

      <h2>Weekly Progress</h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="day" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="score"
            stroke="#7c3aed"
            strokeWidth={4}
          />

        </LineChart>
      </ResponsiveContainer>

    </div>
  );
}

export default ProgressChart;