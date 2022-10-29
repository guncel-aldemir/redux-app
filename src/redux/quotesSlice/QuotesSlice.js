import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

export const fetchAllQuotes = createAsyncThunk("quotes/fetchAllQuotes", async()=>{
const res= await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/quotes`)

return res.data;
})

export const QuotesSlice = createSlice({
    name:"quotes",
    initialState:{
        quotesItems:[],
        status:"idle",
        error:null,
    },
    reducers:{},
    extraReducers:{
        [fetchAllQuotes.pending]:(state,action)=>{
            state.status="loading";
            
        },
        [fetchAllQuotes.fulfilled]:(state,action)=>{
            state.status = "succeded";
            state.quotesItems = action.payload;
        },
        [fetchAllQuotes.rejected]:(state,action)=>{
            state.status = "rejected";
            state.error = action.error.message;
        }
    }
})
export const selectStatus=((state)=>state.quotes.status)
export const selectError = ((state)=>state.quotes.error)
export default QuotesSlice.reducer;