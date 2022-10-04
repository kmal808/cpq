const Nav = () => {
	return (
		<div>
			<div className='navbar bg-base-100'>
				<div className='navbar-start'>
					<div className='dropdown'>
						<label tabIndex={0} className='btn btn-ghost lg:hidden'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-5 w-5'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M4 6h16M4 12h8m-8 6h16'
								/>
							</svg>
						</label>
						<ul
							tabIndex={0}
							className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
						>
							<li>
								<a>Item 1</a>
							</li>
							<li tabIndex={0}>
								<a className='justify-between'>
									Parent
									<svg
										className='fill-current'
										xmlns='http://www.w3.org/2000/svg'
										width='24'
										height='24'
										viewBox='0 0 24 24'
									>
										<path d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' />
									</svg>
								</a>
								<ul className='p-2'>
									<li>
										<a>Submenu 1</a>
									</li>
									<li>
										<a>Submenu 2</a>
									</li>
								</ul>
							</li>
							<li>
								<a>Item 3</a>
							</li>
						</ul>
					</div>
					<a className='btn btn-ghost normal-case text-xl'>CPQ</a>
				</div>
				<div className='navbar-center hidden lg:flex'>
					<ul className='menu menu-horizontal p-0'>
						<li>
							<a>Item 1</a>
						</li>
						<li tabIndex={0}>
							<a>
								Parent
								<svg
									className='fill-current'
									xmlns='http://www.w3.org/2000/svg'
									width='20'
									height='20'
									viewBox='0 0 24 24'
								>
									<path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' />
								</svg>
							</a>
							<ul className='p-2'>
								<li>
									<a>Submenu 1</a>
								</li>
								<li>
									<a>Submenu 2</a>
								</li>
							</ul>
						</li>
						<li>
							<a>Item 3</a>
						</li>
					</ul>
				</div>
				<div className='navbar-end'>
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
			</div>
		</div>
	)
}

export default Nav
