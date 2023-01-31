import { useState } from "react"

export const Add = ({add}) => {

    const [value ,setValue] = useState()
    
    return (
        <div>
            <p>Add Book</p>
            <input onChange={(event) => {
                setValue(event.target.value)
            }}/>
            <button onClick={() => {
                value?add(value):console.log('err')                
            }}>Add</button>
        </div>
    )
}