import logoImage from "@/assets/logo.png"
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
      <div className="w-screen bg-slate-600 text-white">
        <div className="container flex flex-row justify-between items-center">
          <div className="w-full flex flex-row justify-center">
            <span className="">Aproveite as nossas oportunidades!!!</span>
          </div>
          <Button variant="link">
            <X color="#ffffff" />
          </Button>
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

      </div>

    </div>
  )
}

export { Home }
