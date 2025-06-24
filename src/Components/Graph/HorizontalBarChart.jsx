// HorizontalBarChart.js
import { Tooltip } from "@mui/material";
import React from "react";
import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   LabelList,
//   ResponsiveContainer,
// } from "recharts";

const data = [
  {
    name: "Om singh",
    duration1: 2,
    label1: "2 hours",
  },
  {
    name: "Parth Cha...",
    duration2: 5,
    label2: "5 hours",
  },
  {
    name: "Akshat Si...",
    duration3: 8,
    label3: "8 hours",
  },
  {
    name: "Bobby Singh",
    duration4: 10,
    label4: "10 hours",
  },
  {
    name: "Ritu Hunda",
    duration5: 26, // 1 day 2 hours = 24 + 2
    label5: "1 day 2 hours",
  },
  {
    name: "User 6",
    duration6: 1,
    label6: "1 hour",
  },
  {
    name: "User 7",
    duration7: 1,
    label7: "1 hour",
  },
];

const COLORS = [
  "#c9c73e", // Om Singh
  "#bc3c3c", // Parth
  "#2a7e57", // Akshat
  "#bc3c3c", // Bobby
  "#a487b1", // Ritu
  "#c3b28e", // User 6
  "#c3b28e", // User 7
];

const HorizontalBarChart = () => {
  return (
    <div className="w-full h-[400px] p-4 bg-[#0a2e55] text-white rounded-lg shadow-lg">
      {/* <ResponsiveContainer width="100%" height="100%"> */}
        <BarChart
          layout="vertical"
          data={data}
          margin={{ top: 10, right: 30, left: 100, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#2e4870" />
          <XAxis
            type="number"
            tick={{ fill: "white" }}
            label={{ value: "Transaction Time", position: "bottom", offset: 10 }}
          />
          <YAxis
            type="category"
            dataKey="name"
            tick={{ fill: "white" }}
            width={100}
            label={{
              value: "Approval Status",
              angle: -90,
              position: "insideLeft",
              fill: "white",
            }}
          />
          <Tooltip />
          {/* Add Bars with labels */}
          <Bar dataKey="duration1" stackId="a" fill={COLORS[0]}>
            <LabelList dataKey="label1" position="insideRight" fill="#fff" />
          </Bar>
          <Bar dataKey="duration2" stackId="a" fill={COLORS[1]}>
            <LabelList dataKey="label2" position="insideRight" fill="#fff" />
          </Bar>
          <Bar dataKey="duration3" stackId="a" fill={COLORS[2]}>
            <LabelList dataKey="label3" position="insideRight" fill="#fff" />
          </Bar>
          <Bar dataKey="duration4" stackId="a" fill={COLORS[3]}>
            <LabelList dataKey="label4" position="insideRight" fill="#fff" />
          </Bar>
          <Bar dataKey="duration5" stackId="a" fill={COLORS[4]}>
            <LabelList dataKey="label5" position="insideRight" fill="#fff" />
          </Bar>
          <Bar dataKey="duration6" stackId="a" fill={COLORS[5]}>
            <LabelList dataKey="label6" position="insideRight" fill="#000" />
          </Bar>
          <Bar dataKey="duration7" stackId="a" fill={COLORS[6]}>
            <LabelList dataKey="label7" position="insideRight" fill="#000" />
          </Bar>
        </BarChart>
      {/* </ResponsiveContainer> */}
    </div>
  );
};

export default HorizontalBarChart;
