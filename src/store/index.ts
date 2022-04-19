import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import {persistStore,persistReducer} from "redux-persist"


const persistConfig={
    key:"root",
    storage
}

const rootReducer=combineReducers({})
const persistedReducer=persistReducer(persistConfig,rootReducer)


export const store = configureStore({
  reducer: persistedReducer,
});
export const persister =persistStore(store)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useTypesSelector: TypedUseSelectorHook<RootState> = useSelector;

