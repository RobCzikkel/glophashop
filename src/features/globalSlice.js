import { createSlice } from "@reduxjs/toolkit";

const globalState = createSlice({
    name: 'global',
    initialState: {
        wait: false,
        error: false,
        sent: false,
        AWSResp: ''
    },
    reducers: {
        setWait(state,action) {
            state.wait = action.payload;
        },
        setError(state,action) {
            state.error = action.payload;
        },
        setSent(state,action) {
            state.sent = action.payload;
        },
        setAWSResp(state,action) {
            state.AWSResp = action.payload
        }
    }
})

export const { setError, setSent, setWait, setAWSResp } = globalState.actions;
export default globalState.reducer; 