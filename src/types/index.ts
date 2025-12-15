import type z from "zod";
import {CategoriesAPIResponseSchema, DrinksAPIResponseSchema, SearchFilterSchema} from "../schemas/recipe-schema"

export type Categories = z.infer<typeof CategoriesAPIResponseSchema>

export type SearchFilter = z.infer<typeof SearchFilterSchema>;

export type Drinks = z.infer<typeof DrinksAPIResponseSchema>;