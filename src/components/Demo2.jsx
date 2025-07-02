import { useState, useRef } from "react"

const Demo2 = () => {
    const [y, setY] = useState(40)
    let x = 10
    const z = useRef(50)
    // console.log("useRef", z)

    console.log("Rendering...")

    const handleIncrement = () => {
        x = x + 1
        console.log("let: ", x)
    }

    const handleStateIncrement = () => {
        setY(y + 1)
        console.log("state: ", y + 1)
    }

    const handleRefIncrement = () => {
        z.current = z.current + 1
        console.log("ref: ", z.current)
    }

    return (
        <div className="w-96 h-96 border border-gray-700 p-2">
            <div>
                <span className="text-xl font-bold">let - {x}</span>
                <button className="mx-2 px-2 border border-black bg-green-600 text-white" onClick={handleIncrement}>
                    Increment
                </button>
            </div>

            <div className="mt-12">
                <span className="text-xl font-bold">state variable - {y}</span>
                <button
                    className="mx-2 px-2 border border-black bg-green-600 text-white"
                    onClick={handleStateIncrement}
                >
                    Increment
                </button>
            </div>

            <div className="mt-12">
                <span className="text-xl font-bold">useRef variable - {z.current}</span>
                <button className="mx-2 px-2 border border-black bg-green-600 text-white" onClick={handleRefIncrement}>
                    Increment
                </button>
            </div>
        </div>
    )
}

export default Demo2
