import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

// Initialize EmailJS with your public key
emailjs.init("bcXIQY5GO6RuvtKo2");

export const Contact = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitMessage("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      await emailjs.send(
        "service_kd07ded",
        "template_xgj48y6",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: "prakashlayomagar1996@gmail.com"
        }
      );

      setSubmitMessage("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitMessage(""), 3000);
    } catch (error) {
      setSubmitMessage("Failed to send message. Please try again.");
      console.error("Email error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>I am currently looking for job opportunities. If you would like to collaborate, please feel free to reach out!</p>
      </div>

      <div className={styles.formContainer}>
        <form ref={formRef} onSubmit={handleSubmit} className={styles.contactForm}>
          <div className={styles.formGroup}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className={styles.formInput}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className={styles.formInput}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className={styles.formTextarea}
              rows="5"
              required
            ></textarea>
          </div>

          <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {submitMessage && (
            <p className={`${styles.message} ${submitMessage.includes("success") ? styles.success : styles.error}`}>
              {submitMessage}
            </p>
          )}
        </form>
      </div>

      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:prakashlayomagar1996@gmail.com">prakashlayomagar1996@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/prakash-layo-magar-fullstackjavadev/" className={styles.contactBtn}>linkedin.com/prakashlayomagar</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/prakashlayomagar">github.com/prakashlayomagar</a>
        </li>
      </ul>
    </footer>
  );
};