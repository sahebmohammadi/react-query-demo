import { Link, useParams } from "react-router-dom";
import usePostQuery from "../hooks/usePostQuery";

const RQPost = () => {
  const { postId } = useParams();
  const { isLoading, error, isError, data } = usePostQuery(postId);

  if (isLoading) return <h2>Loading ...</h2>;

  if (isError) return "An error has occurred: " + error.message;

  return (
    <div>
      <h2> the post id - {postId} </h2>
      <div>Author : {data.data.author}</div>
      <Link to="/rq-posts">Go Back?</Link>
    </div>
  );
};

export default RQPost;
