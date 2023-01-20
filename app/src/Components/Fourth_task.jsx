import React, { useState } from 'react'

export default function Fourth_task() {

	const [notes, setNotes] = useState(['a', 'c', 'd', 'e'])
	const [value, setValue] = useState(['', 0, 'hidden'])
	return (
		<div>
			<ul>
				{notes.map((elem, index) => {
					return (
						<div>
							<li key={index}>{elem}</li>
							<button onClick={() => {
								setValue([elem, index, 'visible'])
							}}>Edit</button>
						</div>
					)
				})}
			</ul>
			<input type={'text'} value={value[0]} style={{visibility: value[2]} } onBlur={(event) => {
				const copy = Object.assign([], notes)
				copy[value[1]] = event.target.value
				setNotes(copy)
				setValue([value[0],value[1] ,'hidden'])
			}} onChange={(event) => {
				setValue([event.target.value, value[1], value[2]])
			}}/>
		</div>
	)
}
