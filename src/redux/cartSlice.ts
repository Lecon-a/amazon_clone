// DUCKS pattern
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface basketState {
    basket: Array<basketState>;
    user: null;
};

const initialState: basketState = {
    basket: [],
    user: null,
};

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<basketState>) {
            
            const itemExists = state.basket.findIndex(item => item.id === action.payload.id);

            if (itemExists >= 0) {
                state.basket[itemExists]['quantity']++;
            } else {
                return {
                    basket: [...state.basket, action.payload]
                }
            }
        },

        removeFromCart(state, action: PayloadAction<basketState>) {
            return {
                ...state,
                basket: state.basket.filter(item => item.id !== action.payload)
            }
        },

        increaseQuantity(state, action: PayloadAction<basketState>) {

            const itemExists = state.basket.findIndex(item => item.id === action.payload);

            if (itemExists >= 0 && state.basket[itemExists]['quantity'] !== 10) { 
                state.basket[itemExists]['quantity']++; 
            }
        },

        decreaseQuantity(state, action: PayloadAction<basketState>) {

            const itemExists = state.basket.findIndex(item => item.id === action.payload);
            
            if (itemExists >= 0 && state.basket[itemExists]['quantity'] !== 0) { 
                state.basket[itemExists]['quantity']--; 
                if (state.basket[itemExists]['quantity'] === 0) {
                    state.basket.splice(itemExists, 1);
                }
            }
        },

        setUser(state, action: PayloadAction<basketState>) {
            return {
                ...state,
                user: action.payload
            } 
        },
        
    },
});

export const {
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    setUser,
} = basketSlice.actions;

export default basketSlice.reducer;



