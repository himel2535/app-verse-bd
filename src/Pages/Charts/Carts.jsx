import React from "react";
import {
  Area,
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Carts = ({ ratings }) => {
  return (
    <div>
      <h1 className="font-semibold text-xl">Ratings</h1>
      <div style={{ width: "100%", height: 400 }}>
        <ResponsiveContainer>
          <ComposedChart
            layout="vertical"
            data={[...ratings].reverse()}
            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
          >
            <defs>
              <linearGradient id="barGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#632EE3" />
                <stop offset="100%" stopColor="#9F62F2" />
              </linearGradient>
            </defs>

            <CartesianGrid stroke="#f5f5f5" />
            <XAxis  type="number" />
            <YAxis dataKey="name" type="category" scale="band" />
            <Tooltip />
            <Bar
              dataKey="count"
              barSize={25}
              fill="url(#barGradient)" 
              radius={[5, 5, 5, 5]}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Carts;
