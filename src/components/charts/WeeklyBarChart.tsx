
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

interface WeeklyBarChartProps {
  data: any[];
}

const WeeklyBarChart: React.FC<WeeklyBarChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart
        data={data}
        margin={{
          top: 5,
          right: 5,
          left: 5,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" axisLine={false} tickLine={false} />
        <YAxis hide />
        <Bar dataKey="google" stackId="a" fill="#BDED2B" radius={[0, 0, 0, 0]} />
        <Bar dataKey="website" stackId="a" fill="#39D0AC" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default WeeklyBarChart;
