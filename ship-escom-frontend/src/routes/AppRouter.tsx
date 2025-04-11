
import { Layout } from "@/layout/Layout"
import { LoginPage } from "@/pages/login/LoginPage"
import { PaginaRebeca } from "@/pages/paginaRebeca/PaginaRebeca"

import { BrowserRouter, Route, Routes } from "react-router-dom"
export const AppRouter = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={ <LoginPage /> } />
                {/* <Route path="/inicio" element={ <Layout>} /> */}
                <Route path="/rebeca" element={<Layout> <PaginaRebeca /> </Layout> } />
            </Routes>
        </BrowserRouter>
    )
}