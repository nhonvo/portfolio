import React, { useEffect } from "react";
import { useStore } from "../../../app/stores/store";
import ContactForm from "./ContactForm";
import ChatBox from "./ChatBox/ChatBox";

function Contact() {
    const { meStore } = useStore();
    useEffect(() => {
        meStore.loadMes();
    }, [meStore])
    return (
        <section className="contact section" id="contact">
            <h2 className="section-title">Contact</h2>

            <div className="contact__container bd-grid">
                <div className="contact__info">
                    <h3 className="contact__subtitle">EMAIL</h3>
                    <span className="contact__text">{meStore?.me?.email}</span>

                    <h3 className="contact__subtitle">PHONE</h3>
                    <span className="contact__text">{meStore?.me?.phone}</span>

                    <h3 className="contact__subtitle">ADDRESS</h3>
                    <span className="contact__text">{meStore?.me?.address}</span>
                </div>
                <ChatBox />
                <div className="contact__container bd-grid">
                    <ContactForm />
                </div>
            </div>
        </section>
    )
};
export default Contact;