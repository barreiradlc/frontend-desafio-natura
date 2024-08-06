import { createBrowserRouter } from "react-router-dom";
import { Cart } from "./pages/cart";
import { Home } from "./pages/home";
import { Products } from "./pages/products";

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/products', element: <Products /> },
  { path: '/cart', element: <Cart /> },
])

export { router };
