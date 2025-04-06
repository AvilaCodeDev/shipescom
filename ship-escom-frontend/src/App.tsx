import { ThemeProvider } from "./components/ThemeProvider"
import { Button } from "./components/ui/button"

function App() {

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Button>Hola</Button>
      </ThemeProvider>
    </>
  )
}

export default App
