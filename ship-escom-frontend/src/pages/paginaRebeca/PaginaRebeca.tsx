import { Button } from "@/components/ui/button"
import { useState } from "react"

export const PaginaRebeca = () => {
    let [counter, setConunter] = useState(0);

    const handleAdd = (e) =>{
        setConunter(counter+1);

    
    }
    const resta = (e) =>{
        if(counter > 0) setConunter(counter-1);

    }

    
  return (
    <>
        <div>Hola esta es mi primer pagina en reactjs</div>
        <span>{ counter }</span>
        <Button onClick={ handleAdd }>+</Button>
        <Button onClick={ resta } > - </Button>

    </>

  )
}
