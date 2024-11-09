// component is function
// return html

import {
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";

import "./App.css";

import ButtonComponent from "./components/Button";
import Counter from "./components/Counter";
import Products from "./containers/Products/ProductList";
import ProductDetail from "./containers/Products/ProductDetail";

const router = createBrowserRouter([
  {
    path: "/", // homepage
    element: (
      <div>
        <h1>Hello World</h1>
        {/* <a href="/products">Products</a> */}
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
      </div>
    ),
  },
  {
    path: "/products/:id", // dynamic routing
    element: <ProductDetail />,
  },
  {
    path: "/products",
    element: <Products />,
  }
]);

const App = () => {
  return (
    <RouterProvider router={router}>
      {/* <div>
        <div>
          <a href="/">Home</a>
          <a href="/product">Products</a>
        </div>
        <div>
          <Products />
          <Counter />
        </div>
        <div>
          <ButtonComponent />
        </div>
      </div> */}
    </RouterProvider>

  )
};

export default App;
