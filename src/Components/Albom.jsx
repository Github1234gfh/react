import { Link } from "react-router-dom"

export const Albom = ({ albom }) => {

    return (
        <div className="albms">
            {
                albom.map((item) => {
                    return (
                        <Link to={`/albom/${item.id}`} className="albom" key={item.id}>
                            {item.title}
                        </Link>
                    )
                })
            }
        </div>
    )
}