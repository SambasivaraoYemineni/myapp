import React from 'react';
import Feeds from "./Feeds";
import Posts from './Posts';
import {BrowserRouter as Router, Routes, Route}
export default function App11() {
  return (
    <div>
    <BrowserRouter>
    <Link to="/">Feeds</Link>|<Link to="/post">Posts</Link>
    <Routes>
    <Route path="/" index element={<Feeds/>}></Route>
    <Route path="/post" element={<Posts/>}></Route>
     </Routes>
    </BrowserRouter> 
    </div>
  );
}
