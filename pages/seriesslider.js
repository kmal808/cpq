import React from 'react'
import Image from 'next/image'
import casementBlackPic from '../public/casement-black.jpeg'
import singleHungPic from '../public/single-hung-black.jpeg'
import { useEffect } from 'react'
import { themeChange } from 'theme-change'
import Nav from './components/Nav'
import Footer from './components/Footer'

const SeriesSlider = () => {
	useEffect(() => {
		themeChange(false)
	}, [])

	return (
		<div className='container mx-auto px-4'>
			<Nav />
			<h1>Operation</h1>
			<h4>Select Your Window Type</h4>
			<div className='flex w-full h-full'>
				<div className='card w-96 shadow-slate-600 bg-base-100 shadow-xl mx-auto'>
					<figure>
						<Image src={casementBlackPic} alt='casement window' />
					</figure>
					<div className='card-body'>
						<h2 className='card-title'>Gliders</h2>
						<p>Horizontal type sliders</p>
						<div className='card-actions'>
							<a href='/seriesglider'>
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
						<h2 className='card-title'>Hung Windows</h2>
						<p>Up And Down type sliders</p>
						<div className='card-actions'>
							<a href='/serieshung'>
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

export default SeriesSlider
