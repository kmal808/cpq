import Head from 'next/head'
import { useEffect } from 'react'
import { themeChange } from 'theme-change'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { singleHung } from '../public/images/sh.png'
import Image from 'next/image'

const SeriesHung = () => {
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
			<div className='container'>
				<div className='card lg:card-side bg-base-100 shadow-xl'>
					<figure>
						<Image src={singleHung} alt='single hung window' />
					</figure>
					<div className='card-body'>
						<h2 className='card-title'>Single Unit</h2>
						<p>Single Unit Double or Single Hung</p>
						<div className='card-actions justify-end'>
							<button className='btn btn-primary'>Configure</button>
						</div>
					</div>
				</div>
				<div className='card lg:card-side bg-base-100 shadow-xl'>
					<figure>
						<Image src={singleHung} alt='single hung window' />
					</figure>
					<div className='card-body'>
						<h2 className='card-title'>Combo Unit</h2>
						<p>Combo Unit Double or Single Hung</p>
						<div className='card-actions justify-end'>
							<button className='btn btn-primary'>Configure</button>
						</div>
					</div>
				</div>
				<div className='card lg:card-side bg-base-100 shadow-xl'>
					<figure>
						<Image src={singleHung} alt='single hung window' />
					</figure>
					<div className='card-body'>
						<h2 className='card-title'>Hung PW Combo</h2>
						<p>Combo Unit with PW in between Hung Windows</p>
						<div className='card-actions justify-end'>
							<button className='btn btn-primary'>Configure</button>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default SeriesHung
