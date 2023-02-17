import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../UI/Button/Button";
import { Input } from "../UI/Input/Input";

export const Login = ({ aunteficate, ChnageAunteficate, users, setTitle }) => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [emailDurty, setEmaildurty] = useState(false);
    const [passDury, setPassdurty] = useState(false);
    const [error, setError] = useState(false);
    const [EmailError, setEmailError] = useState('Field must not be empty');
    const [PassError, setPassError] = useState('Field must not be empty');
    const [btn, setBtn] = useState(true);

    const Navigate = useNavigate();

    useEffect(() => {
        if (aunteficate) Navigate('/');
        if (EmailError === null && PassError === null) {
            setBtn(false);
        } else {
            setBtn(true);
        }
    }, [EmailError, PassError])

    const OnchabgeEmail = e => {
        setEmail(e);
        if (e === '') {
            setEmailError('Field must not be empty')
        }

        else {
            setEmailError(null)
        }
    };

    const OnchangePass = e => {
        setPass(e);
        if (e === '') {
            setPassError('Field must not be empty');
        }

        else {
            setPassError(null);
        };
    };

    const Onblur = (e) => {
        if (e.name === 'email') {
            setEmaildurty(true)
        }
        if (e.name === 'pass') {
            setPassdurty(true)
        }
    };

    const Onsubmit = (e) => {
        e.preventDefault();
        users.map((user) => {
            if (user.email === email && user.password === pass) {
                console.log(user.name)
                setTitle(user.name);
                ChnageAunteficate();
                Navigate('/');
                return
            }
        })
        setError(true);
    }
    console.log(users)

    return (
        <>
            <form action="" onSubmit={(e) => Onsubmit(e)} className="form">
                <p>default email - {users[0].email} </p>
                <p>default password - {users[0].password} </p>
                <h1>Login</h1>
                {
                    error? <span style={{color: 'red'}}>Email of Password is invalid</span>: null
                }
                {
                    emailDurty && EmailError ? <span style={{ color: 'red' }}>{EmailError}</span> : null
                }
                <Input onChange={OnchabgeEmail} onblur={Onblur} name={'email'} type={'email'} placeholder={'Email'} />
                {
                    passDury && PassError ? <span style={{ color: 'red' }}>{PassError}</span> : null
                }
                <Input onChange={OnchangePass} onblur={Onblur} type={'password'} name={'pass'} placeholder={'Password'} />
                <Button disabled={btn} text={'Login'} />
            </form>
        </>
    )
}