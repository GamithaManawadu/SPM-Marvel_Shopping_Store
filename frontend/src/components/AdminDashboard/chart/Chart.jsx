import React from 'react'
import "./Chart.css"
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Chart() {

    const data = [
        {
          name: 'Jan',
          "Active User": 4000,
        },
        {
          name: 'Feb',
          "Active User": 3000,
        },
        {
          name: 'Mar',
          "Active User": 2000,
        },
        {
          name: 'Apr',
          "Active User": 2780,
        },
        {
          name: 'May',
          "Active User": 1890,
        },
        {
          name: 'Jun',
          "Active User": 2390,
        },
        {
          name: 'Jul',
          "Active User": 3490,
        },
      ];
      
    return (
        <div className="chart">
            <h5 className="chartTitle">Sales Performance  </h5>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#555pbd"/>
                    <Line type="monotone" dataKey="Active User" stroke="#5550bd"/>
                    <Tooltip />
                    <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
