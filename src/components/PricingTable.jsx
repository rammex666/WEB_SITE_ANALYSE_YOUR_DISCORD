import React from 'react';

const PricingTable = () => {
    return (
        <section id="price" className="section">
            <h2>Nos Offres</h2>
            <div className="pricing-table">
                <div className="price-card">
                    <h3>Gratuit</h3>
                    <p>Analyse de base</p>
                </div>
                <div className="price-card">
                    <h3>Premium</h3>
                    <p>Analyses avancées et exportations</p>
                </div>
            </div>
        </section>
    );
};

export default PricingTable;