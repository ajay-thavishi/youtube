import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { toggleMenu } from "../utils/appSlice"
import { YOUTUBE_SEARCH_API } from "../utils/constants"

import { cacheResults } from "../utils/searchSlice"

const Header = () => {
    const dispatch = useDispatch()

    const [searchQuery, setSearchQuery] = useState("")
    const [autoSuggestions, setAutoSuggestions] = useState([])
    const [showSuggestions, setShowSuggestions] = useState(false)

    const searchCache = useSelector((store) => store.search)
    /**
     *
     * searchCache = {
     *  "iphone": ['iphone 11', 'iphone 12', 'iphone 13' ]
     * }
     * searchQuery = "iphone"
     *
     */

    useEffect(() => {
        // console.log("searchQuery", searchQuery)

        // make an Api call after every key press
        // but if the difference between 2 api calls is <200ms then decline the api call

        // debouncing
        const timeoutID = setTimeout(() => {
            if (searchCache[searchQuery]) {
                setAutoSuggestions(searchCache[searchQuery])
            } else {
                getAutoSuggestions()
            }
        }, 200)
        // console.log(timeoutID)

        // return will be called when the component unmounts or when searchQuery changes
        return () => {
            clearTimeout(timeoutID)
        }
    }, [searchQuery])

    /**
     * key - j
     * - state variable searchQuery will be set to "j"
     * - render the component
     * - useEffect will be called
     * - start timer => makes an API call after 200ms
     *
     * key - ja
     * - state variable searchQuery will be set to "ja"
     * - destroy the component(useEffect return method will be called)
     * - re render the componnet
     * - useEffect will be called
     * - start timer => makes an API call after 200ms
     *
     * - setTimeout(200) => makes an API call after 200ms
     *
     */

    const getAutoSuggestions = async () => {
        const data = await fetch(YOUTUBE_SEARCH_API(searchQuery))
        const json = await data.json()
        setAutoSuggestions(json[1])

        // update the cache
        dispatch(cacheResults({ [searchQuery]: json[1] }))
        // console.log("Auto Suggestions", json[1])
    }

    const toggleMenuHandler = () => {
        dispatch(toggleMenu())
    }

    return (
        <div className="px-5 py-3 shadow-lg grid grid-cols-12">
            <div className="flex gap-2 col-span-3">
                <img src="assets/menu.webp" alt="menu" className="h-8 cursor-pointer" onClick={toggleMenuHandler} />
                <Link to="/">
                    <img src="assets/youtube-logo.jpg" alt="youtube-logo" className="h-8" />
                </Link>
            </div>
            <div className="col-span-8 justfy-self-center relative">
                <input
                    type="search"
                    className="border border-gray-400 w-1/2 py-2 px-5 rounded-l-full"
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setShowSuggestions(true)}
                    onBlur={() => setShowSuggestions(false)}
                />
                <button className="border border-gray-400 bg-gray-400 px-4 py-2 text-white rounded-r-full">🔍</button>
                {showSuggestions && autoSuggestions.length > 0 && (
                    <ul className="absolute bg-white w-1/2 p-3 rounded-xl border border-gray-100">
                        {autoSuggestions.map((suggestion, index) => (
                            <li key={index} className="py-1 hover:bg-gray-300">
                                <span className="mr-4">🔍</span>
                                {suggestion}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <div className="col-span-1 justify-self-end">
                <img src="assets/user-icon.png" alt="user-icon" className="h-8" />
            </div>
        </div>
    )
}

export default Header
