import React, { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response.ok) {
        throw new Error("데이터 로딩 실패.");
      }
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  const handleRefresh = () => {
    fetchUsers();
  };

  return (
    <div className="container">
      <header>
        <h1 className="title">사용자 목록</h1>

        <button onClick={handleRefresh}> 🔄 새로고침</button>
      </header>
      {loading && (
        <div className="loadp">
          <p>로딩중...</p>
        </div>
      )}

      {error && (
        <div className="errorme">
          <p className="errorte">⚠️ {error}</p>
          <button onClick={handleRefresh}>다시 시도</button>
        </div>
      )}

      {!loading && !error && (
        <div className="users">
          {users.map((user) => (
            <div key={user.id} className="userid">
              <div className="userat">{user.name.charAt(0)}</div>
              <div className="user1">
                <h3 className="username">{user.name}</h3>
                <p className="useremail">📧 {user.email}</p>
                <p className="usercompany">🏢 {user.company.name}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {!loading && !error && users.length === 0 && (
        <div className="nomesa">
          <p className="notext">사용자 정보가 없습니다.</p>
        </div>
      )}
    </div>
  );
}
