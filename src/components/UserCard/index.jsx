import React, { useEffect, useState } from "react";
import "./styles.css";

function UserCard() {
  const [selectedUser, setSelectedUser] = useState({});
  const users = [
    {
      id: 1,
      name: "Abdoulrhman",
      avatar: "https://via.placeholder.com/150",
      email: "a.b@t.com",
    },
    {
      id: 2,
      name: "Yassmin",
      avatar: "https://via.placeholder.com/150",
      email: "a.b@t.com",
    },
    {
      id: 3,
      name: "Ashraf",
      avatar: "https://via.placeholder.com/150",
      email: "a.b@t.com",
    },
    {
      id: 4,
      name: "Rania",
      avatar: "https://via.placeholder.com/150",
      email: "a.b@t.com",
    },
  ];
  const handleUserDetails = (user) => {
    setSelectedUser(user);
  };
  useEffect(() => {
    console.log(selectedUser);
  }, [selectedUser]);
  return (
    <div>
      <div className="list-wrapper">
        <div className="users">
          <p className="title">List of Users</p>
          {users.map((user) => {
            return (
              <p
                className="user-name"
                onClick={() => handleUserDetails(user)}
                key={user.id}
              >
                {user.name}
              </p>
            );
          })}
        </div>
        <div className="vertical-line"></div>
        <div className="users-details">
          <p>{selectedUser.name}</p>
          <p>{selectedUser.email}</p>
          <img src={selectedUser.avatar} alt="" />
        </div>
      </div>
    </div>
  );
}

export default UserCard;
