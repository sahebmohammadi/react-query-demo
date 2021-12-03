import axios from "axios";
import { useQuery } from "react-query";

const fetchPosts = () => {
  return axios.get("http://localhost:3001/posts");
};
const fetchProducts = () => {
  return axios.get("http://localhost:3001/products");
};

const RQParallel = () => {
  const { data: postsData } = useQuery("productsData", fetchProducts);
  const { data: productsData } = useQuery("postsData", fetchPosts);

  return <div>Parall query</div>;
};

export default RQParallel;
