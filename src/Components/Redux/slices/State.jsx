import {createSlice} from '@reduxjs/toolkit'

export const booksSlice=createSlice({
        name:"books",
    initialState:{},
    reducers:{
        setData:(state,data)=> {
            console.log(state,data)
            return{...data.payload}},
        unsetData:(state)=> {return{}},
    }
})
export const {setData,unsetData}= booksSlice.actions;
export default booksSlice.reducer;