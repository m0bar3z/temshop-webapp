import { Outlet, Navigate } from "react-router-dom"

export const PrivateRoute = () => {
    const auth = JSON.parse(localStorage.getItem('user'))
    return auth ? <Outlet /> : <Navigate to="/" />
}