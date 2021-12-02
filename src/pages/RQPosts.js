import { useQuery } from "react-query";
import axios from "axios";

const fetchPosts = () => {
  return axios.get("http://localhost:3001/posts");
};
const RQPosts = () => {
  // * accepts at least 2 parameters
  // 1. unique ky as routers
  // 2. afunction that returns a promize

  const { isLoading, error, data, isError, isFetching } = useQuery(
    "postsData",
    fetchPosts,
    {
      // cacheTime: 5000,
      // staleTime: 20000,
    }
  );

  console.log({ isFetching, isLoading });

  if (isLoading) return <h2>Loading ...</h2>;

  if (isError) return "An error has occurred: " + error.message;

  return (
    <div>
      {/* {isLoading && <p>loadig...</p>} */}
      {/* {isError && <p>{error.message}</p>} */}
      {data && (
        <div>
          <h2>Post data</h2>
          {data?.data.map((post) => (
            <li key={post.id}>
              {post.title} - {post.author}
            </li>
          ))}
        </div>
      )}
    </div>
  );
};

export default RQPosts;
