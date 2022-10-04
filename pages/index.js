import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import casementPic from '../public/casment.jpeg'
import { useEffect } from 'react'
import { themeChange } from 'theme-change'
import Nav from './components/Nav'

const Home = () => {
	useEffect(() => {
		themeChange(false)
	}, [])

	return (
		<div>
			<Head>
				<title>CPQ</title>
				<meta
					name='description'
					content='Configure price quote for window and door contators'
				/>
				<link rel='icon' href='../public/casement-black.jpg' />
			</Head>
			<div className='container mx-auto px-4'>
				<Nav />
				<div className='text-slate-200 m-auto'>
					<h1>Winodows Hawaii | Configure, Price, Quote</h1>
					<h4>Select Product</h4>
				</div>
				<div className='card w-96 dark:shadow-slate-200 shadow-slate-600 bg-base-100 shadow-xl mx-auto'>
					<figure>
						<Image
							src={casementPic}
							alt='casement window'
							className='bg-white'
						/>
					</figure>
					<div className='card-body'>
						<h2 className='card-title'>Windows</h2>
						<p>Ali'i Extreme Windows</p>
						<div className='card-actions justify-end'>
							<a href='/type'>
								<button className='btn btn-primary'>Configure Windows</button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
