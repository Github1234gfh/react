import { useState } from "react"
import { useParams } from "react-router-dom"

export const Product = ({ product, add }) => {


    const [value, setValue] = useState()
    const { id } = useParams()

    return (
        <div className="product">
            <p className="product-iten" style={{ fontSize: 25, fontWeight: 'bold' }}> {product[id - 1].title}</p>
            <p className="product-iten"><span>description:</span> {product[id - 1].description}</p>
            <p className="product-iten"><span>price:</span>  {product[id - 1].price}</p>
            <p className="product-iten"><span>discountPercentage:</span> {product[id - 1].discountPercentage}</p>
            <p className="product-iten"><span>stock</span>: {product[id - 1].stock}</p>
            <p className="product-iten"><span>brand:</span> {product[id - 1].brand}</p>
            <p className="product-iten"><span>category:</span> {product[id - 1].category}</p>
            <p></p>
            {
                product[id - 1].comment.state ? <>
                    <p className="product-iten"><span>Comments:</span></p>
                    {
                        product[id - 1].comment.comments.map(com => {
                            return (
                                <p key={com} className="product-iten" style={{ paddingLeft: 100 }}>
                                    {com}
                                </p>
                            )
                        })
                    }
                </> : null
            }
            <form style={{display: 'flex', flexDirection: 'column', gap: 10}} onSubmit={e => {
                    e.preventDefault()
                    value ? add(value, id) : console.log('err')

                    setValue('')
                }}>
                <p>Add comment </p>
                <input value={value} className="input-add" onChange={(event) => {
                    setValue(event.target.value)
                }} />
                <button className="input-add">Add</button>
            </form>
        </div>
    )
}