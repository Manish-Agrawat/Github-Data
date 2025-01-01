import React from "react";
import "../style/userCard.css"


const UserCard = ({ repo }) => {
  return (
    <div className="user-card-cont">
      <img
        src={repo.owner.avatar_url}
        alt="userAvatar"
        className="user-avatar"
      />
      <span className="username">{repo.name}</span>

      <span className="repo-lang-span">Language: {repo.language}</span>
      <div>
        By: <button className="repo-owner">{repo.owner.login}</button>
      </div>

      <button>View Repo</button>
    </div>
  );
};

export default UserCard;
