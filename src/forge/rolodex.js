import { createSlice } from "@reduxjs/toolkit";

export const rolodexSlice = createSlice({
    name: 'rolodex',
    initialState:{
        list:[
            {
                id:1,
                companyName: 'Empiaur Enterprises', 
                primaryContactName: 'Anonymous',
                primaryContactEmail: 'anonymous@empiaur.ca',
                companyLogo: '',
                incorporationCountry: 'Canada',
                incorporationRegion: 'North America',
                primeStockExchange: 'TSX',
                primeTickerSymbol: 'EMP',
                dualListed: true,
                dualStockExchange: 'NYSE',
                dualTickerSymbol: 'EMPE',
                legendConditions: true,
                distributesDividends: false,
                dividendsDistribution: '',
                incorporationCategory: 'C-Corp'
            }
        ]
    },
    reducers:{
        addCompanyProfile:(state, action)=>{
            
            state.list = [...state.list, action.payload]

        }
    }
});

export const {addCompanyProfile} = rolodexSlice.actions;
export default rolodexSlice.reducer;