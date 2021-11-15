import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import logger from 'redux-logger'
import teamsReducer from "features/leaderboard/fetchTeamsSlice"
import clickReducer from "features/click/clickSlice"

export const store = configureStore({
  reducer: {
    teams: teamsReducer,
    click: clickReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
