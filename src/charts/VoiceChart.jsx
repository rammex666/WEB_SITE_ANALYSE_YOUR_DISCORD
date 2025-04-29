import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend
  } from 'chart.js';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend
  );
  

import React from 'react';
import { Line } from 'react-chartjs-2';

const VoiceChart = () => {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
            {
                label: 'Temps vocal (en minutes)',
                data: [120, 150, 170, 210, 190],
                borderColor: '#8a2be2',
                fill: false,
                tension: 0.1,
            },
        ],
    };

    const options = {
        responsive: true,
        animation: {
            duration: 1500,
        },
    };

    return (
        <div className="chart-container">
            <Line data={data} options={options} />
        </div>
    );
};

export default VoiceChart;