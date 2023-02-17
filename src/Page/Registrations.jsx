import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { Button } from "../UI/Button/Button"
import { Input } from "../UI/Input/Input"

export const Registration = ({ aunteficate, ChnageAunteficate }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [nameDurtu, setNamedurty] = useState(false);
    const [emailDurty, setEmaildurty] = useState(false);
    const [passDury, setPassdurty] = useState(false);
    const [NameError, setNameError] = useState('Field must not be empty');
    const [EmailError, setEmailError] = useState('Field must not be empty');
    const [PassError, setPassError] = useState('Field must not be empty');
    const [btn, setBtn] = useState(true);

    const OnchangegName = e => {
        setName(e);
        if (e === '') {
            setNameError('Field must not be empty');
        } else {
            setNameError(null)
        }
    }

    const OnchabgeEmail = e => {
        setEmail(e);
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (e === '') {
            setEmailError('Field must not be empty')
        }
        else if (!re.test(String(e).toLowerCase())) {
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
        else if (e.length < 9) {
            setPassError('Password must be more 8 letters');
        } else {
            setPassError(null);
        };
    };

    const Navigate = useNavigate();

    useEffect(() => {
        if (aunteficate) Navigate('/');
        if ( NameError === null && EmailError === null && PassError === null) {
            setBtn(false);
        } else {
            setBtn(true);
        }
    }, [NameError, EmailError, PassError])

    const Onblur = (e) => {
        if (e.name === 'name') {
            setNamedurty(true)
        }
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
            {
                aunteficate ? <></>
                    :
                    <form action="" onSubmit={e => Onsubmit(e)} className="form">
                        <h1>Registration</h1>
                        {
                            nameDurtu && NameError ? <span style={{ color: 'red' }}>{NameError}</span> : null
                        }
                        <Input onChange={OnchangegName} value={name} onblur={Onblur} name={'name'} type={'text'} placeholder={'Name'} />
                        {
                            emailDurty && EmailError ? <span style={{ color: 'red' }}>{EmailError}</span> : null
                        }
                        <Input onChange={OnchabgeEmail} value={email} onblur={Onblur} type={'email'} name={'email'} placeholder={'Email'} />
                        {
                            passDury && PassError ? <span style={{ color: 'red' }}>{PassError}</span> : null
                        }
                        <Input onChange={OnchangePass} value={pass} onblur={Onblur} type={'password'} name={'pass'} placeholder={'Password'} />
                        <Button disabled={btn} text={'Registration'} />
                    </form>
            }
        </>
    )
}