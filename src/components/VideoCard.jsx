import { Link } from "react-router-dom"

const VideoCard = (props) => {
    // console.log("props", props)

    const {
        info: {
            snippet: {
                title,
                channelTitle,
                publishedAt,
                thumbnails: {
                    standard: { url },
                },
            },
            statistics: { viewCount },
        },
    } = props

    return (
        <Link to={"watch?v=" + props.info.id} className="col-span-4 shadow-lg rounded-xl">
            <div>
                <img src={url} alt="thumbnail" className="rounded-xl" />
                <div className="p-2">
                    <h3 className="font-bold">{title}</h3>
                    <p>{channelTitle}</p>
                    <span>{viewCount} views ·</span>
                    <span>{publishedAt}</span>
                </div>
            </div>
        </Link>
    )
}

export default VideoCard
