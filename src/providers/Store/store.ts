import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from 'src/ducks/Counter'

export const store = configureStore({
	reducer: {
		counter: counterReducer
	}
})
