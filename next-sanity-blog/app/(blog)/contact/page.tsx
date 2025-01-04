"use client";

import React, { useState } from "react";
import { IoHome, IoCallOutline } from "react-icons/io5"; // Use a valid icon
import { IoMailOutline } from "react-icons/io5";
import "./contact.css";

const Contact = () => {
  const [notification, setNotification] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setNotification("Message sent successfully!");
    setTimeout(() => setNotification(""), 3000);
  };

  return (
    <div className="contact-container">
      <div className="contact-overlay">
        <div className="contact-content">
          <div className="contact-left">
            <h1>Contact Us</h1>
            <p>Feel Free To Contact Me</p>
            <div className="contact-info">
              <div className="contact-item">
                <IoHome size={30} />
                <div>
                  <h3>Address</h3>
                  <p>Bahria Town Karachi</p>
                </div>
              </div>
              <div className="contact-item">
                <IoCallOutline size={30} /> {/* Replaced with a valid icon */}
                <div>
                  <h3>Phone</h3>
                  <p>+92 315 0378814</p>
                </div>
              </div>
              <div className="contact-item">
                <IoMailOutline size={30} />
                <div>
                  <h3>Email</h3>
                  <p>rafiquetalha275@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-right">
            <h2>Send Message</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email" required />
              <textarea placeholder="Type your message" required></textarea>
              <button type="submit">Send</button>
            </form>
            {notification && (
              <div className="notification">
                {notification}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
