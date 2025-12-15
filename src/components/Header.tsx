import { useEffect, useMemo, useState, type ChangeEvent, type FormEvent } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useAppStore } from "../stores/useAppStore";

export default function Header() {
    const [searchFilters, setSearchFilters] = useState({
        ingredient: "",
        category: "",
    });
    
    const { pathname } = useLocation()//detectar la ruta en la cual está el usuario
    const isHome = useMemo(() => pathname === "/", [pathname])
    const categories = useAppStore((state) => state.categories);
    const fetchCategories = useAppStore((state) => state.fetchCategories);
    const searchRecipes = useAppStore((state) => state.searchRecipes);

    useEffect(() => {
        fetchCategories();
    }, [])

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setSearchFilters({
            ...searchFilters,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        //validar
        if(Object.values(searchFilters).includes("")){
            console.log("Todos los campos son obligatorios");
            return;
        }

        //consultar las recetas
        searchRecipes(searchFilters);
    }

    return (
        <header className={isHome ? `bg-[url("/bg.jpg")] bg-center bg-cover` : `bg-slate-800`}>
            <div className="mx-auto container px-6 py-16">
                <div className="flex justify-between items-center">
                    <div className="">
                        <img src="/logo.svg" alt="Logotipo" className="w-32" />
                    </div>
                    <nav className="flex gap-4">
                        <NavLink to="/" className={({ isActive }) => isActive ? "text-orange-500 uppercase font-bold" : "text-white uppercase font-bold"}>Inicio</NavLink>
                        <NavLink to="/favoritos" className={({ isActive }) => isActive ? "text-orange-500 uppercase font-bold" : "text-white uppercase font-bold"}>Favoritos</NavLink>
                    </nav>
                </div>

                {isHome && (
                    <form onSubmit={handleSubmit} className="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow  space-y-6">
                        <div className="space-y-4">
                            <label htmlFor="ingredient" className="block text-white uppercase font-extrabold text-lg">Nombre o Ingrediente</label>
                            <input type="text" name="ingredient" value={searchFilters.ingredient} onChange={handleChange} id="ingredient" placeholder="Nombre o Ingrediente. Ej. vodka, Tequila, Café" className="p-3 w-full rounded-lg focus:outline-none bg-white" />

                            <label htmlFor="category" className="block text-white uppercase font-extrabold text-lg">Categoría</label>
                            <select name="category" id="category" value={searchFilters.category} onChange={handleChange} className="p-3 w-full rounded-lg focus:outline-none bg-white">
                                <option value="">-- Seleccionar --</option>
                                {categories.drinks.map(category => (
                                    <option key={category.strCategory} value={category.strCategory}> {category.strCategory} </option>
                                ))}
                            </select>
                        </div>
                        <input type="submit" value="Buscar Recetas" className="cursor-pointer bg-orange-800 hover:bg-orange-900 rounded-lg text-white font-extrabold w-full p-2 uppercase" />
                    </form>
                )}
            </div>
        </header >
    )
}
