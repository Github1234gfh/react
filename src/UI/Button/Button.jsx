import './style.css'

export const Button = ({ disabled,text, type, color}) => {

    if (color) { color = 'red' } else {color = 'black'}
    
    return (
        <>{
            type === 'danger'?
            <button className={'btn-danger'}>{text}</button>
            :
            <button disabled={disabled} className={!disabled? 'me-btn btn-hover': 'me-btn'} style={{color: color}}>{text}</button>
        }
        </>
    )
}