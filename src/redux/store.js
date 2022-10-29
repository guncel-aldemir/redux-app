import { configureStore } from "@reduxjs/toolkit";
import CharactersSlice from "./charactersSlice/CharactersSlice";
import QuotesSlice from "./quotesSlice/QuotesSlice";
export const store = configureStore({
    reducer:{
        characters:CharactersSlice,
        quotes:QuotesSlice,
    }
})