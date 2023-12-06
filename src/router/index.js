import Home from "@/pages/Home";
import Inbox from "@/pages/Inbox";
import Project from "@/pages/Project";
import Status from "@/pages/Status";
import Today from "@/pages/Today";
import Week from "@/pages/Week";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        children: [
            // 今天
            {
                path: "today",
                element: <Today />,
            },
            // 近7天
            {
                path: "week",
                element: <Week />,
            },
            // 收集箱
            {
                path: "inbox",
                element: <Inbox />,
            },
            // 自定义清单
            {
                path: "project",
                element: <Project />,
            },
            // 自定义标签
            {
                path: "envelope",
                element: <Project />,
            },
            // 状态任务
            {
                path: "/status",
                element: <Status />,
            },
        ]
    }
]);

export default router