import { createSlice } from "@reduxjs/toolkit";


const value = {
    items:[],
    initial : 0,
    totalPrice : 0,
    count : {},
    
}

const counter = createSlice({
    name : "counter",
    initialState : value,
    reducers : {
        increaseCounter : (state)=>{
            state.initial = state.initial + 1 ;
        },
        addItem : (state, action) =>{
            
            const isfound = state.items.find((item) => item.id === action.payload.id);
            if (isfound) {
                state.count[action.payload.id] = state.count[action.payload.id] + state.items.filter((item) => item.id === action.payload.id).length;
            } else {
                
                state.count[action.payload.id] = 1;
                state.items.push(action.payload);
            }
                
        },
        decreaseCounter : (state)=>{
            state.initial = state.initial - 1 ;
        },
        deleteItem : (state, action)=>{
            
            const index = state.items.findIndex((element)=>{
                if(element.id === action.payload.id){
                    return element;
                }
            }) ;
            
            console.log(index);
            state.totalPrice = state.totalPrice - (action.payload.price * state.count[action.payload.id]);
            state.initial = state.initial - state.count[action.payload.id];
            state.count[action.payload.id] = 0;
            state.items.splice(index,1);
        },
        sumPrice : (state, action)=>{
            state.totalPrice = state.totalPrice + action.payload.price ;

        },
        subPrice : (state, action)=>{
            state.totalPrice = state.totalPrice - action.payload.price ;
        },
        decraceCountItem : (state, action) =>{
            state.count[action.payload.id] = state.count[action.payload.id] - 1;
        },
        incraseCountItem : (state, action) =>{
            state.count[action.payload.id] = state.count[action.payload.id] + 1;
        },
    }
})
export const {increaseCounter, addItem, decreaseCounter, deleteItem, sumPrice, subPrice, decraceCountItem, incraseCountItem} = counter.actions;
export default counter.reducer; 