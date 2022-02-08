import { createStore, combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
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

export const persistedStore = createStore(persistedReducer)
export const persistor = persistStore(persistedStore)
