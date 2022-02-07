import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { counterReducer } from 'src/ducks/Counter'

export const reducers = {
	counter: counterReducer
}

export const rootReducer = combineReducers(reducers)

export const store = configureStore({
	reducer: rootReducer
})
