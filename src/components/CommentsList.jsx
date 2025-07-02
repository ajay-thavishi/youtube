import { useState, useEffect } from "react"

import CommentCard from "./CommentCard"
import { YOUTUBE_COMMENTS_API } from "../utils/constants"

const CommentsList = ({ videoId }) => {
    const [commentsList, setCommentsList] = useState([])

    useEffect(() => {
        fetchComments()
    }, [])

    const fetchComments = async () => {
        const data = await fetch(YOUTUBE_COMMENTS_API(videoId))
        const json = await data.json()
        console.log("comments", json)

        setCommentsList(json?.items)
    }

    return (
        <div className="my-10">
            <h3 className="font-bold text-lg">{commentsList?.length} Comments</h3>
            {commentsList?.map((comment, index) => (
                <CommentCard key={index} comment={comment} />
            ))}
        </div>
    )
}

export default CommentsList
