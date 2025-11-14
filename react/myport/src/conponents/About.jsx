import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import "./About.css";
export default function About() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML5", icon: FaHtml5, color: "orange" },
        { name: "CSS3", icon: FaCss3Alt, color: "blue" },
        { name: "JavaScript", icon: FaJs, color: "yellow" },
        { name: "React", icon: FaReact, color: "cyan" },
        { name: "TypeScript", icon: SiTypescript, color: "navy" },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: FaGitAlt, color: "darkorange" },
        { name: "GitHub", icon: FaGitAlt, color: "lightgray" },
        { name: "Figma", icon: FaFigma, color: "lightcyan" },
      ],
    },
  ];

  const getProgressWidth = (index) => {
    const percentage = [95, 90, 85, 88, 82, 80, 92];
    return percentage[index] || 80;
  };
  return (
    <div id="about" className="about-section">
      <header className="introduce">
        <h2>About Me</h2>
      </header>
      <div className="container">
        <div className="profile-section">
          <div className="picture">
            <img src="../images/c1.jpg" alt="" />

            <div className="profile-text">
              <h2>천다솜 / Chun Da-Som</h2>
              <div className="profile-infor">
                <p>B. 1990.06.10</p>
                <p>P. 010-6469-8610</p>
                <p>M. didierdrogba_@nate.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="career-section">
          <div className="education">
            <h3>학력 Education</h3>
            <div className="edu-date">
              <p>2015.03 ~ 2017.02</p>
              <p>2009.03 ~ 2015.02</p>
              <p>2006.03 ~ 2009.02</p>
            </div>
            <div className="edu-name">
              <p>세종대학교 호텔외식비즈니스 학과 졸업</p>
              <p>국제대학교 컴퓨터정보 학과 졸업</p>
              <p>삼성고등학교 졸업</p>
            </div>
          </div>
          <div className="experience">
            <h3>경력 Experience</h3>
            <div className="exe-date">
              <p>2022.02 ~ 2022.11</p>
              <p>2018.11 ~ 2020.10</p>
              <p>2017.08 ~ 2018.02</p>
              <p>2012.10 ~ 2017.02</p>
            </div>
            <div className="exe-name">
              <p>김종용누룽지통닭 신림점 홀매니저</p>
              <p>압구정순대국 주방실장</p>
              <p>네모오징어 본사 슈퍼바이저</p>
              <p>불고기브라더스 서비스 매니저</p>
            </div>
          </div>
          <div className="license">
            <h3>자격증 License</h3>
            <div className="li-date">
              <p>2012.04</p>
              <p>2013.04</p>
              <p>2013.06</p>
            </div>
            <div className="li-name">
              <p>운전면허 1종 보통</p>
              <p>Mos PowerPoint</p>
              <p>Mos Excelt</p>
            </div>
            <div className="li-com">
              <p>서울경찰청</p>
              <p>Microsoft</p>
              <p>Microsoft</p>
            </div>
          </div>
        </div>
      </div>
      <div className="skill-section">
        <header>
          <h3>My Skills</h3>
        </header>
        <div className="container">
          <div className="skills-grid">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="skill-category-card">
                <h3 className="category-title">{category.title}</h3>
                <div className="skills-grid-inner">
                  {category.skills.map((skill, index) => (
                    <div key={index} className="skill-item">
                      <skill.icon
                        className={`skill-icon skill-${skill.color}`}
                      />
                      <span className="skill-name">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="skills-bars">
            <div className="skills-bars-title">Proficiency Levels</div>
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "TypeScript",
              "Figma",
              "Git",
            ].map((skill, index) => {
              const width = getProgressWidth(index);
              return (
                <div key={index} className="skill-bar-container">
                  <div className="skill-bar-header">
                    <span className="skill-bar-label">{skill}</span>
                    <span className="skill-bar-value">{width}%</span>
                  </div>
                  <div className="skill-bar-track">
                    <div
                      className="skill-bar-fill"
                      style={{ width: `${width}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
