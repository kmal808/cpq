import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import casementPic from '../public/casment.jpeg'
import { useEffect } from 'react'
import { themeChange } from 'theme-change'

useEffect(() => {
	themeChange(false)
}, [])

const Home = () => {
	return (
		<div>
			<Head>
				<title>Window and Door Contractor CPQ</title>
				<meta
					name='description'
					content='Configure price quote for window and door contators'
				/>
				<link rel='icon' href='/fav.png' />
			</Head>
			<div className='card w-96 bg-base-100 shadow-xl mx-auto'>
				<figure>
					<Image src={casementPic} alt='casement window' />
				</figure>
				<div className='card-body'>
					<h2 className='card-title'>Windows</h2>
					<p>Vinyl Windows</p>
					<div className='card-actions justify-end'>
						<a href='/type'>
							<button className='btn btn-primary'>Configure Now</button>
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
