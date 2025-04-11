import Layout from "@/layout/Layout"
import { LoginPage } from "@/pages/login/LoginPage"
import { Webscom } from "@/pages/webscom/Webscom"

import { BrowserRouter, Route, Routes } from "react-router-dom"
export const AppRouter = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Webscom />}/>
                <Route path="/login" element={ <LoginPage /> } />
                <Route path="/inicio" element={ <Layout />} />
            </Routes>
        </BrowserRouter>
    )
}