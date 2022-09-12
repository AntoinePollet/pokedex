import type { Abilities, Moves, Types, Species } from "@/types";

export interface Pokemon {
    id: number
    name: string
    height: number
    weight: number
    abilities: Abilities[]
    moves: Moves[]
    species: Species
    types: Types[]
}
