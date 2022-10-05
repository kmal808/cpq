import React from 'react'
import Image from 'next/image'
import casementBlackPic from '../public/casement-black.jpeg'
import singleHungPic from '../public/single-hung-black.jpeg'
import { useEffect } from 'react'
import { themeChange } from 'theme-change'
import Nav from './components/Nav'
import Footer from './components/Footer'

const Type = () => {
	useEffect(() => {
		themeChange(false)
	}, [])

	return (
		<div className='container mx-auto px-4'>
			<Nav />
			<div className='flex w-full'>
				<div>
					<h1>Type</h1>
					<h4>Select Your Window Type</h4>
				</div>
				<div className='card w-96 shadow-slate-600 bg-base-100 shadow-xl mx-auto'>
					<figure>
						<Image src={casementBlackPic} alt='casement window' />
					</figure>
					<div className='card-body'>
						<h2 className='card-title'>Hinged Windows</h2>
						<p>Casement and Awning</p>
						<div className='card-actions'>
							<a href='/serieshinged'>
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
						<h2 className='card-title'>Sliding Windows</h2>
						<p>Slider and Hung</p>
						<div className='card-actions'>
							<a href='/seriesslider'>
								<button className='btn btn-primary'>Configure Now</button>
							</a>
						</div>
					</div>
				</div>
				<a className='w-full' href='/'>
					<button className='btn btn-primary'>Go Back</button>
				</a>
			</div>
			<Footer />
		</div>
	)
}

export default Type
