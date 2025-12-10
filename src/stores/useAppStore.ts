import {create} from "zustand";
import { createRecipeSlice, type RecipeSliceType } from "./recipeSlice";

export const useAppStore = create<RecipeSliceType>((...a) => ({//...a toma una copia de los argumentos (set, get) y se puede enviar al slice
    ...createRecipeSlice(...a) //llamar al slice
}))