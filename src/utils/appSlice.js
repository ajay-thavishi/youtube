import { createSlice } from "@reduxjs/toolkit"

const appSlice = createSlice({
    name: "app",
    initialState: {
        isMenuOpen: true,
    },
    reducers: {
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen
        },
        openMenu: (state) => {
            state.isMenuOpen = true
        },
        closeMenu: (state) => {
            state.isMenuOpen = false
        },
    },
})

// console.log("appSlice", appSlice)

export default appSlice.reducer

export const { toggleMenu, openMenu, closeMenu } = appSlice.actions
