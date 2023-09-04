import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import casementPic from '../public/images/casment.jpeg'
import { useEffect } from 'react'
import { themeChange } from 'theme-change'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const Home = () => {
	useEffect(() => {
		themeChange(false)
	}, [])

	return (
		<div>
			<Head>
				<title>CPQ</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
				<meta
					name='description'
					content='Configure price quote for window and door contators'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Nav />
			<div className='container min-h-screen mx-auto px-4'>
				<div className='text-slate-200 text-xl my-4'>
					<h1>Winodows Hawaii | Configure, Price, Quote</h1>
					<h4 className='flex justify-center'>Select Product</h4>
				</div>
				<div className='card w-96 shadow-slate-400 bg-base-100 shadow-xl mx-auto'>
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
						<div className='card-actions'>
							<a href='/type'>
								<button className='btn btn-primary'>Configure Windows</button>
							</a>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default Home
