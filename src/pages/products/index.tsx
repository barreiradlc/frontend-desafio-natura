import { Header } from "@/components/shared/common/Header"
import { CardProduct } from "@/components/shared/products/CardProduct"
import { Button } from "@/components/ui/button"
import { useProduct } from "@/contexts/ProductContext"

function Products() {
  const { products, fetchMoreProducts, reachedTheEnd } = useProduct()

  return (
    <div>
      {/* Header */}
      <Header />
      {/* Header */}

      {/* Lista de produtos */}
      <div id="catalog" className="bg-white">
        <div className="container">

          <div className="flex flex-col">
            {products.map(({ id, name }) =>
              <CardProduct key={id} name={name} />
            )}
          </div>

          {!reachedTheEnd &&
            <div className={`mx-auto w-full  flex justify-center my-8`}>
              <Button className="text-black rounded-full" variant="outline" onClick={fetchMoreProducts}>
                Carregar outros
              </Button>
            </div>
          }


        </div>
      </div>
      {/* Lista de produtos */}
    </div>
  )
}

export { Products }
