import { Menu, } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";


export default function MobileNav() {
  return (
    <Sheet>
        <SheetTrigger>
            <Menu className="text-orange-500" />
        </SheetTrigger>
        <SheetContent className="space-y-3">
            <SheetTitle>
                <span> Bienvenido a CAFE COOL PAGE</span>
            </SheetTitle>
            <Separator/>
            <SheetDescription className="flex">
                <Button 
                    className="flex-1 font-bold bg-orange-500"
                >
                    Inicia Sesion
                </Button>
            </SheetDescription>
        </SheetContent>
    </Sheet>
)
}

    