import { createBrowserRouter } from "react-router-dom";
import MainLayout from "~/layout/main";
import Bookmarks from "~/pages/bookmarks";
import Explore from "~/pages/explore";
import Home from "~/pages/home";
import Lists from "~/pages/lists";
import Messages from "~/pages/messages";
import NotFound from "~/pages/not-found";
import Notifications from "~/pages/notifications";
import Profile from "~/pages/profile";
import Verified from "~/pages/verified";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/explore',
                element: <Explore />
            },
            {
                path: '/notifications',
                element: <Notifications />
            },
            {
                path: '/messages',
                element: <Messages />
            },
            {
                path: '/lists',
                element: <Lists />
            },
            {
                path: '/bookmarks',
                element: <Bookmarks/>
            },
            {
                path: '/verified',
                element: <Verified/>
            },
            {
                path: '/profile',
                element: <Profile/>
            },
            {
                path: '*',
                element: <NotFound />
            }
        ]
    },

])


export { routes }