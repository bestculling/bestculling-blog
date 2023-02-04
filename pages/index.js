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
					<div className="d-flex flex-column justify-content-center align-items-center">
						<div className="text-white mt-5 ml-sm-2">
							<h1>Hello there, I'm <span className="fw-bold text-primary">BESTCULLING</span>{' '}</h1>
						</div>
						<div className="fw-bolder text-secondary">
							<p>Interested in Software Engineer</p>
						</div>
					</div>
				</div>
				<div className="d-flex mt-3 gap-2 gap-sm-5">
					{links.map((link) => {
						return (
							<div key={link.id}>
								<Sublink {...link} />
							</div>
						)
					})}
				</div>
			</div>
		</>
	)
}
