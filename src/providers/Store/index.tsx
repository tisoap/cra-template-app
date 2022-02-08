import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistedStore, rootReducer, persistor } from './store'
import type { store } from './store'
import type { ThunkAction, Action } from '@reduxjs/toolkit'
import type { FunctionComponent } from 'react'

export const StoreProvider: FunctionComponent = ({ children }) => {
	return (
		<Provider store={persistedStore}>
			<PersistGate loading={null} persistor={persistor}>
				{children}
			</PersistGate>
		</Provider>
	)
}

export type AppDispatch = typeof store.dispatch

export type AppState = ReturnType<typeof store.getState>

export const initialState: AppState = rootReducer(undefined, {
	type: '@@INIT'
})

export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	AppState,
	unknown,
	Action<string>
>
