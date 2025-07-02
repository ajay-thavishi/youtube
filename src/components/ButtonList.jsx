import Button from "./Button"

const ButtonList = () => {
    const listOfButtons = [
        "All",
        "Music",
        "Podcasts",
        "Telugu cinema",
        "Mixes",
        "Live",
        "Gaming",
        "Recently uploaded",
        "Shorts",
        "Movies",
        "News",
        "Learning",
        "Fashion & beauty",
    ]

    return (
        <div>
            {listOfButtons.map((name) => (
                <Button key={name}>{name}</Button>
            ))}
        </div>
    )
}

export default ButtonList
