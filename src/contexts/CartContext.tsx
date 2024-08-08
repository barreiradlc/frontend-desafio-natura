import { useToast } from "@/components/ui/use-toast";
import { api } from "@/lib/http/api";


import { createContext, ReactNode, useCallback, useContext, useState } from "react";

interface ICart {
  id: string
  items: ICartItem[]
}

interface ICartItem {
  id: IProduct
  quantity: number
  productId: string
  product: IProduct
}

interface IProduct {
  id: string;
  name: string;
}

type CartContextType = {
  cart: ICart
  addToCart: (product: IProduct) => Promise<void>
}
const CartContext = createContext({} as CartContextType)

type CartContextProviderProps = {
  children: ReactNode;
}

function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<ICart>({} as ICart)
  const { toast } = useToast()

  const callToastSuccess = useCallback(({ id, name }: IProduct) => {
    const [itemAdded] = cart.items.filter((item) => item.productId === id)

    toast({
      title: `${name}, Adicionado ao carrinho de compras`,
      description: `Agora você tem ${itemAdded.quantity} unidades deste item,`,
    })
  }, [cart.items, toast])

  const callToastFail = useCallback(() => {
    toast({
      variant: "destructive",
      title: "Opa, algo deu errado!",
      description: "Tente novamente mais tarde."
    })
  }, [toast])

  const addToCart = useCallback(async (product: IProduct, quantity = 1) => {
    try {
      const { data } = await api.post('/cart', {
        cartId: cart.id,
        productId: product.id,
        quantity
      })

      setCart(data)

      callToastSuccess(product)
    } catch (error) {
      console.error(error)
      callToastFail()
    }
  }, [callToastFail, callToastSuccess, cart.id])

  return (
    <CartContext.Provider value={{ addToCart, cart }}>
      {children}
    </CartContext.Provider>
  )
}

function useCart() {
  const context = useContext(CartContext)

  return context
}

export { CartContext, CartContextProvider, useCart };
export type { ICart };

