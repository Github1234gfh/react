import React, { useState } from 'react'
import User from './User'
import { nanoid } from 'nanoid'

export default function Users() {
	 
	const [Users, setUsers] = useState([
		{
			id: nanoid(),
			name: 'User1',
			surname: 'surn1',
			age: 30,
			ban: false,
			edit: false,
			btnedit: 'Edit',
			banstatus: 'Ban',
			banned: 'none'
		},
		{
			id: nanoid(),
			name: 'User2',
			surname: 'surn2',
			age: 31,
			ban: false,
			edit: false,
			btnedit: 'Edit',
			banstatus: 'Ban',
			banned: 'none'
		},
		{
			id: nanoid(),
			name: 'User3',
			surname: 'surn3',
			age: 32,
			ban: false,
			edit: false,
			btnedit: 'Edit',
			banstatus: 'Ban',
			banned: 'none'
		},
	])
	function change(index, event) {
		Users.map(elem => {
			const copy = Object.assign([], Users)
			copy[index].name = event.target.value
			setUsers(copy)
		}) 
	}

	return (
		<div>
			{Users.map((elem, index) => {
				return (
					<div key={elem.id}>
						<User s={elem.banned} id={elem.id} name={elem.name} edit={elem.edit} index={index} ch={change} surn={elem.surname} age={elem.age} ban={elem.ban} banstatus={elem.banstatus}/>
						<button onClick={() => {
							const copy = Object.assign([], Users)
							if (elem.ban) {
								copy[index].ban = false
								copy[index].banstatus = 'Ban'
								copy[index].banned = 'none'
							} else {
								copy[index].ban = true
								copy[index].banned = 'line-through'
								copy[index].banstatus = 'Unban'
							}
							console.log(copy[index].banned)
							setUsers(copy)
					}}>{elem.banstatus}</button>
					<button onClick={() => {
						const copy = Object.assign([], Users)
						if (elem.edit) {
							copy[index].edit = false
							copy[index].btnedit = 'Edit'
						} else {
							copy[index].edit = true
							copy[index].btnedit = 'Save'
						}
						setUsers(copy)
					}}>{elem.btnedit}</button>
					</div>
				)
			})}
		</div>
	)
}
