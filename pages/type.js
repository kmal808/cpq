import React from 'react'
import Image from 'next/image'
import casementBlackPic from '../public/casement-black.jpeg'
import singleHungPic from '../public/single-hung-black.jpeg'
import { useEffect } from 'react'
import { themeChange } from 'theme-change'

const Type = () => {
	useEffect(() => {
		themeChange(false)
	}, [])

	return (
		<div className='container mx-auto px-4'>
			<h1>Type</h1>
			<h4>Select Your Window Type</h4>
			<div className='flex w-full'>
				<div className='grid flex-grow card w-96 bg-base-100 shadow-xl mx-auto place-items-right'>
					<figure>
						<Image src={casementBlackPic} alt='casement window' />
					</figure>
					<div className='card-body'>
						<h2 className='card-title'>Hinged Windows</h2>
						<p>Casement and Awning</p>
						<div className='card-actions justify-end'>
							<a href='/'>
								<button className='btn btn-primary'>Configure Now</button>
							</a>
						</div>
					</div>
				</div>
				<div className='divider divider-horizontal'>OR</div>
				<div className='grid flex-grow card w-96 bg-base-100 shadow-xl mx-auto place-items-right'>
					<figure>
						<Image src={singleHungPic} alt='hung window' />
					</figure>
					<div className='card-body'>
						<h2 className='card-title'>Sliding Windows</h2>
						<p>Slider and Hung</p>
						<div className='card-actions justify-end'>
							<a href='/'>
								<button className='btn btn-primary'>Configure Now</button>
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className='m-5'>
				<h2 className='mb-4 text-2xl font-bold'>Toggle</h2>
				🌞
				<div className='inline-block w-10'>
					<span
						data-toggle-theme='business'
						data-act-class='pl-4'
						className='border rounded-full flex items-center cursor-pointer w-10 transition-all duration-300 ease-in-out pl-0'
					>
						<span className='rounded-full w-3 h-3 m-1'></span>
					</span>
				</div>
				🌚
			</div>
			<a href='/'>
				<button className='btn'></button>
			</a>
		</div>
	)
}

export default Type
