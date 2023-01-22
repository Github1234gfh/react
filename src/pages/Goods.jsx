import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'


export default function Item() {

	const [posts, setPosts] = useState([])

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(rez => rez.json())
			.then(data => setPosts(data))
	}, [])

	return (
		<div>
			{
				posts.map(post => (
					<Link 
						key={post.id}
						to={`/goods/${post.id}`}
						>
							<li>{post.title}</li>
					</Link>
				))
			}
		</div>
	)
}
