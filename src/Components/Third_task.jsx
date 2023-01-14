import React, { useState } from 'react'

export default function Third_task() {
    let [itme1 ,setItme1] = useState()
    let [itme2 ,setItme2] = useState()
    let [sum, setSum] = useState()
    let [raz, setRaz] = useState()
		let [num, setNum] = useState(0) 
		let [num2, setNum2] = useState(1)
		
		function ckeck(key) {
			if (key+1 <10) {
				key = '0'+String(key+1)
			} 
			return key
		}

		const nowDate = [
			String(new Date().getFullYear()),
			ckeck(new Date().getMonth()),
			String(new Date().getDate())].join('-')
		
		let [date1, setDate1] = useState(nowDate)
		let [date2, setDate2] = useState(nowDate)
    return (
        <div>
            <input onChange={(event) => {
                setItme1(Number(event.target.value))
            }}/>
            <input onChange={(event) => {
                setItme2(Number(event.target.value))
            }}/>
            <button onClick={() => {
                setSum(itme1+itme2)
            }}>Сложить</button>
            <button onClick={() => {
                setSum(itme1*itme2)
            }}>Умножить</button>
            <p>{sum}</p>
            <input  type={'date'} value={date1} onChange={(event) => {
                setDate1(event.target.value)
								
            }}/>
            <input value={date2} type={'date'} onChange={(event) => {
                setDate2(event.target.value)
            }}/>
            <button onClick={() => {
                const letDate1 = date1.split('-')
                const letDate2 = date2.split('-')
                const days1 = Number(letDate1[0])*365+Number(letDate1[1])*30+Number(letDate1[2])
                const days2 = Number(letDate2[0])*365+Number(letDate2[1])*30+Number(letDate2[2])
								console.log(letDate1)

                if (days1>days2) {
                    setRaz(days1-days2)
                } else {
                    setRaz(days2-days1)
                }
            }}>Click</button>
            <p>{raz}</p>
						<input onBlur={(event) => {
							for (let i of event.target.value) {
								setNum(num+Number(i))
							}
						}}/>
						<p>{num}</p>
						<input onBlur={(event) => {
							const value = Number(event.target.value)
							let b =1
							for (let i = 1; i<value+1; i++) {
								if (value%i == 0) {
									b*= i
								}
							}
							setNum2(b)
						}}/>
						<p>{num2}</p>
        </div>
    )
}
