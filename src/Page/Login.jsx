import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Users } from "../Components/Users";
import { Button } from "../UI/Button/Button";
import { Input } from "../UI/Input/Input";

export const Login = ({ aunteficate, ChnageAunteficate }) => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [emailDurty, setEmaildurty] = useState(false);
    const [passDury, setPassdurty] = useState(false);
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

        else if (e !== Users[0].email) {
            setEmailError('Invalid Email')
        } else {
            setEmailError(null)
        }
    };

    const OnchangePass = e => {
        setPass(e);
        if (e === '') {
            setPassError('Field must not be empty');
        }
        else if (e !== Users[0].password) {
            setPassError('Password invalids');
        } else {
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
        ChnageAunteficate();
        Navigate('/');
    }

    return (
        <>
            <form action=""  onSubmit={(e) => Onsubmit(e)} className="form">
                <p>default email - {Users[0].email} </p>
                <p>default password - {Users[0].password} </p>
                <h1>Login</h1>
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