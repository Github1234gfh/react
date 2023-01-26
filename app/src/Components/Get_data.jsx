import axios, { Axios } from 'axios'
import React, { useEffect, useState } from 'react'
import { Products } from './Products'

export const Get_data = () => {


    const autnteficate = false
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios
            .get('https://dummyjson.com/products')
            .then((resp) => {
                setProducts(resp.data.products)
            });
    }, [])

    return (
        <div className='main-conainer'>
            {
                products.map((elem) => {
                    return (
                        <Products autnteficate={autnteficate} key={elem.id} elem={elem}/>
                    )
                })
            }
        </div>
    )
}


