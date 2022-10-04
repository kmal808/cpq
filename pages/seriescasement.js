import React from 'react'
import Nav from './components/Nav'
import Image from 'next/image'
import { useEffect } from 'react'
import { themeChange } from 'theme-change'
import { casementLeft } from '/public/casement-left.png'
import { casementRight } from '/public/casement-right.png'

const SeriesCasement = () => {
	useEffect(() => {
		themeChange(false)
	}, [])

	return (
		<div>
			<Nav />
			<div className='card lg:card-side bg-base-100 shadow-xl'>
				<figure>
					<Image src={casementLeft} alt='casement window' />
				</figure>
				<div className='card-body'>
					<h2 className='card-title'>Casement Left Hinge</h2>
					<p>Hinged window with crank</p>
					<div className='card-actions justify-end'>
						<button className='btn btn-primary'>Configure</button>
					</div>
				</div>
			</div>
			<div className='card lg:card-side bg-base-100 shadow-xl'>
				<figure>
					<Image src={casementRight} alt='casement window' />
				</figure>
				<div className='card-body'>
					<h2 className='card-title'>Casement Right Hinge</h2>
					<p>Hinged window with crank</p>
					<div className='card-actions justify-end'>
						<button className='btn btn-primary'>Configure</button>
					</div>
				</div>
			</div>
			<div className='card lg:card-side bg-base-100 shadow-xl'>
				<figure>
					<img src='https://placeimg.com/400/400/arch' alt='Album' />
				</figure>
				<div className='card-body'>
					<h2 className='card-title'>New album is released!</h2>
					<p>Click the button to listen on Spotiwhy app.</p>
					<div className='card-actions justify-end'>
						<button className='btn btn-primary'>Listen</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SeriesCasement
