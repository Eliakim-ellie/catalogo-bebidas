import { useMemo } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Header() {

    const { pathname } = useLocation()//detectar la ruta en la cual está el usuario

    const isHome = useMemo(() => pathname === "/", [pathname])


    return (
        <header className="bg-slate-800">
            <div className="mx-auto container px-6 py-16">
                <div className="flex justify-between items-center">
                    <div className="">
                        <img src="/logo.svg" alt="Logotipo" className="w-32" />
                    </div>
                    <nav className="flex gap-4">
                        <NavLink  to="/" className={({ isActive }) => isActive ? "text-orange-500 uppercase font-bold" : "text-white uppercase font-bold"}>Inicio</NavLink>
                        <NavLink to="/favoritos" className={({ isActive }) => isActive ? "text-orange-500 uppercase font-bold" : "text-white uppercase font-bold"}>Favoritos</NavLink>
                    </nav>
                </div>

                {isHome && (
                    <form action="" className="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow  space-y-6">
                        <div className="space-y-4">
                            <label htmlFor="ingredient" className="block text-white uppercase font-extrabold text-lg">Nombre o Ingrediente</label>
                            <input type="text" name="ingredient" id="ingredient" placeholder="Nombre o Ingrediente. Ej. vodka, Tequila, Café" className="p-3 w-full rounded-lg focus:outline-none bg-white" />
                        
                            <label htmlFor="category" className="block text-white uppercase font-extrabold text-lg">Categoría</label>
                            <select name="category" id="category" className="p-3 w-full rounded-lg focus:outline-none bg-white">
                                <option value="">-- Seleccionar --</option>
                            </select>
                        </div>
                        <input type="submit" value="Buscar Recetas" className="cursor-pointer bg-orange-800 hover:bg-orange-900 rounded-lg text-white font-extrabold w-full p-2 uppercase" />
                    </form>
                )}
            </div>
        </header >
    )
}
