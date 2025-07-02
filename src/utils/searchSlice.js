import { createSlice } from "@reduxjs/toolkit"

// we can also use LRU(Least Recently Used) cache to store the search results
// LRU cache will remove the least recently used items when the cache size exceeds a certain limit
// but for now we will just use a simple object to store the search results

const searchSlice = createSlice({
    name: "search",
    initialState: {},
    reducers: {
        cacheResults: (state, action) => {
            Object.assign(state, action.payload)
        },
    },
})

export const { cacheResults } = searchSlice.actions

export default searchSlice.reducer
