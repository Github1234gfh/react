import React, {useState} from 'react'

export default function First_task() {
	const a = '-'.repeat(100)
	const tableStyle = {
		border: 'solid 1px',
		padding: '10px',
		display: 'wrap',
	}

	const [arr, setArr] = useState([
		{
			name: 1,
			check: false,
			edit: 'Edit',
		},
		{
			name: 2,
			check: false,
			edit: 'Edit',
		},		{
			name: 3,
			check: false,
			edit: 'Edit',
		},
		{
			name: 4,
			check: false,
			edit: 'Edit',
		},
	])

  return (
    <div>
			<ul>
				{arr.map((elem, index) => {
					return (
						<div key={index}>
							{elem.check? <input  value={elem.name} onChange={(event) => {
								const copy = Object.assign([], arr)
								copy[index].name = event.target.value
								setArr(copy)
							}}/>: <li>{elem.name}</li>}
							<button onClick={() => {
								const copy = Object.assign([], arr)
								if (elem.check) {
									copy[index].check = false
									copy[index].edit = 'Edit'
								} else {
									copy[index].check = true
									copy[index].edit = "Save"
								}
								setArr(copy)
							}}>{elem.edit}</button>
						</div>
					)
				})}
			</ul>
			<p>{a}</p>
			<tavle>
				<tbody>
					<tr>
						<th style={tableStyle}>Name</th>
						<th style={tableStyle}>Edit</th>
					</tr>
					{arr.map((elem, index) => {
						return (
							<tr key={index}>
								<td style={tableStyle}>{elem.check? <input value={elem.name} onChange={(event) => {
									const copy = Object.assign([], arr)
									copy[index].name = event.target.value
									setArr(copy)
								}}/>:elem.name}</td>
								<td style={tableStyle}><button onClick={() => {
									const copy = Object.assign([], arr)
									if (elem.check) {
										copy[index].check = false
										copy[index].edit = 'Edit'
									} else {
										copy[index].check = true
										copy[index].edit = 'Save'
									}
									setArr(copy)
									console.log(elem.check)
								}}>{elem.edit}</button></td>
							</tr>
						)
					})}
				</tbody>
			</tavle>
    </div>
  );
}