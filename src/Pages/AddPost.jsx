import { useState } from "react"
import { useNavigate } from "react-router-dom";
import Api from "../Companents/Api";
import { Button } from "../UI/Button/Button";
import { Input } from '../UI/Input/Input'

export const AddPost = ({ posts, ChangePosts }) => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const ChangeTitle = (e) => setTitle(e);
    const ChnageBody = (e) => setBody(e);

    const Navigate = useNavigate();

    const POST = async () => {
        const newPost = {
            'userId': 1,
            'id': posts.length + 1,
            'title': title,
            'body': body,
        };
        await Api
            .post('/posts', newPost);
        const copy = Object.assign([], posts);
        copy.push(newPost)
        ChangePosts(copy)
    };

    const Onsubmit = (e) => {
        e.preventDefault();
        if (title !== '', body !== '') {
            POST();
            Navigate('/');
        }
    }

    return (
        <form className="form-add" onSubmit={(event) => Onsubmit(event)} action="">
            <Input onchange={ChangeTitle} />
            <Input onchange={ChnageBody} />
            <Button text={'Add Post'} />
        </form>
    )
}