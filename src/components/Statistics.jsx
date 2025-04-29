import React from 'react';
import MessageChart from '../charts/MessageChart';
import VoiceChart from '../charts/VoiceChart';

const Statistics = () => {
    return (
        <section id="statistics" className="section">
            <h2>Statistiques en direct</h2>
            <div className="avatars">
                <img src="https://api.dicebear.com/7.x/bottts/svg?seed=1" alt="avatar" />
                <img src="https://api.dicebear.com/7.x/bottts/svg?seed=2" alt="avatar" />
                <img src="https://api.dicebear.com/7.x/bottts/svg?seed=3" alt="avatar" />
                <img src="https://api.dicebear.com/7.x/bottts/svg?seed=4" alt="avatar" />
            </div>

            <div className="chart-container">
                <MessageChart />
            </div>
            <div className="chart-container">
                <VoiceChart />
            </div>
        </section>
    );
};

export default Statistics;