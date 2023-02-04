import Sublink from '../components/Sublink'
import Image from 'next/image'

export default function Index() {
	const links = [
		{
			id: 0,
			target: '/about',
			href: false,
			name: 'portfolio',
		},
		{
			id: 1,
			target: 'https://medium.com/@aukkrapolarm',
			href: true,
			name: 'Medium',
		},
		{
			id: 2,
			target: 'https://github.com/bestculling',
			href: true,
			name: 'GitHub',
		},
		{
			id: 3,
			target: 'https://www.linkedin.com/in/akkrapol-kanpong-ab362214a/',
			href: true,
			name: 'Linkedin',
		},
	]

	return (
		<>
			<div className="main d-flex flex-column justify-content-center align-items-center">
				<div className="d-flex flex-column justify-content-center align-items-center">
					<div>
						<Image
							src="/profile.jpeg"
							alt="me"
							width="300"
							height="300"
							className="rounded"
						/>
					</div>
					<h1 className="text-white fw-bolder mt-5">
						Hello there, I'm <span className='text-primary'>BESTCULLING</span>{' '}
					</h1>
					<p className="fw-bolder text-secondary">
						Interested in Software Engineer
					</p>
				</div>
				<div className="d-flex mt-3">
					{links.map((link) => {
						return (
							<div key={link.id}>
								<Sublink {...link} />
							</div>
						)
					})}
				</div>
				<style jsx>
					{`
						.main {
							height: 100vh;
							background: rgb(24 24 27);
						}
					`}
				</style>
			</div>
		</>
	)
}
