import React from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Users from "./components/Users";
import UserCard from "./components/UserCard";

function App() {
  return (
    <div>
      <Header />
      <Search />
      <Users />
      <UserCard />
    </div>
  );
}

export default App;