import Head from 'next/head'
import { useEffect } from 'react'
import { themeChange } from 'theme-change'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

const SeriesGlider = () => {
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
			<div></div>
			<Footer />
		</div>
	)
}

export default SeriesGlider
