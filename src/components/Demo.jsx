import { useState, useMemo } from "react"
import { findNthPrime } from "../utils/helper"

const Demo = () => {
    const [text, setText] = useState(0)
    const [isDarkMode, setIsDarkMode] = useState(true)

    console.log("component rendered")

    const prime = useMemo(() => {
        console.log("Calculating prime number ", text)
        return findNthPrime(text)
    }, [text])

    return (
        <div className={"w-96 h-96 border border-black mx-4 p-3 " + (isDarkMode && "bg-gray-700 text-white")}>
            <h3>Demo</h3>
            <input
                type="number"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className={"border border-black px-2 " + (isDarkMode && "text-black")}
            />
            <h2 className="my-2 font-bold text-lg">Nth Prime: {prime}</h2>

            <button className="p-2 bg-red-700" onClick={() => setIsDarkMode(!isDarkMode)}>
                Toggle
            </button>
        </div>
    )
}

export default Demo
