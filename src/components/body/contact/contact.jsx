import React, { useEffect, useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import PropTypes from 'prop-types';
import './contact.css';

function Contact({ setCurrentSection }) {
    const formRef = useRef(null);
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        message: ''
    });
    const [status, setStatus] = useState({
        error: '',
        isSubmitting: false
    });

    // Set current section
    useEffect(() => {
        if (setCurrentSection) {
            setCurrentSection('Contact');
        }
    }, []);

    // Initialize EmailJS
    useEffect(() => {
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
        if (publicKey) {
            emailjs.init(publicKey);
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear any errors when user starts typing
        if (status.error) {
            setStatus(prev => ({ ...prev, error: '' }));
        }
    };

    const validateEmail = (email) => {
        return email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateEmail(formData.user_email)) {
            setStatus(prev => ({ ...prev, error: 'Please enter a valid email address' }));
            return;
        }

        setStatus(prev => ({ ...prev, isSubmitting: true }));

        try {
            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            setFormData({
                user_name: '',
                user_email: '',
                message: ''
            });

            alert('Message sent successfully!');
        } catch (error) {
            console.error('Failed to send message:', error);
            setStatus(prev => ({ ...prev, error: 'Failed to send message. Please try again.' }));
        } finally {
            setStatus(prev => ({ ...prev, isSubmitting: false }));
        }
    };

    return (
        <section className="contact">
            <h2>Contact Me</h2>
            <form ref={formRef} onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="user_name">Name:</label>
                    <input
                        id="user_name"
                        type="text"
                        name="user_name"
                        value={formData.user_name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="user_email">Email:</label>
                    <input
                        id="user_email"
                        type="email"
                        name="user_email"
                        value={formData.user_email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>

                {status.error && (
                    <div className="error-text">
                        <p>{status.error}</p>
                    </div>
                )}

                <button 
                    type="submit" 
                    disabled={status.isSubmitting}
                >
                    {status.isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
            </form>
        </section>
    );
}

Contact.propTypes = {
    setCurrentSection: PropTypes.func
};

Contact.defaultProps = {
    setCurrentSection: () => {}
};

export default Contact;