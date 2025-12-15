import type z from "zod";
import {CategoriesAPIResponseSchema} from "../schemas/recipe-schema"

export type Categories = z.infer<typeof CategoriesAPIResponseSchema>

