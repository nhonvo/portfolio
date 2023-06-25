import React from "react";
import hdbank from '../.././Assets/img/Competition/hdbank.jpg'
import itgottalent from '../.././Assets/img/Competition/it-got-talent.jpg'
import myfirstweb from '../.././Assets/img/Competition/my-first-website.jpg'
import aiChallenge from '../.././Assets/img/Competition/AI-Challenge.png'
import scholarship2020 from '../.././Assets/img/Competition/scholarship2020-2021.jpg'
import schoolarship2021 from '../.././Assets/img/Competition/schoolarship2021-2022.jpg'
import sv5t2021 from '../.././Assets/img/Competition/sv5t2021.jpg'
import sv5t2020 from '../.././Assets/img/Competition/sv5t2020.jpg'
import './Achievement.css'
function Achievement() {
    return (
        <section className="work section" id="achievement">
            <h2 className="section-title">Achievement</h2>
            <div className="work__container bd-grid">
                <a href="" target="_blank" className="work__img" title="Image update later">
                    <img src={itgottalent} alt="" />
                    <h2 className="about__subtitle" style={{ color: 'rgb(49, 112, 238)', padding: '1rem' }}>
                        First prize in IT got talent 2022 - Table B
                    </h2>
                    <p className="about__text" style={{ color: 'black', padding: '0 0 0.5rem 0.5rem' }}>
                        Ho Chi Minh city University of Technology
                    </p>
                </a>
                <a href="" target="_blank" className="work__img" title="Image update later">
                    <img src={hdbank} alt="" />
                    <h2 className="about__subtitle" style={{ color: 'rgb(49, 112, 238)', padding: '1rem' }}>
                        First prize in HDBank hackthon 2022
                    </h2>
                    <p className="about__text" style={{ color: 'black', padding: '0 0 0.5rem 0.5rem' }}>
                        Ho Chi Minh city University of Technology
                    </p>
                </a>
                <a href="" target="_blank" className="work__img" title="Image update later">
                    <img src={sv5t2021} alt="" />
                    <h2 className="about__subtitle" style={{ color: 'rgb(49, 112, 238)', padding: '1rem' }}>
                        Student of 5 merits level school in 2022
                    </h2>
                    <p className="about__text" style={{ color: 'black', padding: '0 0 0.5rem 0.5rem' }}>
                        Ho Chi Minh city University of Technology
                    </p>
                </a>
                <a href="" target="_blank" className="work__img" title="Image update later">
                    <img src={scholarship2020} alt="" />
                    <h2 className="about__subtitle" style={{ color: 'rgb(49, 112, 238)', padding: '1rem' }}>
                        Top 1 GPA gained HUTECH Talent Scholarship in 2020
                    </h2>
                    <p className="about__text" style={{ color: 'black', padding: '0 0 0.5rem 0.5rem' }}>
                        Ho Chi Minh city University of Technology
                    </p>
                </a>
                <a href="" target="_blank" className="work__img" title="Image update later">
                    <img src={aiChallenge} alt="" />
                    <h2 className="about__subtitle" style={{ color: 'rgb(49, 112, 238)', padding: '1rem' }}>
                        Consolation prizes "AI challenge 2022"
                    </h2>
                    <p className="about__text" style={{ color: 'black', padding: '0 0 0.5rem 0.5rem' }}>
                        Ho Chi Minh city University of Technology
                    </p>
                </a>
                <a href="" target="_blank" className="work__img" title="Image update later">
                    <img src={myfirstweb} alt="" />
                    <h2 className="about__subtitle" style={{ color: 'rgb(49, 112, 238)', padding: '1rem' }}>
                        Consolation prizes "My first website"
                    </h2>
                    <p className="about__text" style={{ color: 'black', padding: '0 0 0.5rem 0.5rem' }}>
                        Ho Chi Minh city University of Technology
                    </p>
                </a>
                <a href="" target="_blank" className="work__img" title="Image update later">
                    <img src={schoolarship2021} alt="" />
                    <h2 className="about__subtitle" style={{ color: 'rgb(49, 112, 238)', padding: '1rem' }}>
                        Top 3 GPA gained HUTECH Talent Scholarship in 2020
                    </h2>
                    <p className="about__text" style={{ color: 'black', padding: '0 0 0.5rem 0.5rem' }}>
                        Ho Chi Minh city University of Technology
                    </p>
                </a>
                <a href="" target="_blank" className="work__img" title="Image update later">
                    <img src={sv5t2020} alt="" />
                    <h2 className="about__subtitle" style={{ color: 'rgb(49, 112, 238)', padding: '1rem' }}>
                        Student of 5 merits level school in 2021
                    </h2>
                    <p className="about__text" style={{ color: 'black', padding: '0 0 0.5rem 0.5rem' }}>
                        Ho Chi Minh city University of Technology
                    </p>
                </a>
            </div>
        </section>
    )
};
export default Achievement;