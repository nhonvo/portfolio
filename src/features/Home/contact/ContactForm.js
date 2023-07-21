import React, { useState } from "react";
import { useStore } from "../../../app/stores/store";

const ContactForm = () => {
    const { emailStore } = useStore();

    const initialFormData = {
        name: "",
        email: "",
        message: "",
    };

    const [formData, setFormData] = useState(initialFormData);
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Extract data from the state
        const { name, email, message } = formData;

        setSubmitting(true);
        try {
            await emailStore.send(email, name, message);
            // Reset the form after a successful email submission
            setFormData(initialFormData);
        } catch (error) {
            console.log(error);
        } finally {
            setSubmitting(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <form className="contact__form" onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Name"
                className="contact__input"
                value={formData.name}
                onChange={handleChange}
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                className="contact__input"
                value={formData.email}
                onChange={handleChange}
            />
            <textarea
                name="message"
                cols="0"
                rows="10"
                placeholder="Tell something about you"
                className="contact__input"
                value={formData.message}
                onChange={handleChange}
            ></textarea>
            <input
                type="submit"
                value={submitting ? 'Sending...' : 'Send'}
                className="contact__button button"
                disabled={submitting}
            />
        </form>
    );
};

export default ContactForm;
