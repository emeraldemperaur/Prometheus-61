import { createSlice } from "@reduxjs/toolkit";

export const oracleSlice = createSlice({
    name: 'oracle',
    initialState:{},
    reducers:{
        addInsightModel:(state, action)=>{
            
            state.list = [...state.list, action.payload]

        }
    }
});

export const {addInsightModel} = oracleSlice.actions;
export default oracleSlice.reducer;