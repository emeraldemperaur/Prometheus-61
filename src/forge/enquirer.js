import { createSlice } from "@reduxjs/toolkit";

export const enquirerSlice = createSlice({
    name: 'enquirer',
    initialState:{
        list:[
            {
                id:1,
                modelName: 'Abode', 
                productName: 'Share Purchase and Holdings',
                productPlanName: 'Employee Share Purchase Plan',
                regionName: 'Global - All Regions',
                exchangeMarket: 'Global - All Markets',
                platformName: 'Global - All Platforms',
                jsonQueryDefinition: ''
            }
        ]
    },
    reducers:{
        addQueryModel:(state, action)=>{
            
            state.list = [...state.list, action.payload]

        }
    }
});

export const {addQueryModel} = enquirerSlice.actions;
export default enquirerSlice.reducer;