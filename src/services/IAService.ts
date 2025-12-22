import {streamText} from "ai"
import { openrouter } from "../lib/ai"

export default {
    async generateRecipe (prompt: string) {
        const result = streamText({
            model: openrouter("meta-llama/llama-3.1-405b-instruct:free"),
            prompt: prompt,
            system: "Eres un bartender que tiene 50 años de experiencia", //instrucciones de contexto
            // temperature: 0,
        })
        return result.textStream
    }
}