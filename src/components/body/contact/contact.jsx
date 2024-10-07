import React, { useEffect, useState } from 'react';
import './contact.css';

// The Contact component is a functional component that displays the contact section of the page.
const Contact = ({ setCurrentSection }) => {
    useEffect(() => {
        setCurrentSection('Contact');
    }, [setCurrentSection]);
    
    // The formState object is used to keep track of the form data. The setFormState function is used to update the formState object.
    // The errorMessage state variable is used to store any error messages that occur during form validation.
    const [ formState, setFormState ] = useState({ name: '', email: '', message: '' });
    const [ errorMessage, setErrorMessage ] = useState('');

    // The handleInputChange function is called whenever an input field value changes. 
    // It updates the formState object with the new value.
    const handleInputChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    // The handleBlur function is called whenever an input field loses focus.
    const handleBlur = (e) => {
        if (!e.target.value) {
            setErrorMessage(`${e.target.name} is required.`);
        } else {
            setErrorMessage('');
        }
    };

    // The validateEmail function is used to validate an email address using a regular expression.
    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email.toLowerCase());
    };

    // The handleSubmit function is called when the form is submitted.
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateEmail(formState.email)) {
            setErrorMessage('Email is invalid.');
            return;
        }

        // This is where you can add the form submission logic to send the form data to a server eventually.

        // Reset form fields after successful submission
        setFormState({ 
            name: '',
            email: '',
            message: '' 
        });

        setErrorMessage('');

        alert('Your message was sent successfully!');
    };

    return (
        <section className='contact'>
            <h2>Contact</h2>
            <form onSubmit={handleSubmit} netlify>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formState.name}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formState.email}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        name="message"
                        value={formState.message}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        required
                    />
                </div>
                {errorMessage && <p className="error-text">{errorMessage}</p>}
                <button type="submit">Submit</button>
            </form>
        </section>
    );
};

export default Contact;