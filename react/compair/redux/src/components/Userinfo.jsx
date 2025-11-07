import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUserName, updateUserAge } from "../store/userSlice";

function UserInfo() {
  const user = useSelector((state) => state.user); //counter 읽어오기
  const dispatch = useDispatch();

  const [nameInput, setNameInput] = useState("");
  const [ageInput, setAgeInput] = useState("");

  const handleNameSubmit = (e) => {
    e.preventDefault();
    if (nameInput.trim()) {
      dispatch(updateUserName(nameInput));
      setNameInput("");
    }
  };

  const handleAgeSubmit = (e) => {
    e.preventDefault();
    if (ageInput && !isNaN(ageInput)) {
      dispatch(updateUserAge(parseInt(ageInput)));
      setAgeInput("");
    }
  };

  return (
    <div className="user-info">
      <div className="user-display">
        <p>
          <strong>이름:</strong> {user.name}
        </p>
        <p>
          <strong>나이:</strong> {user.age}세
        </p>
      </div>

      <form onSubmit={handleNameSubmit} className="form">
        <input
          type="text"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
          placeholder="새 이름 입력"
        />
        <button type="submit">이름 변경</button>
      </form>

      <form onSubmit={handleAgeSubmit} className="form">
        <input
          type="number"
          value={ageInput}
          onChange={(e) => setAgeInput(e.target.value)}
          placeholder="새 나이 입력"
        />
        <button type="submit">나이 변경</button>
      </form>
    </div>
  );
}

export default UserInfo;
