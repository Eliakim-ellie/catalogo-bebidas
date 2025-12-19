import type { StateCreator } from "zustand";
import IAService from "../services/IAService";

export type AISlice = {
  recipe: string;
  isGenerating: boolean;
  generateRecipe: (prompt: string) => Promise<void>;
};

export const createAISlice: StateCreator<AISlice, [], [], AISlice> = (set) => ({
  recipe: "",
  isGenerating: false,

  generateRecipe: async (prompt) => {

    //limpiar la respuesta y valida si esta generando
    set({recipe: "", isGenerating: true});

    const data = await IAService.generateRecipe(prompt);

    //iterar en la respuesta del prompt
    for await (const textPart of data) {
      set((state) => ({
        recipe: state.recipe + textPart,
      }));
    }

    //valida que haya terminado de generar una respuesta
    set({isGenerating: false})
  },
});
