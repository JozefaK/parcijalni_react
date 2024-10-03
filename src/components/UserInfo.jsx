import React from "react";

function UserInfo({ userData }) {
  return (
    <div className="user-info">
      <img src={userData.avatar_url} alt={userData.name} width="150" />
      <h2>{userData.name}</h2>
      <p>
        <strong>Location:</strong> {userData.location || "Not available"}
      </p>
      <p>
        <strong>Bio:</strong> {userData.bio || "No bio available"}
      </p>
    </div>
  );
}

export default UserInfo;
