import { Provider } from "react-redux"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Header from "./components/Header"
import Body from "./components/Body"
import MainContainer from "./components/MainContainer"
import WatchVideo from "./components/WatchVideo"
import Demo from "./components/Demo"
import Demo2 from "./components/Demo2"

import appStore from "./utils/appStore"

// createBrowserRouter is used to create a router for the application
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Body />,
        children: [
            {
                path: "/",
                element: <MainContainer />,
            },
            {
                path: "/watch",
                element: <WatchVideo />,
            },
            {
                path: "/demo",
                element: <Demo />,
            },
            {
                path: "/demo2",
                element: <Demo2 />,
            },
        ],
    },
])

function App() {
    {
        /**
         * Header Component
         * Body Component
         *     Sidebar Component
         *       MenuItems Component
         *     MainContainer Component
         *       ButtonsList Component
         *       VideoContainer Component
         *           VideoCard Component
         *     watchVideo Component
         *     Suggestion Component
         *     Comments Component
         */
    }
    // This is the main App component that renders the Header and Body components
    return (
        <Provider store={appStore}>
            <div className="m-2">
                {/* <Body /> */}
                {/* RouterProvider is used to render the application with routing */}
                <RouterProvider router={appRouter} />
            </div>
        </Provider>
    )
}

export default App
