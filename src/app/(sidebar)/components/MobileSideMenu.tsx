import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { PanelsTopLeft } from "lucide-react";
import Link from "next/link";
import componentsData from "../data/ComponentsData";

export function MobileSideMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <HamburgerMenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className="pt-6">
          {componentsData.map((item) => (
            <>
              <Link
                href={`/${item.category.toLocaleLowerCase()}`}
                className="w-full justify-between flex items-center hover:bg-muted/70 p-2 rounded-md"
              >
                <div className="flex items-center gap-1">
                  <PanelsTopLeft size={18} />
                  {item.category}
                </div>
                <Badge variant={"secondary"}>{item.items.length}</Badge>
              </Link>
            </>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
