import React, {useState} from 'react'
import { nanoid } from 'nanoid'

export default function First_task() {
	const a = '-'.repeat(100)
	const tableStyle = {
		border: 'solid 1px',
		padding: '10px',
		display: 'wrap',
	}

	const [values, setValues] = useState([])
	const [edit, setEdit] = useState([])
	const [value, setValue] = useState({id: nanoid(), name: '', catg: '', cost: ''})
	const [InitProps, setInitProps] = useState([
		{
			id: nanoid(),
			name: "prop1",
			catg: "catg1",
			cost: 100,
		},
		{
			id: nanoid(),
			name: "prop2",
			catg: "catg2",
			cost: 200,
		},
		{
			id: nanoid(),
			name: "prop3",
			catg: "catg3",
			cost: 300,
		},
	])

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
					<tr>
						<th style={tableStyle}>Id</th>
						<th style={tableStyle}>Name</th>
						<th style={tableStyle}>Catg</th>
						<th style={tableStyle}>Cost</th>
						<th style={tableStyle}>Edit</th>
						<th style={tableStyle}>Delete</th>
					</tr>
						{InitProps.map( (elem, index) => {
							edit.push('Edit')
							return (
								<tr key={index}>
								<td style={tableStyle}>{elem.id}</td>
								<td style={tableStyle}>{elem.name}</td>
								<td style={tableStyle}>{elem.catg}</td>
								<td style={tableStyle}>{elem.cost}</td>
								<td style={tableStyle}><button onClick={() => {
									const copyEdit = Object.assign([], edit)
									const copyItem = Object.assign([], InitProps)
									for (let i in elem) {
										values.push(elem[i])
										if (copyEdit[index] === 'Save') {
											copyEdit[index] = 'Edit'
											setEdit(copyEdit)
											console.log(values)
											copyItem[index].elem[i] = <input key={index} value={values[index]} onChange={(event) => {
												console.log(event.target.value)
												setValue(values[index]+event.target.value)
											}}/>
											setInitProps(copyItem)
											console.log(values)
											return
										}
										copyItem[index].name = <input value={InitProps[index].name}/>
										copyItem[index].catg = <input value={InitProps[index].catg}/>
										copyItem[index].cost = <input value={InitProps[index].cost}/>
										setInitProps(copyItem)
										copyEdit[index] = 'Save'
										setEdit(copyEdit)
									}
								}}>{edit[index]}</button></td>
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