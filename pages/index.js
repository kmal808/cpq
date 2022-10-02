import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import casementPic from '../public/casment.jpeg'
import { useEffect } from 'react'
import { themeChange } from 'theme-change'

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
				<link rel='icon' href='/fav.png' />
			</Head>
			<div className='text-slate-200'>
				<h1>Winodows Hawaii | Configure, Price, Quote</h1>
				<h4>Select Product</h4>
			</div>
			<div className='card w-96 dark:shadow-slate-200 shadow-slate-600 bg-base-100 shadow-xl mx-auto'>
				<figure>
					<Image src={casementPic} alt='casement window' className='bg-white' />
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
			<div className='m-5'>
				<h2 className='mb-4 text-2xl font-bold text-slate-300'>Toggle</h2>
				🌞
				<div className='inline-block w-10'>
					<span
						data-toggle-theme='business'
						data-act-class='pl-4'
						className='border rounded-full border-slate-500 flex items-center cursor-pointer w-10 transition-all duration-300 ease-in-out pl-0'
					>
						<span className='rounded-full w-3 h-3 m-1 bg-slate-300'></span>
					</span>
				</div>
				🌚
			</div>
		</div>
	)
}

export default Home
