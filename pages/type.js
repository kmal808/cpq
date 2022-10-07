import React from 'react'
import Image from 'next/image'
import casementBlackPic from '../public/images/casement-black.jpeg'
import singleHungPic from '../public/images/single-hung-black.jpeg'
import { useEffect } from 'react'
import { themeChange } from 'theme-change'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Link from 'next/link'

const Type = () => {
	useEffect(() => {
		themeChange(false)
	}, [])

	return (
		<div className='container min-h-screen mx-auto px-4'>
			<Nav />
			<div className='flex w-full'>
				<div className='m-auto'>
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
			</div>
			<Footer />
			<Link title='back' href='/'>
				<button className='btn btn-primary'>Go Back</button>
			</Link>
		</div>
	)
}

export default Type
