import logoImage from "@/assets/logo.jpeg"
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
import { ChevronDown, ShoppingCart, User } from "lucide-react"
import { Link } from "react-router-dom"
import { brandLinks, targetAudienceLinks } from "./baseline"

function Header() {
  return (
    <div className="w-screen bg-white text-black py-4">
      <div className="container flex flex-row justify-between items-center">
        <div id="logo" className="w-96">
          <img src={logoImage} />
        </div>
        <div id="categories" className="w-24">
          <DropdownMenu >
            <DropdownMenuTrigger className="w-fill flex flex-row">Produtos <ChevronDown /> </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Para quem</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {targetAudienceLinks.map(({ url, label }) =>
                <Link key={`${url}-${label}`} to={url}>
                  <DropdownMenuItem> {label} </DropdownMenuItem>
                </Link>
              )}

              <DropdownMenuLabel>Nossas marcas</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {brandLinks.map(({ url, label }) =>
                <Link key={`${url}-${label}`} to={url}>
                  <DropdownMenuItem> {label} </DropdownMenuItem>
                </Link>
              )}

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
  )
}

export { Header }
