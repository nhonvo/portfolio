import { DownOutlined, LinkedinOutlined, FacebookOutlined, GithubOutlined } from '@ant-design/icons';
import React, { useEffect } from 'react';
import { useStore } from "../../app/stores/store";

function HomeBanner() {
    const { meStore } = useStore();
    useEffect(() => {
        meStore.loadMes();
    }, [meStore])
    const cv = "http://localhost:5046/api/Image/Download/6b159931-4baf-4e1b-8391-f84e3bd119b5.pdf";

    return (
        <section className="home bd-grid" id="home">
            <div className="home__data">
                <h1 className="home__title">
                    <div className="userContainer"></div>
                    Hi,<br />I am <span className="home__title-color">{meStore?.me?.name}</span><br />
                    Web Developer
                </h1>

                <a href="#contact" className="button" style={{ margin: '1rem 0' }}>Contact</a>
                <a href={cv} className="button" style={{ backgroundColor: 'white', borderColor: 'rgb(49, 112, 238)', borderStyle: 'dashed' }} download>
                    <p style={{ color: 'black' }}>Download CV</p>
                </a>
                <div className="home__social">
                    <a href={meStore?.me?.socialLink?.linkedin} className="home__social-icon"><LinkedinOutlined /></a>
                    <a href={meStore?.me?.socialLink?.facebook} className="home__social-icon"><FacebookOutlined /></a>
                    <a href={meStore?.me?.socialLink?.github} className="home__social-icon"><GithubOutlined /></a>
                </div>
                <a href="#about" className="home__scroll">
                    <DownOutlined className="home__scroll-icon" />
                    <span className="home__scroll-name">Scroll Down</span>
                </a>

                <div className="home__img">
                    <svg className="home__blob" viewBox="0 0 479 467" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <mask id="mask0" mask-type="alpha">
                            <path
                                d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
                        </mask>
                        <g mask="url(#mask0)">
                            <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
                            <image className="home__blob-img" xlinkHref={meStore?.me?.images[0]?.path} alt="Avatar" x="18%" y="-20%" width="150%" height="150%" />
                        </g>
                    </svg>
                </div>
            </div>
        </section>
    )
};
export default HomeBanner;