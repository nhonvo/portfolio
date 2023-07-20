import { React, useState, useEffect } from "react";
import agent from "../../app/api/agent";

function Contact() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await agent.get('/me');
            setData(response.data);
        };
        fetchData();
    }, []);
    return (
        <section className="contact section" id="contact">
            <h2 className="section-title">Contact</h2>

            <div className="contact__container bd-grid">
                <div className="contact__info">
                    <h3 className="contact__subtitle">EMAIL</h3>
                    <span className="contact__text">{data?.email}</span>

                    <h3 className="contact__subtitle">PHONE</h3>
                    <span className="contact__text">{data?.phone}</span>

                    <h3 className="contact__subtitle">ADDRESS</h3>
                    <span className="contact__text">{data?.address}</span>
                </div>

                <div className="contact__container bd-grid">
                    <form className="contact__form">
                        {/* <form className="contact__form" onSubmit={handleSubmit}> */}
                        <input type="text" placeholder="Name" className="contact__input" />
                        <input type="email" placeholder="Email" className="contact__input" />
                        <textarea
                            name="message"
                            cols="0"
                            rows="10"
                            className="contact__input"
                            placeholder="Tell something about you"
                        ></textarea>
                        <input type="submit" value="Send" className="contact__button button" />
                    </form>
                </div>
            </div>
        </section>
    )
};
export default Contact;