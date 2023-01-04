import * as React from "react"
import { Routes, Route, Navigate } from "react-router-dom"

import Loading from "@/containers/Loading"

import { mainRouteConfig } from "./config"

const renderRouter = (routerList: any) => {
    return routerList.map((item: any) => {
        const { path, noAuth, children } = item;
        // const token = localStorage.getItem('token')
        // console.log(token)

        // if (!noAuth && !token) return <Route path="*" element={< Navigate to="/login" />} />

        return <Route key={path} path={path} element={< item.component />} >
            {!!children && children.map((i: any) => {
                return <Route key={i?.path} path={i?.path} element={< i.component />} />
            })}
        </Route >;
    });
};

const Routers = () => {
    return (
        <React.Suspense fallback={< Loading />}>
            <Routes>
                {renderRouter(mainRouteConfig)}
                <Route path="*" element={<Navigate to='404' />} />
            </Routes>
        </React.Suspense>
    )
}


export default Routers
