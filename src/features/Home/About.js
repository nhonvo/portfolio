import React, { useEffect, useState } from "react";
import agent from "../../app/api/agent";
import avatar from '../.././Assets/img/avatar.jpg'

function About() {
    const [data, setData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            const response = await agent.get('/me');
            setData(response.data);
        };
        fetchData();
    }, []);
    return (
        <section className="about section" id="about">
            {/* About section content */}
            <h2 className="section-title">About</h2>

            <div className="about__container bd-grid">
                <div className="about__img">
                    <img src={data?.avatar?.avatarUrl2} alt="" />
                </div>

                <div>
                    <h2 className="about__subtitle">Truong Nhon aka "Dotnet devil" </h2>
                    <p className="about__text">
                        {data?.description}
                    </p>
                </div>
            </div>
        </section>
    )
};
export default About;