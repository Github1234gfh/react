import './style.css'

export const Button = ({ disabled,text, type}) => {

    return (
        <>{
            type === 'danger'?
            <button className={'btn-danger'}>{text}</button>
            :
            <button disabled={disabled} className={!disabled? 'me-btn btn-hover': 'me-btn'}>{text}</button>
        }
        </>
    )
}