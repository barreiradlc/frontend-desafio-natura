import { CardCartItem } from "@/components/shared/cart/CardCartItem"
import { Header } from "@/components/shared/common/Header"
import { useCart } from "@/contexts/CartContext"

function Cart() {
  const { cart: { items } } = useCart()

  return (
    <div id="cart">
      <Header />

      <div className="container">
        <div className="flex flex-row">
          <div className="flex flex-col">
            {items.map((cardItem) =>
              <CardCartItem cardItem={cardItem} />
            )}
          </div>
          <div className="w-1/2"></div>
        </div>

      </div>
    </div>
  )
}

export { Cart }
