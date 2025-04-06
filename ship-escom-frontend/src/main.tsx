import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from './components/ThemeProvider.tsx'
import { GeneralContextProvider } from './context/GeneralContext.tsx'

import './index.css'
import { LoginPage } from './pages/login/LoginPage.tsx'
import { AppRouter } from './routes/AppRouter.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GeneralContextProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <AppRouter />
      </ThemeProvider>
    </GeneralContextProvider>
  </StrictMode>,
)
