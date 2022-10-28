import { configureStore } from "@reduxjs/toolkit";
import CharactersSlice from "./charactersSlice/CharactersSlice";
export const store = configureStore({
    reducer:{
        characters:CharactersSlice,
    }
})