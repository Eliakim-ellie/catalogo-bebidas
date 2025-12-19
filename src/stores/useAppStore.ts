import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createRecipeSlice, type RecipeSliceType } from "./recipeSlice";
import { type  FavoritesSliceType, createFavoriteSlice } from "./favoriteSlice";
import { createNotificationSlice, type NotificationSliceType } from "./notificationSlice";
import { createAISlice, type AISlice } from "./aiSlice";

export const useAppStore = create<RecipeSliceType & FavoritesSliceType & NotificationSliceType & AISlice>()(
  devtools((...a) => ({
    //...a toma una copia de los argumentos (set, get) y se puede enviar al slice
    ...createRecipeSlice(...a), //llamar al slice
    ...createFavoriteSlice(...a),
    ...createNotificationSlice(...a),
    ...createAISlice(...a),
  }))
);
