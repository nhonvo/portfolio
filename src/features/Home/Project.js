import { React, useState, useEffect } from "react";
import agent from "../../app/api/agent";

function Project() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await agent.get('/project');
            setData(response.data);
        };
        fetchData();
    }, []);
    return (
        <section class="work section" id="project">
            <div>
                <h2 className="section-title">Project</h2>
                <div className="work__container bd-grid">
                    {
                        data?.map((item, index) => (
                            <a key={index} href="https://drive.google.com/file/d/15yx-GTaxFMSm3h74ueNZwsS0uwKrnD6G/view?usp=share_link" target="_blank" className="work__img" title="private project link update later">
                                <img src={item?.imageURL} alt="" style={{ padding: '1rem' }} />
                                <h2 className="about__subtitle" style={{ color: 'rgb(49, 112, 238)', padding: '1rem' }}>{item?.name}</h2>
                                <p className="about__text" style={{ color: 'black', padding: '0 0 0.5rem 0.5rem' }}>
                                    {item?.description}
                                </p>
                            </a>
                        ))
                    }
                </div>
            </div>
        </section>
    )
};

export default Project;