import { createStore } from 'redux'
import { createSlice } from '@reduxjs/toolkit'

const defaultStore = { 
    counter: 0, 
    showCounter: true 
}

createSlice({
    name: 'counter',
    defaultStore,
    reducers: {
        increment(state) {
            state.counter++
        }, 
        decrement(state) {
            state.counter--
        },
        increase(state, action) {
            state.counter = state.counter + action.amount
        },
        toogleCounter(state) {
            state.showCounter = !state.showCounter
        }
    }
})


const counterReducer = (state = defaultStore, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                ...state,
                counter: state.counter + 1
            }
        case "INCREMENT_BY_AMOUNT":
            return { counter: state.counter + action.payload }

        case "DECREMENT":
            return {
                ...state,
                counter: state.counter - 1
            }

        case "TOGGLE":
            return {
                ...state,
                showCounter: !state.showCounter,
            }
        default:
            return defaultStore
    }
}

const store = createStore(counterReducer)


export default store



