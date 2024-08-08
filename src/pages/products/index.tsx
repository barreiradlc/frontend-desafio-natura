import { Header } from "@/components/shared/common/Header"
import { CardProduct } from "@/components/shared/products/CardProduct"
import { Button } from "@/components/ui/button"
import { useProduct } from "@/contexts/ProductContext"

function Products() {
  const { products } = useProduct()

  return (
    <div>
      {/* Header */}
      <Header />
      {/* Header */}

      {/* Lista de produtos */}
      <div id="catalog" className="bg-white">
        <div className="container">

          <div className="prose mx-auto w-full text-black">
            <h2 className="my-8 mx-auto text-center">Descubra as fragrâncias que combinam com você</h2>
          </div>

          <div className="grid gap-4 grid-cols-4">
            {products.map(({ id, name }) =>
              <CardProduct key={id} name={name} />
            )}

          </div>

          <div className="mx-auto w-full  flex justify-center my-8">
            <Button className="text-black rounded-full" variant="outline">
              Carregar outros
            </Button>
          </div>

        </div>
      </div>
      {/* Lista de produtos */}
    </div>
  )
}

export { Products }
