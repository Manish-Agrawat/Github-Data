import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "../style/userprofile.css";

const UserProfile = () => {
  const [gitUserData, setGitUserData] = useState({});
  const { username } = useParams();

  useEffect(() => {
    const getGitUser = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/users/${username}`
        );
        console.log("USER DATA:", response.data);
        setGitUserData(response.data);
      } catch (error) {
        console.error("Error fetching GitHub user data:", error);
      }
    };

    getGitUser();
  }, [username]);

  return (
 
    <div className="user-profile-main-cont">
      <div className="top-cont">
        <img
          src={gitUserData.avatar_url}
          className="user-avatar-img"
          alt="User Avatar"
        />
        <div className="name-cont">
          <span>{gitUserData.login}</span>
          <h2>{gitUserData.name}</h2>
          <h3>{gitUserData.location}</h3>
          <div className="follow-cont">
            <span className="followers">
              Followers: {gitUserData.followers}
            </span>
            <span>Following: {gitUserData.following}</span>
          </div>
          <Link
            className="view-ongit-a"
            to={`/github/${username}`}
            
            
          >
            View on GitHub
          </Link>
        </div>
      </div>
      <div className="bottom-cont">
        <h3>{gitUserData.bio}</h3>
      </div>
    </div>
    
  );
};

export default UserProfile;
