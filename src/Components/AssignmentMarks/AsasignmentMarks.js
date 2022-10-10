import React from "react";
import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const AsasignmentMarks = () => {
  const data = [
    {
      name: "Page A",
      Marks: 4000,
      Quiz: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      Marks: 3000,
      Quiz: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      Marks: 2000,
      Quiz: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      Marks: 2780,
      Quiz: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      Marks: 1890,
      Quiz: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      Marks: 2390,
      Quiz: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      Marks: 3490,
      Quiz: 4300,
      amt: 2100,
    },
  ];

  return (
    <div>
      <LineChart width={500} height={400} data={data}>
        <Line type="monotone" dataKey="Quiz" stroke="#82ca9d" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip></Tooltip>
      </LineChart>
    </div>
  );
};

export default AsasignmentMarks;
