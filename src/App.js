import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Posts from "./pages/Posts";
import RQPosts from "./pages/RQPosts";

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <ul className="nav__items">
          <li className="nav__item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav__item">
            <Link to="/posts">Posts</Link>
          </li>
          <li className="nav__item">
            <Link to="/rq-Posts">rq-Posts</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/rq-Posts" element={<RQPosts />} />
      </Routes>
    </div>
  );
}

export default App;
