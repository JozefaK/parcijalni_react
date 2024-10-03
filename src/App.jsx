import React, { useState } from "react";
import UserInfo from "./components/UserInfo";
import RepoList from "./components/RepoList";

function App() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const userResponse = await fetch(`https://api.github.com/users/${username}`);
      const userData = await userResponse.json();
      setUserData(userData);

      const repoResponse = await fetch(`https://api.github.com/users/${username}/repos`);
      const reposData = await repoResponse.json();
      setRepos(reposData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleReset = () => {
    setUsername("");
    setUserData(null);
    setRepos([]);
  };

  return (
    <div className="container">
      <form onSubmit={handleFormSubmit}>
        <h1>Forma</h1>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={handleInputChange}
          placeholder="Enter GitHub username"
        />
        <button className="btn" type="submit">
          Search!
        </button>
      </form>

      {userData && (
        <>
          <UserInfo userData={userData} />
          <RepoList repos={repos} />
          <button className="reset-btn" onClick={handleReset}>
            Reset
          </button>
        </>
      )}
    </div>
  );
}

export default App;
