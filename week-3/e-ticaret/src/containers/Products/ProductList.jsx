import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { fetchProducts } from "../../services";

import ProductItem from "./ProductItem";

const Products = () => {
  const [products, setProducts] = useState([]); // use ile başlayan fonksiyonlara hook diyoruz
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true);

  const getProducts = async () => {
    // setLoading(true);
    const response = await fetchProducts();
    console.log(response);
    setTimeout(() => {
      setProducts(response.data) // set state
      setLoading(false);
    }, 500);
  }

  const handleSearch = (event) => {
    setSearch(event.target.value); // ASYNC
    console.log('search: ', search);
  };

  const filteredData = products.filter(item => item.title.toLowerCase().includes(search.toLowerCase()));

  useEffect(() => { // lifecycle of component
    getProducts();
  }, []); // dependicies

  /*   useEffect(() => {
      console.log('use effect search: ', search);
    }, [search]) */

  useEffect(() => {
    if (loading) {
      getProducts();
    }
  }, [loading])

  const handleRemove = (id) => {
    console.log('remove id', id);
    const remainingItems = products.filter(item => item.id !== id);
    setProducts(remainingItems);
  }

  return (
    <div>
      <div>
        <h1>Hello World</h1>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
      </div>
      <button onClick={() => setLoading(true)}>Refresh Data</button>
      {loading ? (
        <div>
          Loading...
        </div>
      ) : (
        <div>
          {/* <button onClick={getProducts}>Get products</button> */}
          <input
            value={search}
            style={{ marginLeft: '10px' }}
            type="text"
            onChange={handleSearch}
          />
          <h1>Product List:</h1>
          <div className="product-container">
            {filteredData.map(product => {
              return (
                <ProductItem
                  product={product}
                  name="patika" key={product.id}
                  handleRemove={handleRemove}
                />
              )
            })}
          </div>
        </div>
      )}

    </div>

  )
};

export default Products;
