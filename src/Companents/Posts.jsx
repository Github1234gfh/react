import { Link } from "react-router-dom"

export const Posts = ({posts}) => {

    return (
        <>
            {
                posts.map((post) => {
                    return (
                        <Link to={`/post/${post.id}`} className="post" key={post.id}>
                            <h1>{post.title}</h1>
                        </Link>
                    )
                })
            }
        </>
    )
}