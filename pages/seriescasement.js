import React from 'react'
import Nav from '../components/Nav'
import Image from 'next/image'
import { useEffect } from 'react'
import { themeChange } from 'theme-change'
import { casementLeft } from '../public/images/casement-left.png'
import { casementRight } from '../public/images/casement-right.png'
import { fixedCasement } from '../public/images/fixed-casement.png'

const SeriesCasement = () => {
	useEffect(() => {
		themeChange(false)
	}, [])

	return (
		<div className='container min-h-screen mx-auto px-4'>
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
					<Image src={fixedCasement} alt='picture window' />
				</figure>
				<div className='card-body'>
					<h2 className='card-title'>Fixed Casement</h2>
					<p>
						Fixed glass picture window made using the frame and sash of a
						casement
					</p>
					<div className='card-actions justify-end'>
						<button className='btn btn-primary'>Configure</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SeriesCasement
