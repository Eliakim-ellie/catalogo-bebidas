import type { StateCreator } from "zustand";
import IAService from "../services/IAService";

export type AISlice = {
  recipe: string;
  generateRecipe: (prompt: string) => Promise<void>;
};

export const createAISlice: StateCreator<AISlice, [], [], AISlice> = (set) => ({
  recipe: "",
  generateRecipe: async (prompt) => {

    //limpiar la respuesta
    set({recipe: ""});

    const data = await IAService.generateRecipe(prompt);

    //iterar en la respuesta del prompt
    for await (const textPart of data) {
      set((state) => ({
        recipe: state.recipe + textPart,
      }));
    }
  },
});
