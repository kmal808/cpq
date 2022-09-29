import React from 'react'
import Image from 'next/image'
import casementBlackPic from '../public/casement-black.jpeg'
import singleHungPic from '../public/single-hung-black.jpeg'
import { useEffect } from 'react'
import { themeChange } from 'theme-change'

const SeriesSlider = () => {
	useEffect(() => {
		themeChange(false)
	}, [])

	return (
		<div className='container mx-auto px-4'>
			<h1>Operation</h1>
			<h4>Select Your Window Type</h4>
			<div className='flex w-full'>
				<div className='card w-96 dark:shadow-slate-200 shadow-slate-600 bg-base-100 shadow-xl mx-auto'>
					<figure>
						<Image src={casementBlackPic} alt='casement window' />
					</figure>
					<div className='card-body'>
						<h2 className='card-title'>Gliders</h2>
						<p>Horizontal type sliders</p>
						<div className='card-actions justify-end'>
							<a href='/seriesglider'>
								<button className='btn btn-primary'>Configure Now</button>
							</a>
						</div>
					</div>
				</div>
				<div className='divider divider-horizontal'>OR</div>
				<div className='card w-96 dark:shadow-slate-200 shadow-slate-600 bg-base-100 shadow-xl mx-auto'>
					<figure>
						<Image src={singleHungPic} alt='hung window' />
					</figure>
					<div className='card-body'>
						<h2 className='card-title'>Hung Windows</h2>
						<p>Up And Down type sliders</p>
						<div className='card-actions justify-end'>
							<a href='/serieshung'>
								<button className='btn btn-primary'>Configure Now</button>
							</a>
						</div>
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

export default SeriesSlider
