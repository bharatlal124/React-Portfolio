import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({ message: "", type: "" });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ message: "Sending...", type: "info" });

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({ message: "Message sent successfully!", type: "success" });
        setTimeout(() => {
          setStatus({ message: "", type: "" });
        }, 5000);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus({ message: "Failed to send message. Please try again.", type: "error" });
        setTimeout(() => {
          setStatus({ message: "", type: "" });
        }, 5000);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus({ message: "Failed to send message. Please try again.", type: "error" });

      // Hide the message after 5 seconds
      setTimeout(() => {
        setStatus({ message: "", type: "" });
      }, 5000);
    }
  };

  return (
    <section className="contact" id="contact">
      <h2 className="heading">
        Contact <span>Me!</span>
      </h2>

      <form onSubmit={handleSubmit}>
        {/* Input Fields */}
        <div className="input-box">
          <div className="input-field field">
            <input
              type="text"
              placeholder="Full Name"
              id="name"
              className="item"
              autoComplete="off"
              required
              value={formData.name}
              onChange={handleChange}
            />
            <span className="focus"></span>
          </div>

          <div className="input-field field">
            <input
              type="email"
              placeholder="Email Address"
              id="email"
              className="item"
              autoComplete="off"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <span className="focus"></span>
          </div>
        </div>

        {/* More Input Fields */}
        <div className="input-box">
          <div className="input-field field">
            <input
              type="number"
              placeholder="Phone Number"
              id="phone"
              className="item"
              autoComplete="off"
              required
              value={formData.phone}
              onChange={handleChange}
            />
            <span className="focus"></span>
          </div>

          <div className="input-field field">
            <input
              type="text"
              placeholder="Subject"
              id="subject"
              className="item"
              autoComplete="off"
              required
              value={formData.subject}
              onChange={handleChange}
            />
            <span className="focus"></span>
          </div>
        </div>

        {/* Textarea Field */}
        <div className="textarea-field field">
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Your Message"
            className="item"
            autoComplete="off"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <span className="focus"></span>
        </div>



        <div className="btn-box btns">
          <button type="submit" className="btn">
            Submit
          </button>
        </div>
      </form>

      {/* Status Message */}
      {status.message && (
        <p className={`status-message ${status.type}`}>
          {status.message}
        </p>
      )}

    </section>
  );
};

export default Contact;
