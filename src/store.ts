import { configureStore } from '@reduxjs/toolkit'
import { applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import weatherReaderReducer from "./features/weatherReader/weatherReaderSlice";

const composedEnhancer = applyMiddleware(thunkMiddleware);

const store = configureStore({
  reducer: {
    weatherReader: weatherReaderReducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export { store };