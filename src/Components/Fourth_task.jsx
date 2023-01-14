import React, { useState } from 'react'

export default function Fourth_task() {

	let [cks, setCks] = useState() 
	let [cks1, setCks1] = useState() 
	let [cks2, setCks2] = useState() 
	let [cks3, setCks3] = useState()
	let [cks4, setCks4] = useState()
	let [cks5, setCks5] = useState('hidden')

	return (
		<div>
			<input type={'checkbox'} 
			onClick={(event) => {
				if (cks=='текст приветствия') {
					setCks('текст прощания')
					return
				}
				setCks('текст приветствия') 
			}}/>
			<p>{cks}</p>
			html - <input type={'checkbox'} 
			onClick={(event) => {
				if (cks1=='html') {
					setCks1('')
					return
				}
				setCks1('html')
			}}/>
			<br></br>
			js - <input type={'checkbox'} 
			onClick={(event) => {
				if (cks2=='js') {
					setCks2('')
					return
				}
				setCks2('js')
			}}/>
			<br></br>
			css - <input type={'checkbox'} 
			onClick={(event) => {
				if (cks3=='css') {
					setCks3('')
					return
				}
				setCks3('css')
			}}/>
			<p>{cks1}</p>
			<p>{cks2}</p>
			<p>{cks3}</p>
			Есть 18 лет? - <input type={'checkbox'} 
			onClick={(event) => {
				if (cks4=='Есть 18!') {
					setCks4('Нет 18!')
					return
				}
				setCks4('Есть 18!')
			}}/>
			<p>{cks4}</p>
			<input type={'checkbox'} 
			onClick={(event) => {
				if (cks5=='hidden') {
					setCks5('visible')
					return
				}
				setCks5('hidden')
			}}/>
			<p style={{visibility: cks5}}>123</p>
		</div>
	)
}
