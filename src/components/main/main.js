import React from 'react'
import { useSelector } from 'react-redux'
import { MainNavbar } from './navbar'
import { UserNavbar } from './userNavbar'

export const Main = () => {

    let user = useSelector(state => state.authentication)

    return (
        <>
            {
                user.loggedIn 
                ? <UserNavbar />
                : <MainNavbar /> 
            }
            <div className="text-center mt-5">به فروشگاه تم خوش آمدید</div>
        </>
    )
}