import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:"products",
    initialState:[],
    reducers:{
        addProducts:(state,action)=>{
            state.push(action.payload)
        },
        removeProducts:(state,action)=>{
            return state.filter((product)=> product.id !== action.payload);
        },
    }

});

export const { addProducts , removeProducts} = cartSlice.actions;
export default cartSlice.reducer;