import { api } from "@/lib/http/api";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface IProduct {
  id: string;
  name: string;
  description: string;
}

type ProductContextType = {
  products: IProduct[];
  fetchProducts: (query?: string) => Promise<void>
}

const ProductContext = createContext({} as ProductContextType)

type ProductContextProviderProps = {
  children: ReactNode;
}

function ProductContextProvider({ children }: ProductContextProviderProps) {

  const [products, setProducts] = useState<IProduct[]>([])

  useEffect(() => {
    fetchProducts()
  }, [])

  async function fetchProducts(query = '') {
    const { data } = await api.get(`/products?query=${query}`)

    console.log(data)
    setProducts(data)
  }

  return (
    <ProductContext.Provider value={{ products, fetchProducts }}>
      {children}
    </ProductContext.Provider>
  )
}

function useProduct() {
  const context = useContext(ProductContext)

  return context
}

export { ProductContext, ProductContextProvider, useProduct };
