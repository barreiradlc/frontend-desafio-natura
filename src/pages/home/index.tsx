import logoImage from "@/assets/logo.jpeg"
import { CardProduct } from "@/components/shared/products/CardProduct"
import { SearchInput } from "@/components/shared/products/SearchInput"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown, ShoppingCart, User, X } from "lucide-react"


function Home() {
  return (
    <div>

      {/* Top Bar */}
      <div id="top-bar" className="w-screen bg-slate-600 text-white">
        <div className="container flex flex-row justify-between items-center">
          <div className="w-full flex flex-row justify-center">
            <span className="">Aproveite as nossas oportunidades!!!</span>
          </div>
          <Button variant="link">
            <X color="#ffffff" />
          </Button>
        </div>
      </div>
        {/* Top Bar */}

        {/* Header */}
        <div className="w-screen bg-white text-black py-4">
          <div className="container flex flex-row justify-between items-center">
            <div id="logo" className="w-96">
              <img src={logoImage} />
            </div>
            <div id="categories" className="w-24">
              {/* TODO, considerar fazer componente */}
              <DropdownMenu >
                <DropdownMenuTrigger className="w-fill flex flex-row">Produtos <ChevronDown /> </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Para quem</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem> todo mundo </DropdownMenuItem>
                  <DropdownMenuItem> masculina </DropdownMenuItem>
                  <DropdownMenuItem> feminina </DropdownMenuItem>
                  <DropdownMenuItem> infantil </DropdownMenuItem>
                  <DropdownMenuLabel>Nossas marcas</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem> biome </DropdownMenuItem>
                  <DropdownMenuItem> bothânica </DropdownMenuItem>
                  <DropdownMenuItem> chronos </DropdownMenuItem>
                  <DropdownMenuItem>crer Para  Ver </DropdownMenuItem>
                  <DropdownMenuItem> ekos </DropdownMenuItem>
                  <DropdownMenuItem> essencial </DropdownMenuItem>
                  <DropdownMenuItem> kaiak </DropdownMenuItem>
                  <DropdownMenuItem> lumina </DropdownMenuItem>
                  <DropdownMenuItem> luna </DropdownMenuItem>
                  <DropdownMenuItem>mamãe e  Bebê </DropdownMenuItem>
                  <DropdownMenuItem> tododia </DropdownMenuItem>
                  <DropdownMenuItem> una </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

            </div>
            <div id="search" className="w-fit">
              <SearchInput />
            </div>
            <div id="links">
              <Button variant="link">
                <ShoppingCart />
              </Button>
              <Button variant="link">
                <User />
              </Button>
            </div>
          </div>
        </div>
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
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
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
