import { useEffect } from "react"
import Api from "../Companents/Api"
import { Posts } from "../Companents/Posts"
import { Preloader } from "../UI/Preloader/Preloader"
import { Button } from '../UI/Button/Button'
import { Link } from "react-router-dom"

export const Home = ({ posts, changePosts }) => {

    const retri = async () => {
        await Api
            .get('/posts')
            .then((rez) => {
                changePosts(rez.data)
            })
    }

    useEffect(() => {
        retri()
    }, [])

    return (
        <div className="posts">
            <Link to={'/add'} className="btn-post"><Button text={'Add Post'}/></Link>
            {
                posts ?  <Posts posts={posts} />: <span className="pre"><Preloader /></span>
            }
            
        </div>
    )
}