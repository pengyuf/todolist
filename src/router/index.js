import Index from "@/pages/Index";


import Task from "@/pages/Task";
import Calendar from "@/pages/Calendar";
import Quadrant from "@/pages/Quadrant";
import Focus from "@/pages/Focus";
import ClockIn from "@/pages/ClockIn";
import Today from "@/pages/Task/Today";
import Week from "@/pages/Task/Week";
import Indox from "@/pages/Task/Inbox";
import Project from "@/pages/Task/Project";
import TagList from "@/pages/Task/TagList";
import StatusList from "@/pages/Task/StatusList";
import Tomorrow from "@/pages/Task/Tomorrow";
import AllList from "@/pages/Task/AllList";
import Summary from "@/pages/Task/Summary";


const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: "/",
        element: <Index />,
        children: [
            {
                path: 'task',
                element: <Task />,
                children: [
                    {
                        path: "today",
                        element: <Today />
                    },
                    {
                        path: "tomorrow",
                        element: <Tomorrow />
                    },
                    {
                        path: "week",
                        element: <Week />
                    },
                    {
                        path: "all",
                        element: <AllList />
                    },
                    {
                        path: "inbox",
                        element: <Indox />
                    },
                    {
                        path: "summary",
                        element: <Summary />
                    },
                    {
                        path: "project/:projectId",
                        element: <Project />
                    },
                    {
                        path: "tag/:tagId",
                        element: <TagList />
                    },
                    {
                        path: "status/:statusType",
                        element: <StatusList />
                    },

                ]
            },
            {
                path: 'calendar',
                element: <Calendar />
            },
            {
                path: 'quadrant',
                element: <Quadrant />
            },
            {
                path: 'focus',
                element: <Focus />
            },
            {
                path: 'clockIn',
                element: <ClockIn />
            },
        ]
    }
]);

export default router