import React from 'react'
import App from '@/app/App';
import NotFound from '@/containers/NotFound'
/**
 *@Description: 懒加载组件
* @author:iReina
* @Date:2023-01-03 20:13:34
*/
const Recommend = React.lazy(() => import(/* webpackChunkName: "Recommend" */ "@/containers/Recommend"))
const Anime = React.lazy(() => import(/* webpackChunkName: "Anime" */ "@/containers/Anime"))
const Palgantong = React.lazy(() => import(/* webpackChunkName: "Palgantong" */ "@/containers/Palgantong"))
const ClassicDrama = React.lazy(() => import(/* webpackChunkName: "ClassicDrama" */ "@/containers/ClassicDrama"))

/**
 *@Description: 注册路由列表
* @author:iReina
* @Date:2023-01-03 20:13:21
*/
export const mainRouteConfig = [
    {
        path: "/",
        title: "首页",
        component: App,
        children: [
            {
                path: "",
                title: "首页",
                component: Recommend
            },
            {
                path: "recommend",
                title: "推荐",
                component: Recommend
            },
            {
                path: "anime",
                title: "动漫",
                component: Anime
            },
            {
                path: "palgantong",
                title: "动漫",
                component: Palgantong
            },
            {
                path: "classicDrama",
                title: "动漫",
                component: ClassicDrama
            },
        ]
    },
    {
        path: '404', title: 'Not Found', component: NotFound, noAuth: true
    },
    { path: "/login", title: "登录", component: NotFound, noAuth: true },
];

