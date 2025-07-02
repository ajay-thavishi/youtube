import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import ChatMessage from "./ChatMessage"
import { addMessage, clearMessages } from "../utils/chatSlice"
import { generate, generateRandomMessage } from "../utils/helper"

const LiveChat = () => {
    const dispatch = useDispatch()

    const [liveChatMessage, setLiveChatMessage] = useState("")

    const chatMessages = useSelector((store) => store.chat.messages)

    useEffect(() => {
        let timeout = setInterval(() => {
            // API Polling
            // console.log("API Polling")
            dispatch(
                addMessage({
                    name: generate(),
                    message: generateRandomMessage(20),
                })
            )
        }, 2000)

        // Cleanup function to clear the interval when the component unmounts
        return () => {
            clearInterval(timeout)
            dispatch(clearMessages())
        }
    }, [])

    return (
        <div className="mx-4 px-2 pb-2 border border-gray-500 rounded-lg ">
            <div className="h-[500px] overflow-y-scroll flex flex-col-reverse">
                {chatMessages.length > 0 &&
                    chatMessages.map((chat, index) => (
                        <ChatMessage key={index} name={chat.name} message={chat.message} />
                    ))}
            </div>
            <hr className="my-3" />
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    console.log("Form submitted", liveChatMessage)
                    dispatch(
                        addMessage({
                            name: "Thavishi Ajay Kumar",
                            message: liveChatMessage,
                        })
                    )
                    setLiveChatMessage("")
                }}
            >
                <input
                    type="text"
                    className="border-2 border-gray-100 w-80 px-4 py-1 rounded-full bg-gray-100"
                    placeholder="Chat..."
                    value={liveChatMessage}
                    onChange={(e) => setLiveChatMessage(e.target.value)}
                />
                <button className="mx-2 px-2 py-1 border border-orange bg-orange-400 text-white rounded-lg">
                    Send
                </button>
            </form>
        </div>
    )
}

export default LiveChat
