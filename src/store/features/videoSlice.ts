import {createSlice} from "@reduxjs/toolkit";

interface initialState {
    video: any
}
const initialState: initialState = {
    video: null
}
const videoSlice = createSlice({
    initialState,
    name: "video",
    reducers: {
        addVideo: (state, action) => {
            state.video = action.payload
        }
    }
})
export const {addVideo} = videoSlice.actions
export default videoSlice.reducer