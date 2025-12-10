import type { StateCreator } from "zustand"

type Category = {}

export type RecipeSliceType = {
    categories: Category[]
}

export const createRecipeSlice : StateCreator<RecipeSliceType> = () => ({
    categories: [],
})