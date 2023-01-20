import React, {useState} from 'react'
import { nanoid } from 'nanoid'
import { isEditableInput } from '@testing-library/user-event/dist/utils'

export default function First_task() {
	const a = '-'.repeat(100)
	const tableStyle = {
		border: 'solid 1px',
		padding: '10px',
		display: 'wrap',
	}

	const [value, setValue] = useState({id: nanoid(), name: '', catg: '', cost: '', edit: 'Edit'})
	const [InitProps, setInitProps] = useState([
		{
			id: nanoid(),
			name: "prop1",
			catg: "catg1",
			cost: 100,
			redact: false,
			edit: 'Edit'
		},
		{
			id: nanoid(),
			name: "prop2",
			catg: "catg2",
			cost: 200,
			redact: false,
			edit: 'Edit'
		},
		{
			id: nanoid(),
			name: "prop3",
			catg: "catg3",
			cost: 300,
			redact: false,
			edit: 'Edit'
		},
	])

	const table =  (elem) => {
		return (
			<>
				<td style={tableStyle}>{elem.name}</td>
				<td style={tableStyle}>{elem.catg}</td>
				<td style={tableStyle}>{elem.cost}</td>
			</>
		)
	}

	const input = (elem, index) => {
		return (
			<>
				<td style={tableStyle}><input value={elem.name} onChange={(event) => {
					const copy = Object.assign([], InitProps)
					copy[index].name = event.target.value
					setInitProps(copy)
				}}/></td>
				<td style={tableStyle}><input value={elem.catg}onChange={(event) => {
					const copy = Object.assign([], InitProps)
					copy[index].catg = event.target.value
					setInitProps(copy)
				}}/></td>
				<td style={tableStyle}><input value={elem.cost}onChange={(event) => {
					const copy = Object.assign([], InitProps)
					copy[index].cost = event.target.value
					setInitProps(copy)
				}}/></td>
			</>
		)
	}
  return (
    <div>
			<div style={{display: 'flex',}}>
				{InitProps.map((elem, index) => {
					return (
						<div key={index}>
							<button onClick={() => {
								const copy = Object.assign([], InitProps)
								copy[index].name = index+1
								setInitProps(copy)
							}}>Edit elem {index+1}</button>
							<p>{elem.name}</p>
						</div>
					)
				})}
			</div>
			<p>{a}</p>
			<table>
				<tbody>
						<th style={tableStyle}>Name</th>
						<th style={tableStyle}>Catg</th>
						<th style={tableStyle}>Cost</th>
						<th style={tableStyle}>Edit</th>
						<th style={tableStyle}>Delete</th>
					
						{InitProps.map( (elem, index) => {
							return (
								<tr key={index}>
									{elem.redact? input(elem, index): table(elem)}
									<td style={tableStyle}><button onClick={() => {
										const copy = Object.assign([], InitProps)
										if (elem.redact) {
											copy[index].redact = false
											copy[index].edit = 'Edit'
										} else {
											copy[index].redact = true
											copy[index].edit = 'Save'
										}
										setInitProps(copy)
									}}>{elem.edit}</button></td>

									<td style={tableStyle}><button onClick={() => {
										const copy = Object.assign([], InitProps)
										copy.splice(index, index+1)
										setInitProps(copy)
									}}>Delete</button></td>
								</tr>
							)
						})}
				</tbody>
			</table>
			<p>{a}</p>
			<p>add form</p>
			<div style={{display: 'flex', flexDirection: 'column', width: 300}}>
				name - <input onChange={(event) => {
					const copy = Object.assign([], value)
					copy.name = event.target.value
					setValue(copy)
				}}/>
				catg - <input onChange={(event) => {
					const copy = Object.assign([], value)
					copy.catg = event.target.value
					setValue(copy)
				}}/>
				cost - <input onChange={(event) => {
					const copy = Object.assign([], value)
					copy.cost = event.target.value
					setValue(copy)
				}}/>
				<button onClick={() => {
					const copy = Object.assign([], InitProps)
					copy.push(value)
					setInitProps(copy)
				}}>Add</button>
			</div>
    </div>
  );
}