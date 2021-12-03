import axios from "axios";
import { useQueries, useQuery } from "react-query";

const fetchProduct = (productId) => {
  return axios.get(`http://localhost:3001/products/${productId}`);
};

const RQDynamicParallel = ({ productsId }) => {
  const queryResult = useQueries(
    productsId.map((id) => {
      return {
        queryKey: ["productData", id],
        queryFn: () => fetchProduct(id),
      };
    })
  );
  console.log(queryResult);

  return <div>dynamic parallel queries</div>;
};

export default RQDynamicParallel;
