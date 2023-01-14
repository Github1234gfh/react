import React, { useState } from 'react'

export default function Second_task() {

	const [notes, setNotes] = useState(['a', 'b','c', 'd', 'e'])
	return (
		<div>
			<ul>
				{notes.map((elem, index) => {
					return (
						<div>
							<li key={index}>{elem}</li>
							<button onClick={() => {
								const copy = Object.assign([], notes)
								copy.splice(index, 1)
								setNotes(copy)
							}}>Delete</button>
						</div>
					)
				})}
			</ul>
			<input onBlur={(event) => {
				const copy = Object.assign([], notes)
				copy.push(event.target.value)
				setNotes(copy)
				event.target.value=''
			}}/>
		</div>
	)
}
