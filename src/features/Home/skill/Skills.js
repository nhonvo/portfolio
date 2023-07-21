import { React, useEffect } from "react";
import { UserOutlined, CodeOutlined, DatabaseOutlined, RocketOutlined, ClockCircleOutlined, TeamOutlined, LikeOutlined } from '@ant-design/icons';
import { useStore } from "../../../app/stores/store";

function Skills() {
    const { skillStore } = useStore();
    useEffect(() => {
        skillStore.loadSkills();
    }, [skillStore])
    return (
        <section className="skills section" id="skills">
            <h2 className="section-title">Skills</h2>

            <div className="skills__container bd-grid">
                <h2 className="skills__subtitle">Technical Skills</h2>
                <p className="skills__text">
                </p>

                <div>
                    {skillStore?.skillList.slice(0, 1).map((item, index) => (
                        <div className="skills__data" key={index}>
                            <div className="skills__names">
                                <UserOutlined className="skills__icon" />
                                <span className="skills__name">{item?.name}</span>
                            </div>
                            <div className="skills__bar skills__html"></div>
                            <div></div>
                        </div>
                    ))}
                    {skillStore?.skillList.slice(1, 2).map((item, index) => (
                        <div className="skills__data" key={index}>
                            <div className="skills__names">
                                <CodeOutlined className="skills__icon" />
                                <span className="skills__name">{item?.name}</span>
                            </div>
                            <div className="skills__bar skills__html"></div>
                            <div></div>
                        </div>
                    ))}
                    {skillStore?.skillList.slice(2, 3).map((item, index) => (
                        <div className="skills__data" key={index}>
                            <div className="skills__names">
                                <DatabaseOutlined className="skills__icon" />
                                <span className="skills__name">{item?.name}</span>
                            </div>
                            <div className="skills__bar skills__html"></div>
                            <div></div>
                        </div>
                    ))}
                    {skillStore?.skillList.slice(3, 4).map((item, index) => (
                        <div className="skills__data" key={index}>
                            <div className="skills__names">
                                <CodeOutlined className="skills__icon" />
                                <span className="skills__name">{item?.name}</span>
                            </div>
                            <div className="skills__bar skills__html"></div>
                            <div></div>
                        </div>
                    ))}
                </div>
                <div>
                    {skillStore?.skillList.slice(4, 5).map((item, index) => (
                        <div className="skills__data" key={index}>
                            <div className="skills__names">
                                <RocketOutlined className="skills__icon" />
                                <span className="skills__name">{item?.name}</span>
                            </div>
                            <div className="skills__bar skills__html"></div>
                            <div></div>
                        </div>
                    ))}
                    {skillStore?.skillList.slice(5, 6).map((item, index) => (
                        <div className="skills__data" key={index}>
                            <div className="skills__names">
                                <ClockCircleOutlined className="skills__icon" />
                                <span className="skills__name">{item?.name}</span>
                            </div>
                            <div className="skills__bar skills__html"></div>
                            <div></div>
                        </div>
                    ))}
                    {skillStore?.skillList.slice(6, 7).map((item, index) => (
                        <div className="skills__data" key={index}>
                            <div className="skills__names">
                                <TeamOutlined className="skills__icon" />
                                <span className="skills__name">{item?.name}</span>
                            </div>
                            <div className="skills__bar skills__html"></div>
                            <div></div>
                        </div>
                    ))}
                    {skillStore?.skillList.slice(7, 8).map((item, index) => (
                        <div className="skills__data" key={index}>
                            <div className="skills__names">
                                <LikeOutlined className="skills__icon" />
                                <span className="skills__name">{item?.name}</span>
                            </div>
                            <div className="skills__bar skills__html"></div>
                            <div></div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
};

export default Skills;