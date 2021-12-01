import { useState, useEffect } from "react";
import axios from "axios";

const Posts = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    setLoading(true);
    setData(null);
    setError(null);

    axios
      .get("http://localhost:3001/posts")
      .then((res) => {
        setLoading(false);
        setData(res.data);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });
  }, []);

  return (
    <div>
      {loading && <p>loadig...</p>}
      {error && <p>{error}</p>}
      {data && (
        <div>
          <h2>Post data</h2>
          {data.map((post) => (
            <li key={post.id}>
              {post.title} - {post.author}
            </li>
          ))}
        </div>
      )}
    </div>
  );
};

export default Posts;
