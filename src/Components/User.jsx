import React, {useState} from 'react'

export default function First_task({s, id ,name, edit,index, ch}) {
	return (
		<>
		{edit? <input value={name} onChange={(event) => {
			ch(index, event)
		}}/>:<p style={{textDecoration: s}}>{name}</p>}
		</>
	)
}