import { Star } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"


type CardProps = {
  name?: string
}

function CardProductGrid({ name }: CardProps) {
  return (
    <Card >
      <div className="w-full p-4">
        <Avatar className="object-fill w-full h-full rounded-lg">
          <AvatarImage src="https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwcfd986ca/NATBRA-95575_2.jpg" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <CardHeader>
        <CardDescription>R$ 154,90</CardDescription>

        <div className="flex flex-row ">
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </div>

        <CardTitle>{name}</CardTitle>
      </CardHeader>
    </Card>
  )
}


export { CardProductGrid }
