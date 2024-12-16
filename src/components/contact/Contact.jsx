import React, { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const { name, email, subject, message } = formData;

    const nameRegex = /^[A-Za-z ]+$/;
    if (!nameRegex.test(name)) {
      alert("Name should not contain any digits or special characters.");
      return false;
    }

    if (!email.endsWith("@gmail.com")) {
      alert("Email should be a valid @gmail.com address.");
      return false;
    }

    if (subject.length > 100) {
      alert("Subject should not exceed 100 characters.");
      return false;
    }

    if (!name || !email || !subject || !message) {
      alert("All fields are required.");
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("The request has been accepted. We will get back to you.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }
  };

  return (
    <>
      <section className="contacts padding">
        <div className="container1">
          <div className="left row">
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>
            <div className="items">
              <div className="box">
                <h4>ADDRESS:</h4>
                <p>
                  <i className="fa fa-map"></i> 13th floor, Manjeera Trinity, KPHB,
                  Hyderabad
                </p>
              </div>
              <div className="box">
                <h4>EMAIL:</h4>
                <p>
                  <i className="fa fa-paper-plane"></i> info@camelq.in
                </p>
              </div>
              <div className="box">
                <h4>PHONE:</h4>
                <p>
                  <i className="fa fa-phone-alt"></i> +91 8121444692
                </p>
              </div>
            </div>
          </div>
          <div className="right row">
            <form onSubmit={handleSubmit}>
              <div className="flexSB">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
              />
              <textarea
                name="message"
                cols="30"
                rows="10"
                placeholder="Create a message here..."
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <button className="primary-btn" type="submit">
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
