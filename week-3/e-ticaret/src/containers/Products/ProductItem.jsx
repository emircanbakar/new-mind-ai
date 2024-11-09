/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ProductItem = ({
  product, handleRemove
}) => {
  // props
  return (
    <Link className="product"  to={`/products/${product.id}`}>
      <img src={product.image} width={100} />
      <p>{product.title}</p>
      <p>${product.price}</p>
      <button className="delete-btn"
      onClick={() => handleRemove(product.id)}
      >Delete</button>
    </Link>
  )
}

export default ProductItem;
