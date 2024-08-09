import { Button } from "@/components/ui/button"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle
} from "@/components/ui/sheet"
import { useCart } from "@/contexts/CartContext"

function ShoppingCartSheet() {
  const { toggleShoppingCartSheet, openShoppingCartSheet, cart: { items } } = useCart()

  return (
    <Sheet open={openShoppingCartSheet} onOpenChange={() => {
      if (openShoppingCartSheet) toggleShoppingCartSheet()
    }}>
      <SheetContent className="w-[400px]">
        <SheetHeader>
          <SheetTitle>Seu carrinho</SheetTitle>
        </SheetHeader>

        <div className="">
          <ScrollArea className="w-fit whitespace-nowrap rounded-md border mr-8">
            <div className="flex space-x-4 p-4 h-32">
              {items && items.map(({ id, product: { name } }) => (
                <figure key={id} className="shrink-0">
                  <div className="overflow-hidden rounded-md">
                    <img
                      src="https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwcfd986ca/NATBRA-95575_2.jpg"
                      alt={`${name}`}
                      className="aspect-[3/4] h-fit w-fit object-cover"
                    />
                  </div>
                  <figcaption className="pt-2 text-xs text-muted-foreground">
                    Photo by{" "}
                    <span className="font-semibold text-foreground">
                      {name}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>

        <SheetFooter>
          <SheetClose asChild>
            <Button type="button">Continuar comprando</Button>
          </SheetClose>
          <Button type="submit">Finalizar compra</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}


export { ShoppingCartSheet }
