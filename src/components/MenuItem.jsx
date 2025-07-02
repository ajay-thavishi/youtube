import { Link } from "react-router-dom"

const MenuItem = ({ item, navigateTo }) => {
    return (
        <li className="p-2">
            <Link to={navigateTo}>{item}</Link>
        </li>
    )
}

export default MenuItem
