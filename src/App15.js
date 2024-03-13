import React from "react";
import Feeds1 from "./Feeds1";
import Posts1 from "./Posts1";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
export default function App15() {
  return (
    <div>
      <BrowserRouter>
        <Link to="/">Feeds</Link> | <Link to="/post">Posts1</Link>
        <Routes>
            <Route path="/post" element={<Posts1/>}></Route>
            <Route path="/" index element={<Feeds1/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}