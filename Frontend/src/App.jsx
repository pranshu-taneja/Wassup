import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Chat from "./Pages/Chat";

function App() {
  return (
    <>
      <HashRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/home" exact element={<Home />}></Route>
          <Route path="/chat" exact element={<Chat />}></Route>
          <Route path="/profile" exact element={<Profile />}></Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
