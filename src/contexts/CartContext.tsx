import { ShoppingCartSheet } from "@/components/shared/common/ShoppingCartSheet";
import { useToast } from "@/components/ui/use-toast";
import { api } from "@/lib/http/api";
import { createContext, ReactNode, useCallback, useContext, useState } from "react";

interface ICart {
  id: string
  items: ICartItem[]
}

interface ICartItem {
  id: string
  quantity: number
  productId: string
  product: IProduct
}

interface IProduct {
  id: string;
  name: string;
}

type AddToCartParamsType = {
  product: IProduct,
  quantity?: number
}

type CartContextType = {
  cart: ICart
  openShoppingCartSheet: boolean
  addToCart: (addTocartParams: AddToCartParamsType) => Promise<void>
  toggleShoppingCartSheet: () => Promise<void>
}
const CartContext = createContext({} as CartContextType)

type CartContextProviderProps = {
  children: ReactNode;
}

function CartContextProvider({ children }: CartContextProviderProps) {
  const [openShoppingCartSheet, setOpenShoppingCartSheet] = useState(false)
  const [cart, setCart] = useState<ICart>({ "id": "0aa13f07-98a5-4ece-bf45-713cc5b0142e", "items": [{ "id": "a1d6e786-3b79-4e17-be5b-1b556d14bd16", "cartId": "0aa13f07-98a5-4ece-bf45-713cc5b0142e", "productId": "27613f6f-d7aa-4757-b7d0-70f8a6239868", "quantity": 12, "product": { "id": "27613f6f-d7aa-4757-b7d0-70f8a6239868", "name": "Kayak 02 Masculino 100ml", "description": "Descrito como no rótulo" } }, { "id": "c56b225a-31c6-4522-abb0-2a0f411c4403", "cartId": "0aa13f07-98a5-4ece-bf45-713cc5b0142e", "productId": "2aa1d15b-b3b4-4db9-82a9-7decef024c2d", "quantity": 7, "product": { "id": "2aa1d15b-b3b4-4db9-82a9-7decef024c2d", "name": "Kayak 02 Masculino 100ml", "description": "Experimente a refrescância única de Kaiak Desodorante Colônia Masculino. Sinta-se revigorado e confiante!" } }, { "id": "82ed21a0-b541-47bb-aa43-b69b62f9eb66", "cartId": "0aa13f07-98a5-4ece-bf45-713cc5b0142e", "productId": "14eea479-1cc8-414c-8b54-35c7fe2d2738", "quantity": 1, "product": { "id": "14eea479-1cc8-414c-8b54-35c7fe2d2738", "name": "Kayak 02 Masculino 100ml", "description": "Experimente a refrescância única de Kaiak Desodorante Colônia Masculino. Sinta-se revigorado e confiante!" } }, { "id": "6aafcc2c-4d12-4052-bc83-afd5cbc50d72", "cartId": "0aa13f07-98a5-4ece-bf45-713cc5b0142e", "productId": "358ac5a2-92c4-4c54-8b26-970f75524659", "quantity": 8, "product": { "id": "358ac5a2-92c4-4c54-8b26-970f75524659", "name": "Kayak 02 Masculino 100ml", "description": "Experimente a refrescância única de Kaiak Desodorante Colônia Masculino. Sinta-se revigorado e confiante!" } }] } as unknown as ICart)
  const { toast } = useToast()

  async function toggleShoppingCartSheet() {
    setOpenShoppingCartSheet(prevState => !prevState)
  }

  const callToastSuccess = useCallback(({ id, name }: IProduct) => {
    const [itemAdded] = cart.items.filter((item) => item.productId === id)

    toast({
      title: `${name}, Adicionado ao carrinho de compras`,
      description: `Agora você tem ${itemAdded.quantity} unidade${itemAdded.quantity > 1 ? 's' : ''} deste item,`,
    })
  }, [cart.items, toast])

  const callToastFail = useCallback(() => {
    toast({
      variant: "destructive",
      title: "Opa, algo deu errado!",
      description: "Tente novamente mais tarde."
    })
  }, [toast])

  const addToCart = useCallback(async ({ product, quantity = 1 }: AddToCartParamsType) => {
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
    <CartContext.Provider value={{ addToCart, cart, toggleShoppingCartSheet, openShoppingCartSheet }}>
      {children}
      <ShoppingCartSheet />
    </CartContext.Provider>
  )
}

function useCart() {
  const context = useContext(CartContext)

  return context
}

export { CartContext, CartContextProvider, useCart };
export type { ICart };

