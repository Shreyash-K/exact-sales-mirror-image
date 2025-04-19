
import React from 'react';
import { LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface LineChartProps {
  data: any[];
  series: {
    dataKey: string;
    color: string;
    name: string;
  }[];
  height?: number;
}

const LineChart: React.FC<LineChartProps> = ({ data, series, height = 300 }) => {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <RechartsLineChart
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
        <XAxis dataKey="name" axisLine={false} tickLine={false} />
        <YAxis axisLine={false} tickLine={false} />
        <Tooltip
          contentStyle={{
            backgroundColor: 'white',
            border: '1px solid #f1f1f1',
            borderRadius: '4px',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
          }}
        />
        <Legend />
        {series.map((s, index) => (
          <Line
            key={index}
            type="monotone"
            dataKey={s.dataKey}
            stroke={s.color}
            name={s.name}
            strokeWidth={3}
            dot={false}
            activeDot={{ r: 6 }}
          />
        ))}
      </RechartsLineChart>
    </ResponsiveContainer>
  );
};

export default LineChart;
