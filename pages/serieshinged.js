import React from 'react'
import Image from 'next/image'
import Nav from './components/Nav'
import casementBlackPic from '../public/casement-black.jpeg'
import singleHungPic from '../public/single-hung-black.jpeg'
import { useEffect } from 'react'
import { themeChange } from 'theme-change'
import Footer from './components/Footer'

const SeriesHinged = () => {
	useEffect(() => {
		themeChange(false)
	}, [])

	return (
		<div className='container mx-auto px-4'>
			<Nav />
			<div className='m-auto'>
				<h1>Type: Hinged</h1>
				<h4>Select Your Window Type</h4>
			</div>
			<div className='flex w-full h-full'>
				<div className='card w-96 shadow-slate-600 bg-base-100 shadow-xl mx-auto'>
					<figure>
						<Image src={casementBlackPic} alt='casement window' />
					</figure>
					<div className='card-body'>
						<h2 className='card-title'>Casement Windows</h2>
						<p>Hinged type casement</p>
						<div className='card-actions'>
							<a href='/seriescasement'>
								<button className='btn btn-primary'>Configure Now</button>
							</a>
						</div>
					</div>
				</div>
				<div className='divider divider-horizontal'>OR</div>
				<div className='card w-96 shadow-slate-600 bg-base-100 shadow-xl mx-auto'>
					<figure>
						<Image src={singleHungPic} alt='hung window' />
					</figure>
					<div className='card-body'>
						<h2 className='card-title'>Awning Windows</h2>
						<p>Hinged top awning</p>
						<div className='card-actions'>
							<a href='/seriesawning'>
								<button className='btn btn-primary'>Configure Now</button>
							</a>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default SeriesHinged
