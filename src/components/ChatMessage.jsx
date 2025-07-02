const ChatMessage = ({ name, message }) => {
    return (
        <div className="flex items-center pt-2 gap-4 hover:bg-gray-300 ">
            <img src="assets/user-icon.png" alt="thumbnail" className="h-8 w-8 rounded-full" />
            <div>
                <span className="font-medium text-gray-500">{name} </span>
                <span>{message}</span>
            </div>
        </div>
    )
}

export default ChatMessage
