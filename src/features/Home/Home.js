import React from 'react';
import './Home.css'
import HomeBanner from './HomeBanner';
import About from './About';
import Skills from './Skills';
import Project from './Project';
import Achievement from './Achievement';
import Contact from './Contact';

function Home() {
    return (
        <main className="l-main">
            {/* Home section */}
            <HomeBanner />

            {/* About section */}
            <About />

            {/* Skills section */}
            <Skills />

            {/* Project section */}
            <Project />

            {/* Achievement section */}
            <Achievement />

            {/* Contact section */}
            <Contact />
        </main>
    );
};

export default Home;
