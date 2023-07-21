import React, { useEffect } from 'react';
import './Achievement.css'
import { useStore } from "../../../app/stores/store";


function Achievement() {
    const { achievementStore } = useStore();
    useEffect(() => {
        achievementStore.loadAchievements();
    }, [achievementStore])
    return (
        <section className="work section" id="achievement">
            <h2 className="section-title">Achievement</h2>
            <div className="work__container bd-grid">
                {achievementStore.achievementList?.map((item, index) => (
                    <a key={index} href="" target="_blank" className="work__img" title="" rel="noopener noreferrer">
                        <img src={item?.images[0]?.path} alt="" />
                        <h2 className="about__subtitle" style={{ color: 'rgb(49, 112, 238)', padding: '1rem' }}>
                            {item?.name}
                        </h2>
                        <p className="about__text" style={{ color: 'black', padding: '0 0 0.5rem 0.5rem' }}>
                            {item?.place}
                        </p>
                    </a>
                ))}
            </div>
        </section>
    )
};
export default Achievement;