import { createSlice } from "@reduxjs/toolkit"

import { LIVE_CHAT_COUNT } from "../utils/constants"

const chatSlice = createSlice({
    name: "chat",
    initialState: {
        messages: [],
    },
    reducers: {
        addMessage: (state, action) => {
            if (state.messages.length >= LIVE_CHAT_COUNT) {
                state.messages.pop()
            }
            state.messages.unshift(action.payload)
        },
        clearMessages: (state) => {
            state.messages = []
        },
    },
})

export const { addMessage, clearMessages } = chatSlice.actions

export default chatSlice.reducer
