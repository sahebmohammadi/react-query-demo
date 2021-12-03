import "./App.css";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Posts from "./pages/Posts";
import RQPosts from "./pages/RQPosts";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import RQPost from "./pages/RQPost";
import RQParallel from "./pages/RQParallelQueries";
import RQDynamicParallel from "./pages/RQDynamicParalleQueries";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
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
              <li className="nav__item">
                <Link to="/rq-Parallel">parallel queries</Link>
              </li>
              <li className="nav__item">
                <Link to="/rq-dynamic-parallel">dynamic parallel queries</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/rq-posts" element={<RQPosts />} />
            <Route path="/rq-post/:postId" element={<RQPost />} />
            <Route path="/rq-parallel" element={<RQParallel />} />
            <Route
              path="/rq-dynamic-parallel"
              element={<RQDynamicParallel productsId={[1, 3]} />}
            />
          </Routes>
        </div>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
