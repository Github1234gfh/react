import { Link } from "react-router-dom"

export const Products = ({products}) => {
    return (
        <div className="books">
            {products.map((produt) => {
                return (
                    <Link className="product-link" to={`/product/${produt.id}`} key={produt.id}>{produt.title}</Link>
                )
            })}
        </div>
    )
}