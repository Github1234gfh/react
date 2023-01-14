import React, { useState } from 'react'

export default function Second_task() {
    let [text1, setText1] = useState()
    let [text2, setText2] = useState()
    let [count1, setCount1] = useState()
    let [count2, setCount2] = useState()
    let [year1, setYear1] = useState()
    let [cels, setCels] = useState()
    let [sr, setSr] = useState(0)
    let [count3, setCount3] = useState(0)

    let func = (event) => {
        
        setCount3(count3+ 1)
        setSr(sr+Number(event.target.value))
    }
    const yaer = new Date().getFullYear()
    return (
        <div>
            <input onChange={(event) => {
                setText1(event.target.value)
                setCount1(event.target.value.length)
            }}/>
            <p>{text1}</p>
            <p>{count1}</p>
            <input onChange={(event) => {
                setText2(event.target.value)
                setCount2(event.target.value.length)
            }}/>
            <p>{text2}</p>
            <p>{count2}</p>
            <input type={'date'} onChange={(event) => {
                setYear1(yaer - event.target.value.split('-')[0])
            }}/>
            <p>{year1}</p>
            <input onChange={(event) =>{
                setCels(5/9*(event.target.value - 32))
            }}/>
            <p>{cels}</p>
            <input onChange={func}/>
            <input onChange={func}/>
            <input onChange={func}/>
            <input onChange={func}/>
            <input onChange={func}/>
            <p>{sr/count3}</p>
        </div>
    )
}
