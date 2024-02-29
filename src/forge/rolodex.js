import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { error } from "jquery";

export const fetchRolodex = createAsyncThunk(
    'rolodex/fetchRolodex',
    async(thunkAPI)=>{
        try{
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            return response.data;
        }catch(error){
            return error;
        }      
    }
    )
export const rolodexSlice = createSlice({
    name: 'rolodex',
    initialState:{
        list:[
            {
                id:1,
                companyName: 'Wayne Enterprises', 
                primaryContactName: 'Bruce Wayne',
                primaryContactEmail: 'bruce.wayne@wayneenterprises.ca',
                companyLogo: '',
                incorporationCountry: 'Canada',
                incorporationRegion: 'North America',
                primeStockExchange: 'TSX',
                primeTickerSymbol: 'WYN',
                dualListed: true,
                dualStockExchange: 'NYSE',
                dualTickerSymbol: 'WYNE',
                legendConditions: false,
                distributesDividends: true,
                dividendsDistribution: 'Stock Reinvestment',
                incorporationCategory: 'C-Corp'
            }
        ]
    },
    reducers:{
        addCompanyProfile:(state, action)=>{
            
            state.list = [...state.list, action.payload]

        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchRolodex.pending, (state)=>{
            console.log('pending request');
        })
        .addCase(fetchRolodex.fulfilled, (state, action)=>{
            console.log('fulfilled request');
            console.log(action.payload);
        })
        .addCase(fetchRolodex.rejected, (state)=>{
            console.log('rejected');
        })
    }
});

export const {addCompanyProfile} = rolodexSlice.actions;
export default rolodexSlice.reducer;