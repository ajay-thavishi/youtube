import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useParams, useSearchParams } from "react-router-dom"

import { closeMenu } from "../utils/appSlice"

import CommentsList from "./CommentsList"
import LiveChat from "./LiveChat"

const WatchVideo = () => {
    const dispatch = useDispatch("")

    // const videoId = useParams()
    // here videoId is an object which contains the video id from the URL
    // console.log(videoId)

    // searchParams is used to get the query parameters from the URL
    const [searchParams] = useSearchParams()
    const videoId = searchParams.get("v")
    // here searchParams is an object which contains the query parameters from the URL;
    // console.log(searchParams)

    // here key is v and value is the video id
    // console.log(searchParams.get("v"))

    useEffect(() => {
        dispatch(closeMenu())
    }, [])

    return (
        <>
            <div className="col-span-8 rounded-xl">
                <iframe
                    width="1000"
                    height="500"
                    className="rounded-xl"
                    src={"https://www.youtube.com/embed/" + videoId}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
                <CommentsList videoId={videoId} />
            </div>
            <div className="col-span-4">
                <LiveChat />
            </div>
        </>
    )
}

export default WatchVideo
