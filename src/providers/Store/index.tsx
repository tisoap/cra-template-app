import { Provider } from 'react-redux'
import { store, rootReducer } from './store'
import type { ThunkAction, Action } from '@reduxjs/toolkit'
import type { FunctionComponent } from 'react'

export const StoreProvider: FunctionComponent = ({ children }) => {
	return <Provider store={store}>{children}</Provider>
}

export { store }

export type AppDispatch = typeof store.dispatch

export type AppState = ReturnType<typeof store.getState>

export const initialState: AppState = rootReducer(undefined, { type: '@@INIT' })

export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	AppState,
	unknown,
	Action<string>
>
