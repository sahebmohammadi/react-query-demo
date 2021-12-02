import { useQuery } from "react-query";
import axios from "axios";

const fetchPosts = (postId) => {
  console.log(postId);
  return axios.get(`http://localhost:3001/posts/${postId}`);
};

const usePostQuery = (postId) => {
  return useQuery(["postData", postId], () => fetchPosts(postId));
};

export default usePostQuery;
