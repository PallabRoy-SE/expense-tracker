import React, { PureComponent } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
import styles from "./EtxChart.module.css";

const data = [
  { name: "Food", value: 300, color: "var(--color-violet)" },
  { name: "Entertainment", value: 700, color: "var(--color-orange)" },
  { name: "Travel", value: 100, color: "var(--color-yellow)" },
];

const RADIAN = Math.PI / 180;
const generateLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

function EtxChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={generateLabel}
          outerRadius={80}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Legend iconSize={8} align="middle" />
      </PieChart>
    </ResponsiveContainer>
  );
}

export default EtxChart;
