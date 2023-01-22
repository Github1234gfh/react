import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'

export default function Item() {
	const {id} = useParams()
	const [post, setPost] = useState(null)

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
			.then(rez => rez.json())
			.then(data => setPost(data))
	}, [id])

	return (
		<div>
			{post && (
					<>
						<h1>{post.title}</h1>
						<p>{post.body}</p>
					</>
				)}
		</div>
	)
}
