import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { counterReducer } from 'src/ducks/Counter'

export const reducers = {
	counter: counterReducer
}

export const rootReducer = combineReducers(reducers)

export const persistConfig = {
	key: 'root',
	storage
}

export const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: rootReducer
})

// https://redux-toolkit.js.org/usage/usage-guide#use-with-redux-persist
export const persistedStore = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
			}
		})
})

export const persistor = persistStore(persistedStore)
