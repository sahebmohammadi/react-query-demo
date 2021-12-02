import { useQuery } from "react-query";
import axios from "axios";

const fetchPosts = () => {
  return axios.get("http://localhost:3001/posts");
};

const usePostQuery = (onSuccess, onError) => {
  return useQuery("postsData", fetchPosts, {
    onSuccess,
    onError,
    select: (data) => {
      const transformedData = data.data.map((post) => ({
        id: post.id,
        author: post.author,
      }));
      return transformedData;
    },
  });
};

export default usePostQuery;
