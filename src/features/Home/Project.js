import React from "react";
import hdbank from '../.././Assets/img/Project/hdbank-project.png'
import owltrust from '../.././Assets/img/Project/fakenews.png'
import BinhDinhFood from '../.././Assets/img/Project/binh-dinh-food.png'
import TwooneMovie from '../.././Assets/img/Project/twoone-movie.png'
import TwooneWinform from '../.././Assets/img/Project/winform-twoone.png'
import lstm from '../.././Assets/img/Project/lstm.png'
function Project() {
    return (
        <section class="work section" id="project">
            <div>
                <h2 className="section-title">Project</h2>
                <div className="work__container bd-grid">
                    <a href="https://drive.google.com/file/d/15yx-GTaxFMSm3h74ueNZwsS0uwKrnD6G/view?usp=share_link" target="_blank" className="work__img" title="private project link update later">
                        <img src={hdbank} alt="" style={{ padding: '1rem' }} />
                        <h2 className="about__subtitle" style={{ color: 'rgb(49, 112, 238)', padding: '1rem' }}>NOBITA APP - TRANFER MONEY</h2>
                        <p className="about__text" style={{ color: 'black', padding: '0 0 0.5rem 0.5rem' }}>
                            Fast money transfer app that integrates online lucky money service and increases security by blockchain.
                            Nobita uses <b>Flutter</b>, <b>.NET Core</b>, and <b>SQL Server</b>. This project gained the first prize in HDBank Hackathon competition.
                        </p>
                    </a>
                    <a href="" target="_blank" className="work__img" title="private project link update later">
                        <img src={owltrust} alt="" style={{ height: '180px', margin: 'auto' }} />
                        <h2 className="about__subtitle" style={{ color: 'rgb(49, 112, 238)', padding: '1rem' }}>FAKE NEWS FILTER</h2>
                        <p className="about__text" style={{ color: 'black', padding: '0 0 0.5rem 0.5rem' }}>
                            A cross-platform app that helps users access reliable news. Reliability is based on belief points and
                            calculated by the <b>Majority Decision</b> algorithm. Owl trust uses <b>Flutter</b> to build the app, and the code follows the <b>MVVM model</b>. The back-end is built with <b>.NET Core</b>, and the stable database system is <b>SQL Server</b>.
                        </p>
                    </a>
                    <a href="https://github.com/nhonvo/BinhDinhFood" target="_blank" className="work__img">
                        <img src={BinhDinhFood} alt="" />
                        <h2 className="about__subtitle" style={{ color: 'rgb(49, 112, 238)', padding: '1rem' }}>BINH DINH FOOD</h2>
                        <p className="about__text" style={{ color: 'black', padding: '0 0 0.5rem 0.5rem' }}>
                            An e-commerce website that sells specialty food, built with <b>.NET Core</b>. BD food has a user web to order
                            food and an admin web to manage the entire system. The project received a consolation prize in the "My First Website" competition at Hutech.
                        </p>
                    </a>
                    <a href="https://github.com/nhonvo/MovieWebTwoone" target="_blank" className="work__img">
                        <img src={TwooneMovie} alt="" />
                        <h2 className="about__subtitle" style={{ color: 'rgb(49, 112, 238)', padding: '1rem' }}>TWOONE MOVIE</h2>
                        <p className="about__text" style={{ color: 'black', padding: '0 0 0.5rem 0.5rem' }}>
                            A movie website built with <b>ASP.NET MVC</b> that allows web users to search, watch movies, rate them, etc. It also has a web admin panel to manage the website. The source is pulled, cleaned from Kaggle, and stored in <b>SQL Server</b>.
                        </p>
                    </a>
                    <a href="https://github.com/nhonvo/TwooneWinform-FilmManagement" target="_blank" className="work__img">
                        <img src={TwooneWinform} alt="" />
                        <h2 className="about__subtitle" style={{ color: 'rgb(49, 112, 238)', padding: '1rem' }}>TWOONE MOVIE</h2>
                        <p className="about__text" style={{ color: 'black', padding: '0 0 0.5rem 0.5rem' }}>
                            A Windows Forms programming project for CRUD database operations using C#. It uses a repository pattern to connect to the database and Entity Framework to generate the database from the model. The project follows a three-layer architecture for better management.
                        </p>
                    </a>
                    <a href="https://github.com/nhonvo/PredictsStockPricesLSTM-algorithm" target="_blank" className="work__img">
                        <img src={lstm} alt="" />
                        <h2 className="about__subtitle" style={{ color: 'rgb(49, 112, 238)', padding: '1rem' }}>PREDICT STOCK PRICE USE LSTM ALGORITHM</h2>
                        <p className="about__text" style={{ color: 'black', padding: '0 0 0.5rem 0.5rem' }}>
                            A project of Artificial Intelligence that predicts stock prices based on historical prices from 10 years ago using the <b>LSTM algorithm</b>. The project passed the qualifying round of HUTECH - IT Got Talent.
                        </p>
                    </a>
                </div>
            </div>
        </section>
    )
};

export default Project;