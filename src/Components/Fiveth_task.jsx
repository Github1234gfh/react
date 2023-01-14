import React, { useState } from 'react'

export default function Fiveth_task() {

	const [notes, setNotes] = useState(['a', 'b', 'c', 'd', 'e'])
	const [value, setValue] = useState(['', 0])

	return (
		<div>
			<ul>
				{notes.map((elem, index) => {
					const InputRef = React.createRef()
					return(
						<div >
							<li>{elem}</li>
							<div style={{display: 'flex', gap: 10}}>
								<button onClick={() => {
									setValue([elem, index])
									if (InputRef.current.id === String(index)) {
										InputRef.current.style = 'visibility: visible'
									}
								}}>Edit</button>
								<input type={'text'} ref={InputRef} id={index} value={value[0]} style={{visibility: 'hidden'} } onBlur={(event) => {
										const copy = Object.assign([], notes)
										copy[value[1]] = event.target.value
										setNotes(copy)
										setValue([value[0],value[1]])
										event.target.style = 'visibility: hidden'
									}}
									onChange={(event) => {
										setValue([event.target.value, value[1]])
								}}/>
							</div>
						</div>
					)
				})}
			</ul>
			<input placeholder='добавить' onBlur={(event) => {
				const copy = Object.assign([], notes)
				copy.push(event.target.value)
				event.target.value = ''
				setNotes(copy)
			}}/>
		</div>
	)
}