import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action) => {
        if(!action.payload){
            state.value += 1
        }
        else{
            state.value += action.payload
        }
    },
    decrement: (state, action) => {
        if(!action.payload){
            state.value -= 1
        }
        else{
            state.value -= action.payload
        }
    },
  },
})

export const { increment, decrement} = counterSlice.actions

export default counterSlice.reducer