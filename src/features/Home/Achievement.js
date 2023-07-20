import React, { useState, useEffect } from 'react';
import agent from '../../app/api/agent';
import './Achievement.css'

function Achievement() {
    const [data, setData] = useState(null);

    useEffect(() => {
        // const fetchData = async () => {
        //     const response = await agent.get('/achievement');
        //     setData(response.data);
        // };
        // fetchData();
        setData([])

    }, []);
    return (
        <section className="work section" id="achievement">
            <h2 className="section-title">Achievement</h2>
            <div className="work__container bd-grid">
                {data?.map((item, index) => (
                    <a key={index} href="" target="_blank" className="work__img" title="Image update later">
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