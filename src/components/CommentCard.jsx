const CommentCard = ({ comment }) => {
    const { snippet, replies } = comment
    const { topLevelComment } = snippet
    const { snippet: commentSnippet } = topLevelComment
    const { authorDisplayName, authorProfileImageUrl, textDisplay, publishedAt } = commentSnippet

    // console.log("comment", comment)

    return (
        <>
            <div className="flex my-5 gap-5">
                <img src={authorProfileImageUrl} alt="profile" className="rounded-full w-10 h-10" />
                <div>
                    <span className="font-bold">{authorDisplayName}</span> <span>{publishedAt}</span>
                    <p dangerouslySetInnerHTML={{ __html: textDisplay }}></p>
                </div>
            </div>
            <div>
                {replies &&
                    replies?.comments?.map((replyComment, index) => (
                        <ReplyComment key={index} comment={replyComment} />
                    ))}
            </div>
        </>
    )
}

export default CommentCard

const ReplyComment = ({ comment }) => {
    const { snippet, publishedAt } = comment
    // console.log("reply comment", comment)

    const { authorProfileImageUrl, authorDisplayName, textDisplay } = snippet

    return (
        <div className="flex my-5 gap-5 ml-10 border-l-2 pl-2 border-l-gray-600">
            <img src={authorProfileImageUrl} alt="profile" className="rounded-full w-10 h-10" />
            <div>
                <span className="font-bold">{authorDisplayName}</span> <span>{publishedAt}</span>
                <p dangerouslySetInnerHTML={{ __html: textDisplay }}></p>
            </div>
        </div>
    )
}
