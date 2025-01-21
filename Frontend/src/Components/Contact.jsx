
// make it correct from repo

import React, { useState } from 'react';
import { ClipLoader } from "react-spinners"

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => { 
    e.preventDefault(); // Prevent form default behavior
    setLoading(true);

    // Simulate sending the message
    setTimeout(() => {
      alert(`Message sent successfully! \nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
      setLoading(false);
      setName("");
      setEmail("");
      setMessage("");
    }, 2000); // Mock API call delay
  };

  return (
    <section className="contact">
      <form onSubmit={handleSubmit}>
        <h1>CONTACT US</h1>

        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>

        <div>
          <label>Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message"
            rows="4"
            required
          />
        </div>

        <button type="submit" disabled={!loading && <ClipLoader size="20" color="white" />} style={{display: "flex", justifyContent: "centre", alignItems: " centre", gap: "15px"} }>
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
