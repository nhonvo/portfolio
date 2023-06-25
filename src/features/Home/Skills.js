import React from "react";
import { UserOutlined, CodeOutlined, DatabaseOutlined, GlobalOutlined, RocketOutlined, ClockCircleOutlined, TeamOutlined, LikeOutlined } from '@ant-design/icons';

function Skills() {
    return (
        <section className="skills section" id="skills">
            <h2 className="section-title">Skills</h2>

            <div className="skills__container bd-grid">
                <h2 className="skills__subtitle">Technical Skills</h2>
                <p className="skills__text">
                </p>

                <div>
                    <div className="skills__data">
                        <div className="skills__names">
                            <UserOutlined className="skills__icon" />
                            <span className="skills__name">C#, Js, Java, Dart, C/C++, Python</span>
                        </div>
                        <div className="skills__bar skills__html"></div>
                        <div></div>
                    </div>
                    <div className="skills__data">
                        <div className="skills__names">
                            <CodeOutlined className="skills__icon" />
                            <span className="skills__name">.NET core, Entity Framework</span>
                        </div>
                        <div className="skills__bar skills__html"></div>
                        <div></div>
                    </div>
                    <div className="skills__data">
                        <div className="skills__names">
                            <DatabaseOutlined className="skills__icon" />
                            <span className="skills__name">SQL Server, PostgreSQL</span>
                        </div>
                        <div className="skills__bar skills__html"></div>
                        <div></div>
                    </div>
                    <div className="skills__data">
                        <div className="skills__names">
                            <GlobalOutlined className="skills__icon" />
                            <span className="skills__name">Vietnamese, English</span>
                        </div>
                        <div className="skills__bar skills__html"></div>
                        <div></div>
                    </div>
                </div>
                <div>
                    <div className="skills__data">
                        <div className="skills__names">
                            <RocketOutlined className="skills__icon" />
                            <span className="skills__name">Problem solving</span>
                        </div>
                        <div className="skills__bar skills__html"></div>
                        <div></div>
                    </div>
                    <div className="skills__data">
                        <div className="skills__names">
                            <ClockCircleOutlined className="skills__icon" />
                            <span className="skills__name">Time management</span>
                        </div>
                        <div className="skills__bar skills__html"></div>
                        <div></div>
                    </div>
                    <div className="skills__data">
                        <div className="skills__names">
                            <TeamOutlined className="skills__icon" />
                            <span className="skills__name">Team working</span>
                        </div>
                        <div className="skills__bar skills__html"></div>
                        <div></div>
                    </div>
                    <div className="skills__data">
                        <div className="skills__names">
                            <LikeOutlined className="skills__icon" />
                            <span className="skills__name">Positive</span>
                        </div>
                        <div className="skills__bar skills__html"></div>
                        <div></div>
                    </div>
                </div>

            </div>
        </section>
    )
};

export default Skills;