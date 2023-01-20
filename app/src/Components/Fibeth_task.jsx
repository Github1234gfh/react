import React, { useState } from 'react'

export default function Fibeth_task() {

	let [sity, setSit] = useState()
	let [fd, setFd] = useState()
	let [vos, setVos] = useState()
	let [radio, setRadio] = useState()
	let [radioitem, setRadioItem] = useState()
	let [alstraid, setLastRaid] = useState()
	let [fm, setFm] = useState()
	const style = {
		padding: '10px',
		justifyContent: 'center',
	}
	const yaz = ['js', 'pyhon', 'java', 'C++', 'C#']
	const radios = ['от 0 до 12 лет', 'от 13 до 17 лет', 'от 18 до 25 лет']
	const vosvs = ['от 0 до 12 лет', 'от 13 до 17 лет', 'от 18 до 25 лет', 'старше 25 лет']
	const arr = ['Абаза', 'Абакан', 'Абдулино', 'Абинск', 'Агидель', '	Агрыз']

	return (
		<div>
			<p>В ручную </p>
			<select onChange={(event) => {
				setSit(event.target.value)
			}}>
				<option>Москва</option>
				<option>Рим</option>
				<option>Берлин</option>
			</select>
			<p>{sity}</p>
			<p>через массив</p>
			<select onChange={(event) => {
				setFd(event.target.value)
			}}>
				{arr.map((town) => {
					return (
						<option>{town}</option>
					)
				})}
			</select>
			<p>{fd}</p>
			<p>К какой возврастной группе вы относитесь?</p>
			<select onChange={(event) => {
				setVos(event.target.value)
			}}>
				{vosvs.map((year) => {
					return (
						<option>{year}</option>
					)
				})}
			</select>
			<p>Вы выбрали - {vos}</p>
			<table>
				<tbody>
					<tr>
						{radios.map((item) => {
							return (
								<th>{item}</th>
							)
						})}
					</tr>
					<tr>
					{radios.map((item, index) => {
						return (
							<td><input type={'radio'} checked={radioitem === index+1 ? true: false} onChange={() => {
								setRadio(index+1)
								setRadioItem(item)
							}}/></td>
						)
					})}
					</tr>
				</tbody>
			</table>
			<p>{radioitem}</p>
			<table>
				<tbody>
					<tr>
						{yaz.map((item) => {
							return (
								<th style={style}>{item}</th>
							)
						})}
					</tr>
					<tr>
					{yaz.map((item, index) => {
						return (
							<td style={style}><input type={'radio'} checked={alstraid === index+1 ? true: false} onChange={() => {
								setLastRaid(index+1)
								if (item === 'js') {
									setFm(item+', Молодец!')
									return
								}
								setFm(item)
							}}/></td>
						)
					})}
					</tr>
				</tbody>
			</table>
			<p>{fm}</p>
		</div>
	)
}