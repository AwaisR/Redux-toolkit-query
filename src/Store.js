import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./UserQuery";
import { getPhotos } from "./PhotosApi";
import { combineReducers } from "redux";

console.log("getPhotos", getPhotos);
const rootReducers = combineReducers({
  [userApi.reducerPath]: userApi.reducer,
  [getPhotos.reducerPath]: getPhotos.reducer,
});
export const Store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [userApi.reducerPath]: userApi.reducer,
    [getPhotos.reducerPath]: getPhotos.reducer,
    // rootReducers,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});
