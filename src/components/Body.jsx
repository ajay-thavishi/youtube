import { Outlet } from "react-router-dom"

import Header from "./Header"
import Sidebar from "./Sidebar"
// import MainContainer from "./MainContainer"

const Body = () => {
    return (
        <>
            <Header />
            <div className="grid grid-cols-12 my-5">
                <Sidebar />
                {/* <MainContainer /> */}
                {/* The Outlet component is used to render the child routes defined in the router configuration */}
                {/* My requirement is to update only right side of body by making sidebar common for all components */}
                <Outlet />
            </div>
        </>
    )
}

export default Body
