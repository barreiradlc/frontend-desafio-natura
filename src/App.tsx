import { RouterProvider } from "react-router-dom"
import { ProductContextProvider } from "./contexts/ProductContext"
import { router } from "./routes"

function App() {
  return (
    <ProductContextProvider>
      <RouterProvider router={router} />
    </ProductContextProvider>
  )
}

export { App }

