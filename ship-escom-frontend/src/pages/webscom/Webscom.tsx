import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Separator } from "@radix-ui/react-separator";

import "./webscom.css"



export const Webscom = () => {
  return (
    <header className="flex h-16 shrink-0 justify-center items-center gap-2 border-b px-4">
          <div className="font-bold bg-primary">inicio</div>
          <div className="rojo">escomunidad</div>
          <div>contactanos</div>
    </header>
  )
}

