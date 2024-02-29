import { createSlice } from "@reduxjs/toolkit";

export const plannerSlice = createSlice({
    name: 'planner',
    initialState:{
        list:[
            {
                id:1,
                companyName: 'Wayne Enterprises',
                companyID: 1, 
                companyRegion: 'North America',
                companyStockExchange: 'TSX',
                companyTickerSymbol: 'WYN',
                isCorpDualListed: true,
                companyDualStockExchange: 'NYSE',
                companyDualTickerSymbol: 'WYNE',
                productName: 'Share Purchase and Holdings',
                productPlanName: 'Employee Share Purchase Plan',
                enquiryName: 'Abode',
                enquiryID: 1,
                enquiryPlatformName: 'UBS Group',
                autoShare:false,
                status: 1,
                buildRank: 0,
                correspondenceName:'Bruce Wayne',
                correspondenceEmail:'bruce.wayne@wayneenterprises.ca',
                correspondenceTime:'February 23, 2024 at 06:39 PM MST'
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