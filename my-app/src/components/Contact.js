import './Contact.css';
import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {

    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !name) {
      return alert(`Need valid email`); ;
    }
}

    return (
      <div>
        <p>Hello {name}</p>
        <form className="form">
          <input
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="name"
          />
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="email"
          />
          <input
            value={message}
            name="message"
            onChange={handleInputChange}
            type="message"
            placeholder="message"
          />
          <button type="button" onClick={handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  };

  
  export default Contact;