import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
const chart_set = 12;
export const fetchCharacters = createAsyncThunk("characters/fetchCharacters", async (page) =>{
    const res  = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/characters?limit=${chart_set}&offset=${chart_set*page}`)
    return res.data;
    
})

export const CharactersSlice= createSlice({
    name:"characters",
    initialState:{
        charactersItems:[],
        status:"idle",
        error:null,
        page:0,
        hasNextPage:true,
    },
    reducers:{},
    extraReducers:{
        [fetchCharacters.pending]:(state,action)=>{
            state.status="loading";
            
         },
        [fetchCharacters.fulfilled]:(state,action)=>{
            state.status="succeded";
            state.charactersItems=[...state.charactersItems,...action.payload];
            state.page += 1;

            if(action.payload.length < 12){
                state.hasNextPage = false;
            }

          
        },
        [fetchCharacters.rejected]:(state,action)=>{
            state.status="failed";
            state.error=action.error.message;
         }
    }
    
});
export const selectCharacters=((state)=>state.characters.charactersItems);
export const selectStatus=((state)=>state.characters.status)
export const selectPage=((state)=>state.characters.page)
export const selectError=((state)=>state.characters.error)
export default CharactersSlice.reducer;
