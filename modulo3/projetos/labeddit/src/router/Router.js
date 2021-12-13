import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from '../pages/LoginPage/LoginPage'
import SignUpPage from '../pages/SignUpPage/SignUpPage'
import FeedPage from '../pages/FeedPage/FeedPage'
import PostPage from '../pages/PostPage/PostPage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import Header from '../components/Header/Header'

const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route exact path="/login" element={<LoginPage/>}/>
                <Route exact path="/cadastro" element={<SignUpPage/>}/>
                <Route exact path="/" element={<FeedPage/>}/>
                <Route exact path="/post" element={<PostPage/>}/>
                <Route exact path="*" element={<ErrorPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router