import './style.css'


export const Input= ({onChange, value, type, placeholder, onblur, name, }) => {
    return (
        <>
            <input onChange={e => onChange(e.target.value)} value={value} type={type} onBlur={e => onblur(e.target)} name={name} placeholder={placeholder}  className={'my-input'}/>
        </>
    )
}