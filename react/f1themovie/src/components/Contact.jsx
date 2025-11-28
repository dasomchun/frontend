import React from "react";
import { motion } from "framer-motion";
import { Mail, Instagram, House, MapPin } from "lucide-react";
import "./Contact.css";

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="contact-section"
    >
      <div className="contact-card">
        {/* Info Section */}
        <div className="contact-info">
          <div>
            <h2 className="contact-title">Contact</h2>
            <p className="contact-desc">
              영화 배급, 프레스 키트 요청 및 파트너십 문의는 아래 연락처를
              이용해주세요.
            </p>
          </div>

          <div className="contact-details">
            <div className="contact-item">
              <MapPin className="contact-icon" />
              <div>
                <h3>Warner Bros. Korea</h3>
                <p>Seoul, South Korea</p>
              </div>
            </div>
            <div className="contact-item">
              <Mail className="contact-icon" />
              <div>
                <h3>company email</h3>
                <p>Soyoon.Ahn@warnerbros.com</p>
              </div>
            </div>
          </div>

          <div className="social-links">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="#" className="social-icon">
                <House size={20} />
              </a>
              <a href="#" className="social-icon">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <form className="contact-form">
            <div className="form-group">
              <label>Name</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea rows={4}></textarea>
            </div>
            <button className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
