
import React from 'react';
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface BarChartProps {
  data: any[];
  dataKey: string;
  color?: string;
  height?: number;
  showAxis?: boolean;
}

const BarChart: React.FC<BarChartProps> = ({ 
  data, 
  dataKey, 
  color = '#39D0AC', 
  height = 80,
  showAxis = false
}) => {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <RechartsBarChart data={data} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
        {showAxis && (
          <>
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} />
          </>
        )}
        <Tooltip 
          cursor={{ fill: 'transparent' }}
          contentStyle={{
            backgroundColor: 'white',
            border: '1px solid #f1f1f1',
            borderRadius: '4px',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
          }}
        />
        <Bar 
          dataKey={dataKey} 
          fill={color} 
          radius={[4, 4, 0, 0]}
          barSize={showAxis ? 20 : 10}
        />
      </RechartsBarChart>
    </ResponsiveContainer>
  );
};

export default BarChart;
