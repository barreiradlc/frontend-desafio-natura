import { api } from "@/lib/http/api";
import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from "react";

interface IProduct {
  id: string;
  name: string;
  description: string;
}

type ProductContextType = {
  reachedTheEnd: boolean;
  products: IProduct[];
  fetchProducts: (query?: string) => Promise<void>
  fetchMoreProducts: () => Promise<void>
}

const ProductContext = createContext({} as ProductContextType)

type ProductContextProviderProps = {
  children: ReactNode;
}

function ProductContextProvider({ children }: ProductContextProviderProps) {
  // TODO, melhorar este nome
  const [reachedTheEnd, setReachedTheEnd] = useState(false)
  const [products, setProducts] = useState<IProduct[]>([])
  const [searchParams, setSearchParams] = useState({
    take: 4,
    page: 1,
    query: ''
  })

  const fetchProducts = useCallback(async () => {
    const { query, take, page } = searchParams
    const skip = (page * take) - take
    const { data } = await api.get(`/products?query=${query}&take=${take}&skip=${skip}`)

    setProducts([
      ...products,
      ...data
    ])
    setSearchParams({
      ...searchParams,
      page: page + 1,
    })

    console.log(data.length, reachedTheEnd)

    if (data.length === 0) setReachedTheEnd(true);
  }, [products, searchParams])

  useEffect(() => {
    fetchProducts()
  }, [])

  async function fetchMoreProducts() {
    console.log({ searchParams })
    fetchProducts()
  }

  return (
    <ProductContext.Provider value={{ products, fetchProducts, fetchMoreProducts, reachedTheEnd }}>
      {children}
    </ProductContext.Provider>
  )
}

function useProduct() {
  const context = useContext(ProductContext)

  return context
}

export { ProductContext, ProductContextProvider, useProduct };
export type { IProduct };

