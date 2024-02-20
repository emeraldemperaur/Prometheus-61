import { createSlice } from "@reduxjs/toolkit";

export const plannerSlice = createSlice({
    name: 'planner',
    initialState:{
        list:[
            {
                id:1,
                companyName: 'Empiaur Enterprises',
                companyID: 1, 
                companyRegion: 'North America',
                companyStockExchange: 'TSX',
                companyTickerSymbol: 'EMP',
                isCorpDualListed: true,
                companyDualStockExchange: 'NYSE',
                companyDualTickerSymbol: 'EMPE',
                productName: 'Share Purchase and Holdings',
                productPlanName: 'Employee Share Purchase Plan',
                enquiryName: 'Abode',
                enquiryID: 1,
                status: 1,
                buildRank: 0,
                correspondenceName:'James Bond',
                correspondenceTime:'February 23, 2024 - 06:39PM MDT'
            }
        ]
    },
    reducers:{
        addPlanQuestionnaire:(state, action)=>{
            
            state.list = [...state.list, action.payload]

        }
    }
});

export const {addPlanQuestionnaire} = plannerSlice.actions;
export default plannerSlice.reducer;