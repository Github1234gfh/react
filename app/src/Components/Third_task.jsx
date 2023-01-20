import React, { useState } from 'react'

export default function Third_task() {
	
	const [notes, setNotes] = useState([1,2,3,4,5,6,7,8,9])
	let b = 0


	return (
		<div>
			{notes.map((elem, index) => {
				b+=elem
				return (
					<div>
						<p key={index}>{elem}</p>
						<input onBlur={(event) => { 
							const copy = Object.assign([], notes)
							copy[index]= Number(event.target.value)
							setNotes(copy)
							event.target.value=''
						}}/>
					</div>
				)
			})}
			<p>{b/notes.length}</p>
		</div>
	)
}
