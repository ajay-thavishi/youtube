import { useState, useEffect } from "react"

import { YOUTUBE_API } from "../utils/constants"
import VideoCard from "./VideoCard"

const VideoContainer = () => {
    const [videosListData, setVideosListData] = useState({})

    useEffect(() => {
        getVideos()
    }, [])

    const getVideos = async () => {
        const data = await fetch(YOUTUBE_API)
        const json = await data.json()
        setVideosListData(json)
        // console.log(json)
    }

    return (
        <div className="my-5 grid grid-cols-12 gap-4">
            {videosListData?.items?.map((videoData, index) => (
                <VideoCard key={videoData?.id} info={videoData} />
            ))}
        </div>
    )
}

export default VideoContainer
