import { useState } from "react"
import { Route, Router, Routes } from "react-router-dom"
import { Layout } from "../Components/Layout"
import { About } from "./About"
import { Add } from "./Add"
import { Home } from "./Home"

export const Main = () => {

    const [Books,setBooks] = useState([
        {
            name: '1000 Years of Joys and Sorrows. by Ai Weiwei'
        },
        {
            name: 'Acts of Desperation. by Megan Nolan'
        },
        {
            name: 'Afterparties. by Anthony Veasna So'
        },
        {
            name: 'Aftershocks. by Nadia Owusu'
        },
        {
            name: 'All That She Carried. by Tiya Miles'
        },
        {
            name: 'All the Frequent Troubles of Our Days. by Rebecca Donner'
        },
        {
            name: 'America on Fire. by Elizabeth Hinton'
        },
        {
            name: 'Beautiful World, Where Are You'
        }
    ])

    const AddBook = (book) => {
        const copy = Object.assign([], Books)
        copy.push({name: book})
        setBooks(copy)
    }

    return (
        <div className="container">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home Bookss={Books}/>}/>
                    <Route path="about" element={<About />}/>
                    <Route path='addbook' element={<Add add={AddBook} />}/>
                </Route>
            </Routes>
        </div>
    )
}