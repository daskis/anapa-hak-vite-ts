import {configureStore} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {dangerApi} from "@/store/services/dangerApi.ts";
import {uploadApi} from "@/store/services/uploadApi.ts";
import linkSlice from "@/store/features/linkSlice.ts";
import videoSlice from "@/store/features/videoSlice.ts";

const store = configureStore({
    reducer: {
        link: linkSlice,
        video: videoSlice,
        [dangerApi.reducerPath]: dangerApi.reducer,
        [uploadApi.reducerPath]: uploadApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(dangerApi.middleware, uploadApi.middleware),
})
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export default store


