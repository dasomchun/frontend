import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

import "./navbar.css";

export default function Navbar({ activeSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // isMenuOpen : 모바일 메뉴가 열려 있는지 여부(true)
  // setIsMenuOpen 메뉴 상태를 바꿈

  // 네이게이션 항목 목록
  const navItems = [
    { id: "/", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          <div className="navbar-logo">
            <span className="logo-text">
              <Link to="/">Portfolio</Link>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="desktop-nav">
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.id}
                onClick={() => setIsMenuOpen(false)}
                className={`nav-button ${activeSection === item.id ? "active" : ""}`}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="mobile-menu-button"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="mobile-nav">
            <div className="mobile-nav-items">
              {navItems.map((item) => (
                <NavLink
                  key={item.id}
                  to={item.id}
                  onClick={() => setIsMenuOpen(false)}
                  className={`mobile-nav-button ${activeSection === item.id ? "active" : ""}`}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
