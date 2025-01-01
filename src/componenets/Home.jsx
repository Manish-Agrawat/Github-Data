import axios from "axios";
import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";
import Loader from "./Loader";

const Home = () => {
  //State management
  const [repos, setRepos] = useState(null);
  const gitRepos = async () => {
    const response = await axios.get(
      "https://api.github.com/search/repositories?q=XXX"
    );
    console.log("data", response);
    setRepos(response.data.items);
    return response.data;
  };
  useEffect(() => {
    gitRepos().catch((e) => console.error(e));
  }, []);
  return (
    <div className="userpage">
      {repos ? (
        repos.map((repo, idx) => <UserCard key={idx} repo={repo} />)
      ) : (
        <Loader/>
      )}
    </div>
  );
};

export default Home;
