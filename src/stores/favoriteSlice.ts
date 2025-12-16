import type {StateCreator} from "zustand";
import type { Recipe } from "../types";

export type FavoritesSliceType = {
    favorites: Recipe[],
    handleClickFavorite: (recipe: Recipe) => void;
    favoriteExist: (id: Recipe["idDrink"]) => boolean;
}

export const createFavoriteSlice: StateCreator<FavoritesSliceType> = (set, get) =>({
    favorites: [],
    handleClickFavorite: (recipe) => {
        // if(get().favorites.some(favorite => favorite.idDrink === recipe.idDrink)){
        if(get().favoriteExist(recipe.idDrink)){ //para evitar duplicación del codigo
            set((state)=>({favorites: state.favorites.filter(favorite => favorite.idDrink !== recipe.idDrink)}))
        }else {
            // set({favorites: [...get().favorites, recipe]})//esta es una forma, sin usar state
            set((state) => ({favorites: [...state.favorites, recipe]})) //otra forma, utilizando el state
        }
    },
    favoriteExist: (id) => {
        return get().favorites.some(favorite => favorite.idDrink === id);
    }
})
