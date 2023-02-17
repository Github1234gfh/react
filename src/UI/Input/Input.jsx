import './style.css'


export const Input= ({onChange, value, type, placeholder, onblur, name, err}) => {

    const border = err? '2px solid red': '2px solid black'

    return (
        <>
            <input onChange={e => onChange(e.target.value)} style={{borderBottom: border}} value={value} type={type} onBlur={e => onblur(e.target)} name={name} placeholder={placeholder}  className={'my-input'}/>
        </>
    )
}