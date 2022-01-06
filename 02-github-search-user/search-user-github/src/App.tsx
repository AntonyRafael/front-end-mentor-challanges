import { useContext, useState } from "react";
import "./App.css";
import Button from "./components/Button/button";
import SearchUser from "./components/SearchUser/searchUser";
import UserProfile from "./components/UserProfile/userProfile";
import { UserContext } from "./contexts/user";

function App() {
  const { user } = useContext(UserContext); 

  return (
    <div className="App">
      <div className="wrapper">
        <SearchUser />
        <UserProfile  />
      </div>
    </div>
  );
}

export default App;
