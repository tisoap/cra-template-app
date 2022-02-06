import { configureStore } from '@reduxjs/toolkit'
import counterReducer from 'src/features/counter/counterSlice'

export const store = configureStore({
	reducer: {
		counter: counterReducer
	}
})
