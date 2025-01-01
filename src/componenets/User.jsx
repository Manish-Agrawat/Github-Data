import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SingleUser from "./SingleUser";

const Users = () => {
  //State management
  const [gitUsers, setGitUsers] = useState([]);
  const navigate = useNavigate();

  const getGitUsers = async () => {
    const response = await axios.get("https://api.github.com/users?since=XXXX");
    console.log(response.data);
    setGitUsers(response.data);
    return response.data;
  };

  useEffect(() => {
    getGitUsers().catch((e) => console.error(e));
  }, []);
  return (
    <div className="userpage">
      {" "}
      <div className="users-cont">
        {gitUsers.map((user) => (
          <SingleUser user={user} />
        ))}
      </div>
    </div>
  );
};

export default Users;
