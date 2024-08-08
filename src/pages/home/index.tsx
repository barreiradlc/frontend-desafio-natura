import { Header } from "@/components/shared/common/Header"
import { CardProduct } from "@/components/shared/products/CardProduct"
import { Button } from "@/components/ui/button"
import { useProduct } from "@/contexts/ProductContext"
import { X } from "lucide-react"
import { useState } from "react"

function Home() {
  const { products } = useProduct()
  const [showTopBar, setShowTopBar] = useState(true)

  function dismissTopBar() {
    setShowTopBar(false)
  }

  return (
    <div>

      {/* Top Bar */}
      <div id="top-bar" className={`w-screen bg-slate-600 text-white ${!showTopBar && 'hidden'}`}>
        <div className="container flex flex-row justify-between items-center">
          <div className="w-full flex flex-row justify-center">
            <span className="">Aproveite as nossas oportunidades!!!</span>
          </div>
          <Button variant="link" onClick={dismissTopBar}>
            <X color="#ffffff" />
          </Button>
        </div>
      </div>
      {/* Top Bar */}

      {/* Header */}
      <Header />
      {/* Header */}

      {/* Banner */}
      <div id="banner" className="w-screen bg-banner min-h-96 flex items-center bg-cover">
        <div className="container">
          <div className="flex flex-col items-centers prose	">
            <h1 className="text-white m-0">Presentes que celebram</h1>
            <h4 className="text-white m-0 py-4">O cuidado entre pais e filhos com preços especiais</h4>
            <Button className="w-fit bg-white text-black rounded-full hover:bg-slate-400" variant="secondary">
              Presentear
            </Button>
          </div>
        </div>
      </div>
      {/* Banner */}

      {/* Lista de produtos */}
      <div id="catalog" className="bg-white">
        <div className="container">

          <div className="prose mx-auto w-full text-black">
            <h2 className="my-8 mx-auto text-center">Descubra as fragrâncias que combinam com você</h2>
          </div>

          <div className="grid gap-4 grid-cols-4">
            {products.map(({ name }) =>
              <CardProduct name={name} />
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

export { Home }
