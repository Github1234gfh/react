import React, {useState} from 'react'

export default function First_task() {

	const [notes, setNotes] = useState([1, 2, 3, 4])

  return (
    <div>
			<p>{notes}</p>
			<button onClick={() => {
				const copy = Object.assign([], notes)
				copy.push(1)
				setNotes(copy)
			}}>add</button>
			<button onClick={() => {
				const copy = Object.assign([], notes)
				copy.splice(0, 1)
				setNotes(copy)
			}}>Remove</button>
			<button onClick={() => {
				const index = 2
				const copy = Object.assign([], notes)
				copy[index]= '!'
				setNotes(copy)
			}}>Edit</button>
			<button onClick={() => {
				const index = 2
				const copy = Object.assign([], notes)
				copy.reverse()
				setNotes(copy)
			}}>Reverse</button>
    </div>
  );
}