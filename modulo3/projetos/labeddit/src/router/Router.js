import React from "react"
import { Routes, Route } from 'react-router-dom'
import LoginPage from '../pages/LoginPage/LoginPage'
import SignUpPage from '../pages/SignUpPage/SignUpPage'
import FeedPage from '../pages/FeedPage/FeedPage'
import PostPage from '../pages/PostPage/PostPage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'

const Router = ({setRightButtonText}) => {
    return (
    <Routes>
        <Route path="/login" element={<LoginPage setRightButtonText={setRightButtonText}/>}/>
        <Route path="/cadastro" element={<SignUpPage setRightButtonText={setRightButtonText}/>}/>
        <Route path="/" element={<FeedPage/>}/>
        <Route path="/post" element={<PostPage/>}/>
        <Route path="*" element={<ErrorPage/>}/>
    </Routes>
    )
}

export default Router