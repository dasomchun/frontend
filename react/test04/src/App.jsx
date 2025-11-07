import React from "react";
import { useState } from "react";
import "./App.css";

export default function App() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    phone: "",
  });

  const [touched, setTouched] = useState({
    email: false,
    password: false,
    confirmPassword: false,
    name: false,
    phone: false,
  });

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])[A-Za-z0-9]{8,}$/;
    return passwordRegex.test(password);
  };

  const validateName = (name) => {
    return name.trim().length >= 2;
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/;
    return phoneRegex.test(phone);
  };

  const getErrors = () => {
    const errors = {};
    if (touched.email && !validateEmail(formData.email)) {
      errors.email = "올바르지 않은 이메일 형식 입니다.";
    }
    if (touched.password && !validatePassword(formData.password)) {
      errors.password =
        "비밀번호는 대문자 1개포함 8 자이상 영문+숫자를 입력해야 합니다";
    }
    if (
      touched.confirmPassword &&
      formData.password !== formData.confirmPassword
    ) {
      errors.confirmPassword = "비밀번호가 일치하지 않습니다..";
    }
    if (touched.name && !validateName(formData.name)) {
      errors.name = "이름은 2글자 이상 입력해야합니다.";
    }
    if (touched.phone && !validatePhone(formData.phone)) {
      errors.phone = "휴대폰번호가 일치하지 않습니다.";
    }
    return errors;
  };

  const errors = getErrors();

  const isFormValid = () => {
    return (
      validateEmail(formData.email) &&
      validatePassword(formData.password) &&
      formData.password === formData.confirmPassword &&
      validateName(formData.name) &&
      validatePhone(formData.phone)
    );
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({
      ...touched,
      [name]: true,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      alert(
        `회원가입 성공!!\n\n이름: ${formData.name}\n이메일:${formData.email}\n휴대폰번호:${formData.phone}`
      );
      console.log("회원가입 데이터", formData);
      setFormData({
        email: "",
        password: "",
        confirmPassword: "",
        name: "",
        phone: "",
      });
      setTouched({
        email: false,
        password: false,
        confirmPassword: false,
        name: false,
        phone: false,
      });
    }
  };
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="container">
      <div className="formsection">
        <h1>회원가입</h1>
        <form className="formmenu">
          <div className="email-section">
            <label htmlFor="email">이메일 *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              onSubmit={handleSubmit}
              placeholder="example@email.com"
            />
            {errors.email && <p>❌{errors.email}</p>}
            {touched.email && !errors.email && formData.email && (
              <p> ✅ 올바른 이메일 형식 입니다.</p>
            )}
          </div>
          <div className="passwordcon">
            <label>비밀번호 *</label>
            <div className="passwordsection">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="대문자 1개포함 8자 이상, 영문+ 숫자"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
            {errors.password && <p>❌{errors.password}</p>}
            {touched.password && !errors.password && formData.password && (
              <p>✅ 안전한 비밀번호입니다</p>
            )}
          </div>
          <div className="repasscon">
            <label>비밀번호 확인 *</label>
            <div className="repasection">
              <input
                type="password"
                name="confirmPassword"
                placeholder="비밀번호 재입력"
                value={formData.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            {errors.password && <p>❌ {errors.confirmPassword}</p>}
            {touched.confirmPassword &&
              !errors.confirmPassword &&
              formData.confirmPassword && <p>✅ 비밀번호가 일치합니다</p>}
          </div>
          <div className="namecon">
            <label>이름 *</label>
            <div className="namesection">
              <input
                type="text"
                name="name"
                placeholder="홍길동"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            {errors.name && <p>❌ {errors.name}</p>}
            {touched.name && !errors.name && formData.name && (
              <p>✅ 유효한 이름입니다</p>
            )}
          </div>
          <div className="phonecon">
            <label>휴대폰번호 *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="010-0000-0000"
            />
            {errors.phone && <p>❌{errors.phone}</p>}
            {touched.phone && !errors.phone && formData.phone && (
              <p> ✅ 유효한 휴대폰번호 입니다.</p>
            )}
          </div>
          <button className="btn" type="submit" disabled={!isFormValid()}>
            가입하기
          </button>
        </form>
      </div>
    </div>
  );
}
