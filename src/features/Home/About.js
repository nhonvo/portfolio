import React, { useEffect } from "react";
import { useStore } from "../../app/stores/store";

function About() {
    const { meStore } = useStore();
    useEffect(() => {
        meStore.loadMes();
    }, [meStore])
    return (
        <section className="about section" id="about">
            {/* About section content */}
            <h2 className="section-title">About</h2>

            <div className="about__container bd-grid">
                <div className="about__img">
                    <img src={meStore?.me?.images[1]?.path} alt="" />
                </div>

                <div>
                    <h2 className="about__subtitle">{meStore?.me?.fullName}</h2>
                    <p className="about__text">
                        {meStore?.me?.description}
                    </p>
                </div>
            </div>
        </section>
    )
};
export default About;