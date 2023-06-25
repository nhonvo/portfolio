import React from "react";
import avatar from '../.././Assets/img/avatar.jpg'

function About() {
    return (
        <section className="about section" id="about">
            {/* About section content */}
            <h2 className="section-title">About</h2>

            <div className="about__container bd-grid">
                <div className="about__img">
                    <img src={avatar} alt="" />
                </div>

                <div>
                    <h2 className="about__subtitle">Truong Nhon aka "Dotnet devil" </h2>
                    <p className="about__text">
                        The individual has a strong passion for .NET development and demonstrates a keen curiosity for exploring new technologies. With one year of experience as a software developer at FPT Company Vietnam, they have honed their skills in .NET framework. Their dedication extends beyond their professional endeavors, as they actively pursue coding as a hobby.
                    </p>
                </div>
            </div>
        </section>
    )
};
export default About;