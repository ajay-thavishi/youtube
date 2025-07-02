import { useSelector } from "react-redux"

import MenuItem from "./MenuItem"

const Sidebar = () => {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen)

    // console.log("Sidebar isMenuOpen", isMenuOpen)

    // Early Return Pattern
    if (!isMenuOpen) return null

    return (
        <div className="col-span-2 shadow-lg">
            <ul>
                <MenuItem item="Home" navigateTo="/" />
                <MenuItem item="Shorts" />
                <MenuItem item="Subscriptions" />
            </ul>
            <h3 className="pt-3 pl-2 font-bold">You</h3>
            <ul>
                <MenuItem item="History" />
                <MenuItem item="Playlists" />
                <MenuItem item="Your videos" />
                <MenuItem item="Watch later" />
                <MenuItem item="Liked videos" />
            </ul>
            <h3 className="pt-3 pl-2 font-bold">Explore</h3>
            <ul>
                <MenuItem item="Trending" />
                <MenuItem item="Shopping" />
                <MenuItem item="Music" />
                <MenuItem item="Movies & TV" />
            </ul>
        </div>
    )
}

export default Sidebar
