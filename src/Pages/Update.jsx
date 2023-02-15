import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import Api from "../Companents/Api";
import { Button } from "../UI/Button/Button";
import { Input } from "../UI/Input/Input";
import { Preloader } from "../UI/Preloader/Preloader";

export const Update = () => {

    const [title, setTitle] = useState(false);
    const [body, setBody] = useState(false);

    const UPDATE = async () => {
        const newPost = {
            'title': title,
            'body': body,
        };
        await Api
            .patch(`/posts/${id}`, newPost);
    };

    const { id } = useParams();

    const Navigate = useNavigate();

    const ChangeTitle = (e) => setTitle(e);
    const ChnageBody = (e) => setBody(e);

    const retri = async () => {
        const response = await Api.get(`posts/${id}`);
        setTitle(response.data.title);
        setBody(response.data.body);
    };

    useEffect(() => {
        retri()
    }, [])

    const Onsubmit = (e) => {
        e.preventDefault();
        if (title !== '', body !== '') {
            UPDATE();
            Navigate('/');
        }
    }

    return (
        <>
            {
                title ?
                    <form className="form-add" onSubmit={(event) => Onsubmit(event)} action="">
                        <Input onchange={ChangeTitle} value={title}/>
                        <Input onchange={ChnageBody} value={body}/>
                        <Button text={'Save'} />
                    </form>
                    : <Preloader />
            }
        </>
    )
}