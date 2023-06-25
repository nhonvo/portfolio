import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import { BulbFilled, BulbOutlined, MenuOutlined } from '@ant-design/icons';

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function NavBar() {
    const [theme, setTheme] = useState('light');

    const [activeLink, setActiveLink] = useState('#home');
    useEffect(() => {
        const savedTheme = localStorage.getItem('selected-theme');
        const savedIcon = localStorage.getItem('selected-icon');

        if (savedTheme && savedIcon) {
            setTheme(savedTheme);
            applyTheme(savedTheme, savedIcon);
        }
        const toggle = document.getElementById('nav-toggle');
        const nav = document.getElementById('nav-menu');

        if (toggle && nav) {
            toggle.addEventListener('click', () => {
                nav.classList.toggle('show');
            });
        }

        const handleScroll = () => {
            const scrollY = window.pageYOffset;
            const sections = document.querySelectorAll('section[id]');

            sections.forEach((current) => {
                const sectionHeight = current.offsetHeight;
                const sectionTop = current.offsetTop - 50;
                const sectionId = `#${current.getAttribute('id')}`;

                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    setActiveLink(sectionId);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            if (toggle && nav) {
                toggle.removeEventListener('click', () => {
                    nav.classList.toggle('show');
                });
            }
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const applyTheme = (selectedTheme, selectedIcon) => {
        const themeButton = document.getElementById('theme-button');
        const lightTheme = 'light-theme';
        const iconTheme = 'bx-sun';

        document.body.classList.toggle(lightTheme, selectedTheme === 'dark');
        themeButton.classList.toggle(iconTheme, selectedIcon === 'bx bx-moon');
        themeButton.classList.toggle('change-theme', selectedTheme === 'dark');
    };


    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        const newIcon = getCurrentIcon(newTheme);
        setTheme(newTheme);
        applyTheme(newTheme, newIcon);
        localStorage.setItem('selected-theme', newTheme);
        localStorage.setItem('selected-icon', newIcon);
    };

    const getCurrentIcon = (selectedTheme) => {
        return selectedTheme === 'dark' ? 'bx bx-moon' : 'bx bx-sun';
    };


    return (
        <header className="l-header">
            {/* Header content */}
            <nav className="nav bd-grid">
                <div>
                    <Link to="/" className="nav__logo">Truong Nhon</Link>
                </div>

                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#home" className={activeLink === '#home' ? 'nav__link active' : 'nav__link'}>
                                Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className={activeLink === '#about' ? 'nav__link active' : 'nav__link'}>
                                About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" className={activeLink === '#skills' ? 'nav__link active' : 'nav__link'}>
                                Skills
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#project" className={activeLink === '#project' ? 'nav__link active' : 'nav__link'}>
                                Project
                            </a>
                        </li>
                        <li className="nav__item">
                            <a
                                href="#achievement"
                                className={activeLink === '#achievement' ? 'nav__link active' : 'nav__link'}
                            >
                                Achievement
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" className={activeLink === '#contact' ? 'nav__link active' : 'nav__link'}>
                                Contact
                            </a>
                        </li>
                        <li className="nav__item">
                            <Button
                                id="theme-button"
                                className="theme-toggle-button"
                                shape="circle"
                                onClick={toggleTheme}
                                icon={theme === 'light' ? <BulbOutlined /> : <BulbFilled />}
                            />
                        </li>
                    </ul>
                </div>
                <div className="nav__toggle" id="nav-toggle">
                    <MenuOutlined />
                </div>
            </nav>
        </header>)
};

export default NavBar;