import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './../reducers/user';
import contractsReducer from './../reducers/contract';

export const store = configureStore({
    reducer: {
        users: usersReducer,
        contracts: contractsReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
