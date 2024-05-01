// App.jsx
import { Routes, Route } from "react-router-dom";
import LoginForm from "./components/Login";
import Navbar from "./components/Navbar";
import { TextEditor } from "./components/textEditor";
import PostList from "./components/PostList";

import { Mockdata } from "./mockdata/Mockdata.js";
import { useState } from "react";
const App = () => {
  const [posts, setPosts] = useState(Mockdata);

  return (
    <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/" element={<Navbar posts={posts} setPosts={setPosts} />}>
        <Route path="/addPost" element={<TextEditor setPosts={setPosts} />} />
        <Route path="/" element={<PostList posts={posts} />} />
        {/* Pass posts as props to PostList */}
      </Route>
    </Routes>
  );
};

export default App;
