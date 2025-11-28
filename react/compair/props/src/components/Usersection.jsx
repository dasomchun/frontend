import React from "react";
import UserInfo from "./Userinfo";

export default function Usersection({ user, updateUserAge, updateUserName }) {
  return (
    <section className="section">
      <h2>👤 사용자 정보</h2>
      <UserInfo
        user={user}
        updateUserName={updateUserName}
        updateUserAge={updateUserAge}
      />
    </section>
  );
}
