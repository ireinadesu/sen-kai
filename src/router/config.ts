import React from 'react'
import App from '@/app/App';
import NotFound from '@/containers/NotFound'

const Recommend = React.lazy(() => import(/* webpackChunkName: "Search" */ "@/containers/Recommend"))
const Anime = React.lazy(() => import(/* webpackChunkName: "Search" */ "@/containers/Anime"))

// 主路由
export const mainRouteConfig = [
    {
        path: "/",
        title: "首页",
        component: App,
        children: [
            {
                path: "/recommend",
                title: "推荐",
                component: Recommend
            },
            {
                path: "/anime",
                title: "动漫",
                component: Anime
            },
        ]
    },
    {
        path: '404', title: 'Not Found', component: NotFound, noAuth: true
    },
    { path: "/login", title: "登录", component: NotFound, noAuth: true },
];

