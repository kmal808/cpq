import React from 'react'
import { useEffect } from 'react'
import { themeChange } from 'theme-change'

const Nav = () => {
	useEffect(() => {
		themeChange(false)
	}, [])

	return (
		<div>
			<div className='navbar bg-base-100 min-h-6'>
				<div className='flex-1'>
					<a className='btn btn-ghost normal-case text-xl'>CPQ</a>
				</div>
				<div className='flex-none'>
					<div className='m-5'>
						<h2 className='mb-4 text-2xl text-slate-300 font-bold'>Toggle</h2>
						🌞
						<div className='inline-block w-10'>
							<span
								data-toggle-theme='corporate,business'
								data-act-class='ACTIVECLASS'
								className='border rounded-full border-slate-300 flex items-center cursor-pointer w-10 transition-all duration-300 ease-in-out pl-0'
							>
								<span className='rounded-full w-3 h-3 m-1 bg-slate-300'></span>
							</span>
						</div>
						🌚
					</div>
				</div>
			</div>
		</div>
	)
}

export default Nav
