
import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { useCart } from "@/contexts/CartContext"

type CardProps = {
  cardItem: {
    id: string
    quantity: number
    productId: string
    product: {
      id: string
      name: string
    }
  }
}

function CardCartItem({ cardItem: { product } }: CardProps) {
  const { addToCart } = useCart()
  const { name } = product

  function handleAddItemToCart() {
    // addToCart({ product })
    console.log(product)
  }

  return (
    <Card className="w-1/2 my-4">
      <div className="flex flex-row items-center justify-start">
        <div className="p-4">
          <img
            className="w-50"
            src="https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwcfd986ca/NATBRA-95575_2.jpg"
            alt={name} />
        </div>
        <CardHeader className="flex flex-col items-start">
          <CardDescription>{name}</CardDescription>
          <CardTitle>R$ 154,90</CardTitle>

          <Button
            onClick={handleAddItemToCart}
            className="rounded-full bg-orange-600 text-white w-full my-12 p-4 h-6"
          >
            Adicionar
          </Button>

        </CardHeader>
      </div>
    </Card>
  )
}


export { CardCartItem }
