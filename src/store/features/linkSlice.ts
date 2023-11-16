import {createSlice} from "@reduxjs/toolkit";

interface initialState {
    link: string
}
const initialState: initialState = {
    link: ""
}
const linkSlice = createSlice({
    initialState,
    name: "link",
    reducers: {
        addLink: (state, action) => {
            state.link = action.payload
        }
    }
})
export const {addLink} = linkSlice.actions
export default linkSlice.reducer