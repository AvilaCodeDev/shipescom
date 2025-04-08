import { Label } from "@radix-ui/react-label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Input } from "../ui/input"
import { Button } from "../ui/button"

export const LoginForm = () =>{
    return(
        <div className="flex flex-col w-lvw justify-center items-center h-lvh">
            <div className="w-full max-w-sm">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-3xl">Login</CardTitle>
                        <CardDescription>
                            Hola soy Rebeca
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form>
                            <div className="flex flex-col gap-6">
                                <div className="grid gap-2">
                                    <Label htmlFor="boleta">Boleta</Label>
                                    <Input
                                        id="boleta"
                                        type="text"
                                        placeholder="Ingresa tu numero de boleta"
                                        required
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="password">Contraseña</Label>
                                    <Input 
                                        id="password"
                                        type="password"
                                        placeholder="Ingresa tu contraseña"
                                        required
                                    />
                                </div>
                                <Button>Iniciar Sesión</Button>
                                <div className="mt-4 text-center text-sm">
                                    ¿No tienes cuenta? 
                                    <a href="#" className="underline underline-offset-4">
                                        Registrate
                                    </a>
                                </div>
                            </div>
                        </form>
                    </CardContent>
                </Card>              
            </div>
        </div>
    )
}