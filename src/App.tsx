import { RouterProvider } from "react-router-dom"
import { CartContextProvider } from "./contexts/CartContext"
import { ProductContextProvider } from "./contexts/ProductContext"
import { router } from "./routes"

function App() {
  return (
    <CartContextProvider>
      <ProductContextProvider>
        <RouterProvider router={router} />
      </ProductContextProvider>
    </CartContextProvider>
  )
}

export { App }

