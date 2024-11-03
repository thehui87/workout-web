import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import toolbarReducer from './toolbar/toolbar.slice';
// import typingStatsReducer from './typingstats/typingstats.slice';
import authenticationReducer from './auth/auth.slice';
import { persistStore, persistReducer } from 'redux-persist'; // defaults to localStorage for web
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

// Persist configuration
const persistConfig = {
    key: 'root', // This key is used to store the persisted state
    storage, // Use localStorage to persist the state
    // blacklist: ['someOtherReducer'], // Do not persist this part of the state
};

const rootReducer = combineReducers({
    toolbar: toolbarReducer,
    // typingstats: typingStatsReducer,
    auth: authenticationReducer,
});

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    'persist/PERSIST',
                    'persist/REHYDRATE',
                    'persist/FLUSH',
                    'persist/PAUSE',
                    'persist/PURGE',
                    'persist/REMOVE',
                ],
            },
        }),
});

// Create the persistor
const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store, persistor };
