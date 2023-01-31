import { useState } from "react"
import { Route, Router, Routes } from "react-router-dom"
import { Layout } from "../Components/Layout"
import { Product } from "../Components/Product"
import { Home } from "./Home"

export const Main = () => {

    const [products, setProducts] = useState([
        {
            "id": 1,
            "title": "iPhone 9",
            "description": "An apple mobile which is nothing like apple",
            "price": 549,
            "discountPercentage": 12.96,
            "rating": 4.69,
            "stock": 94,
            "brand": "Apple",
            "category": "smartphones",
            "comment": {
                'state': false,
            }
        },
        {
            "id": 2,
            "title": "iPhone X",
            "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
            "price": 899,
            "discountPercentage": 17.94,
            "rating": 4.44,
            "stock": 34,
            "brand": "Apple",
            "category": "smartphones",
            "comment": {
                'state': false,
            }
        },
        {
            "id": 3,
            "title": "Samsung Universe 9",
            "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
            "price": 1249,
            "discountPercentage": 15.46,
            "rating": 4.09,
            "stock": 36,
            "brand": "Samsung",
            "category": "smartphones",
            "comment": {
                'state': false,
            }
        },
    ])
    const AddBook = (value, id) => {
        const copy = Object.assign([], products)
        if (!copy[id - 1].comment.state) {
            copy[id - 1].comment['comments'] = []
            copy[id - 1].comment.state = true
        }

        if (copy[id - 1].comment.state) {
            copy[id-1].comment.comments.push(value)
        }
        setProducts(copy)
    }

    return (
        <div className="container" >
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home products={products} />} />
                    <Route path="product/:id" element={<Product product={products} add={AddBook} />} />
                </Route>
            </Routes>
        </div >
    )
}