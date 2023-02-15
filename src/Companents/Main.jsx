import { Route, Routes, useSearchParams } from "react-router-dom";
import { Layout } from "./Layout";
import {Home } from '../Pages/Home';
import { useState } from "react";
import { AddPost } from "../Pages/AddPost";
import { Post } from "../Pages/Post";
import { Update } from '../Pages/Update';

export const Main = () => {

    const [posts, setPosts] = useState(false)

    const ChangePosts = (newpost) => setPosts(newpost)

    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home  posts={posts} changePosts={ChangePosts}/>}/>
                    <Route path="add" element={<AddPost posts={posts} ChangePosts={ChangePosts}/>}/>
                    <Route path="/post/:id" element={<Post posts={posts} change={ChangePosts}/>}/>
                    <Route path="/post/:id/edit" element={<Update />}/>
                    <Route path="*" element={<Home posts={posts} changePosts={ChangePosts}/>}/>
                </Route>
            </Routes>
        </>
    )
};