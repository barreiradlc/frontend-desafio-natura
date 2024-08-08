import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { IProduct } from "@/contexts/ProductContext";
import { api } from "@/lib/http/api";
import { useCallback, useEffect, useRef, useState } from "react";

const TAKE = 6

export function SearchInput() {
  const textInput = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState('')
  const [products, setProducts] = useState<IProduct[]>([] as IProduct[])
  const [openResults, setOpenResults] = useState(false)

  const fetchProducts = useCallback(async () => {
    const { data } = await api.get(`/products?query=${query}&take=${TAKE}&skip=0`)

    setProducts(data)
  }, [query])

  useEffect(() => {
    if (query) {
      setOpenResults(true);
      fetchProducts()
    }
  }, [fetchProducts, query])

  function closeResults() {
    setOpenResults(false)
  }

  return (
    <div className="flex">
      <Popover open={openResults}>
        <PopoverTrigger asChild>
          <Input
            className="w-80"
            ref={textInput}
            onMouseLeave={closeResults}
            onChange={({ target: { value } }) => setQuery(value)}
            type="text"
            placeholder="Oque está procurando hoje?"
          />
        </PopoverTrigger>
        <PopoverContent
          className="w-80 my-0"
          onMouseEnter={() => setOpenResults(true)}
          onFocus={() => textInput?.current?.focus()}
        >
          <div className="grid gap-2">
            {products.length ? products.map(({ id, name }) =>
              <Button key={id} className="space-y-0" variant="link">
                <p className="text-sm text-muted-foreground">
                  {name}
                </p>
              </Button>
            ) :
              <Button className="space-y-0" variant="outline">
                <p className="text-sm text-muted-foreground">
                  Nenhum item encontrado
                </p>
              </Button>}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
