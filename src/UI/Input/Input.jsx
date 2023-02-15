import './style.css'

export const Input = ({onchange, value}) => {
    return (
        <input type="text" value={value} onChange={(event) => (onchange(event.target.value))} className="my-input"/>
    )
}