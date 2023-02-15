import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import Api from "../Companents/Api";
import { Preloader } from '../UI/Preloader/Preloader'
import { Button } from '../UI/Button/Button'

export const Post = ({ posts, change }) => {

    const Navigate = useNavigate();

    const { id } = useParams();
    const [post, setPost] = useState(false);

    const Delete = async () => {
        await Api.delete(`posts/${id}`)
        const copy = Object.assign([], posts);
        copy.splice(id-1, 1);
        change(copy);
        Navigate('/');
    };

    useEffect(() => {
        Api
            .get(`posts/${id}`)
            .then((rez) => {
                setPost(rez.data)
            })
    }, [id])

    return (
        <div className="iotem">
            {
                post ?
                    <div className="post card">
                        <h1 className="title">Title - {post.title}</h1>
                        <p className="text">body - {post.body}</p>
                        <div  className="btns">
                            <Link to={`/post/${id}/edit`}><Button text={'Edit'} /></Link>
                            <span onClick={Delete} className="delete"><Button text={'Delete'} /></span>
                        </div>
                    </div>
                    :
                    <Preloader />
            }
        </div>
    )
}