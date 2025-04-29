import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <nav style={styles.nav}>
            <div style={styles.brand}><strong>AnalyseYourDiscord</strong></div>
            <div style={styles.links}>
                <Link to="project" smooth={true} duration={500} style={styles.link}>Project</Link>
                <Link to="features" smooth={true} duration={500} style={styles.link}>Features</Link>
                <Link to="price" smooth={true} duration={500} style={styles.link}>Price</Link>
                <Link to="statistics" smooth={true} duration={500} style={styles.link}>Statistics</Link>
            </div>
        </nav>
    );
};

const styles = {
    nav: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        backgroundColor: 'rgba(20, 20, 30, 0.7)',
        position: 'sticky',
        top: 0,
        backdropFilter: 'blur(10px)',
        zIndex: 1000,
    },
    brand: {
        color: '#aaa',
    },
    links: {
        display: 'flex',
        gap: '1rem',
    },
    link: {
        color: '#aaa',
        textDecoration: 'none',
        fontWeight: 500,
        transition: 'color 0.3s',
    },
};

export default Navbar;