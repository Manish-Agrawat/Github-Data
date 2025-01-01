import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/SingleUser.css"

const SingleUser = ({ user }) => {
  const navigate = useNavigate();

  return (
    
    <div className="user-card-cont" key={user.id}>
      <img src={user.avatar_url} alt="userAvatar" className="user-avatar" />
      <span className="username">{user.login}</span>
      {/* <Link to={`user/${user.login}`} className="view-btn">
      View User
    </Link> */}
      <button
        className="view-btn"
        onClick={() => navigate(`user/${user.login}`)}
      >
        View User
      </button>
    </div>
  );
};

export default SingleUser;
