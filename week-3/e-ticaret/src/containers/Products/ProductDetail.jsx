import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { fetchProduct } from "../../services";

const ProductDetail = () => {
  const [product, setProduct] = useState({});

  // const params = useParams();
  // console.log('params', params);

  const {id} = useParams();
  
  
  // for url search params: useSearchParams


  const getData = async () => {
    try {
      const res = await fetchProduct(id);
      setProduct(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
      </div>
      <div className="product">
        <img src={product.image} width={100} />
        <p>{product.title}</p>
        <p>${product.price}</p>

      </div>
    </div>
  )
}

export default ProductDetail;