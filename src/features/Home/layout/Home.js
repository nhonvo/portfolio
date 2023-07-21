import React from 'react';
import './Home.css'
import HomeBanner from '../banner/Banner';
import About from '../about/About';
import Skills from '../skill/Skills';
import Project from '../project/Project';
import Achievement from '../achievement/Achievement';
import Contact from '../contact/Contact';

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
