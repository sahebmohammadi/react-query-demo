import usePostQuery from "../hooks/usePostQuery";

const onSuccess = (data) => {
  console.log("pefrom side effect after data fetching", data);
};

const onError = (error) => {
  console.log("perform side effect after encountering error", error);
};

const RQPosts = () => {
  // * accepts at least 2 parameters
  // 1. unique ky as routers
  // 2. afunction that returns a promize

  const { isLoading, error, data, isError, isFetching } = usePostQuery(
    onError,
    onSuccess
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
          {data.map((post) => (
            <li key={post.id}>
              {post.id} - {post.author}
            </li>
          ))}
        </div>
      )}
    </div>
  );
};

export default RQPosts;
