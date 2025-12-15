import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createRecipeSlice, type RecipeSliceType } from "./recipeSlice";

export const useAppStore = create<RecipeSliceType>()(
  devtools((...a) => ({
    //...a toma una copia de los argumentos (set, get) y se puede enviar al slice
    ...createRecipeSlice(...a), //llamar al slice
  }))
);
