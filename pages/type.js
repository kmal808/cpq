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
		<div>
			<div>
				<h1>Type</h1>
				<h4>Select Your Window Type</h4>
				<div className='flex flex-row justify-center'>
					<div className='card w-96 bg-base-100 shadow-xl mx-auto'>
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
					<div className='card w-96 bg-base-100 shadow-xl mx-auto'>
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
				<button
					data-toggle-theme='dark,light'
					data-act-class='ACTIVECLASS'
				></button>
			</div>
		</div>
	)
}

export default Type
