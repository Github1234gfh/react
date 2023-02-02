import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Products } from './Products'

export const Get_data = ({ autnteficate, orders, ch }) => {

    const [products, setProducts] = useState([])
    const Get = async () => {
        await axios
            .get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
            .then((resp) => {
                setProducts(resp.data.drinks)
            });
    }
    useEffect(() => {
        Get()
    }, [])

    return (
        <div className='main-conainer'>
            {
                products.map((elem, index) => {
                    return (
                        <div key={elem.idDrink}>
                            <Products autnteficate={autnteficate} elem={elem} orders={orders} ch={ch} index={index} />
                        </div>
                    )
                })
            }
        </div>
    )
}


