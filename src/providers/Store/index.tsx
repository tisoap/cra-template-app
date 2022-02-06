import { Provider } from 'react-redux'
import { store } from './store'
import type { ThunkAction, Action } from '@reduxjs/toolkit'
import type { FunctionComponent } from 'react'

export const StoreProvider: FunctionComponent = ({ children }) => {
	return <Provider store={store}>{children}</Provider>
}

export { store }

export type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState>

export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>
