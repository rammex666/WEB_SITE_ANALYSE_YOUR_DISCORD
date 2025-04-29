import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Section from './components/Section';
import Cards from './components/Cards';
import PricingTable from './components/PricingTable';
import Statistics from './components/Statistics';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
    return (
        <div>
            <div class="particles">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <Navbar />
            <Hero />
            <Section id="project" title="Présentation du projet" content="Découvrez comment AnalyseYourDiscord transforme vos données Discord en informations claires et utiles." />
            <Section id="features" title="Fonctionnalités principales">
                <Cards />
            </Section>
            <Section id="price" title="Nos Offres">
                <PricingTable />
            </Section>
            <Section id="statistics" title="Statistiques en direct">
                <Statistics />
            </Section>
            <Footer />
        </div>
    );
}

export default App;