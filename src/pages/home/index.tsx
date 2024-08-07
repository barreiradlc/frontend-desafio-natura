import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

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

      </div>

    </div>
  )
}

export { Home }
