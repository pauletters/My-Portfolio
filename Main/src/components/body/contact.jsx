import React, { useEffect, useState } from 'react';

const Contact = ({ setCurrentSection }) => {
        useEffect(() => {
        setCurrentSection('Contact');
    }, [setCurrentSection]);
    
    const [ formState, setFormState ] = useState({ name: '', email: '', message: '' });
    const [ errorMessage, setErrorMessage ] = useState('');

    const handleInputChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    const handleBlur = (e) => {
        if (!e.target.value) {
            setErrorMessage(`${e.target.name} is required.`);
        } else {
            setErrorMessage('');
        }
    };

    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(formState.email)) {
      setErrorMessage('Email is invalid.');
      return;
    }
  };

    return (
        <section>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={formState.name}
            onChange={handleInputChange}
            onBlur={handleBlur}
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
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            value={formState.message}
            onChange={handleInputChange}
            onBlur={handleBlur}
          />
        </div>
        {errorMessage && <p className="error-text">{errorMessage}</p>}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
