import React from 'react';
import { Bar } from 'react-chartjs-2';

const MessageChart = () => {
    const data = {
        labels: ['User1', 'User2', 'User3', 'User4'],
        datasets: [
            {
                label: 'Messages envoyés',
                data: [200, 300, 500, 400],
                backgroundColor: '#8a2be2',
                borderRadius: 5,
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
            <Bar data={data} options={options} />
        </div>
    );
};

export default MessageChart;