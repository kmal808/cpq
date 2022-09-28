import React from 'react'
import Image from 'next/image'
import { useEffect } from 'react'
import { themeChange } from 'theme-change'

const Series = () => {
	useEffect(() => {
		themeChange(false)
	}, [])

	return (
		<div>
			<div className='carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box'>
				<div className='carousel-item'>
					<img
						src='https://placeimg.com/250/180/arch'
						className='rounded-box'
					/>
				</div>
				<div className='carousel-item'>
					<img
						src='https://placeimg.com/250/180/arch'
						className='rounded-box'
					/>
				</div>
				<div className='carousel-item'>
					<img
						src='https://placeimg.com/250/180/arch'
						className='rounded-box'
					/>
				</div>
				<div className='carousel-item'>
					<img
						src='https://placeimg.com/250/180/arch'
						className='rounded-box'
					/>
				</div>
				<div className='carousel-item'>
					<img
						src='https://placeimg.com/250/180/arch'
						className='rounded-box'
					/>
				</div>
				<div className='carousel-item'>
					<img
						src='https://placeimg.com/250/180/arch'
						className='rounded-box'
					/>
				</div>
				<div className='carousel-item'>
					<img
						src='https://placeimg.com/250/180/arch'
						className='rounded-box'
					/>
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
		</div>
	)
}

export default Series
