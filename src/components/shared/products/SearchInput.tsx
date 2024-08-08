import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useProduct } from "@/contexts/ProductContext";
import { useEffect, useRef, useState } from "react";
export function SearchInput() {
  const { products } = useProduct()
  const textInput = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState('')
  const [openResults, setOpenResults] = useState(false)

  useEffect(() => {
    if (query) {
      setOpenResults(true);
    }

  }, [query])

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
            type="email"
            placeholder="Oque está procurando hoje?"
          />
        </PopoverTrigger>
        <PopoverContent
          className="w-80 my-0"
          onMouseEnter={() => setOpenResults(true)}
          onFocus={() => textInput?.current?.focus()}
        >
          <div className="grid gap-2">
            {products.map(({ name }) =>
              <Button className="space-y-0" variant="outline">
                <p className="text-sm text-muted-foreground">
                  {name}
                </p>
              </Button>
            )}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
