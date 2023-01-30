import Sublink from '../components/Sublink'
import Image from 'next/image'

export default function Index() {
	return (
		<>
			<div className="menu">
				<div className="content">
					<h1 className="mb-5 head fw-bolder">Akkrapol Kanpong</h1>
					<div>
						<Image
							src="/profile.jpeg"
							alt="me"
							width="300"
							height="300"
							className='profile'
						/>
					</div>
					<p className="mt-5 position fw-bolder text-secondary">
						Interested in Software Engineer
					</p>
				</div>
				<div className="sub_menu">
					<Sublink target="/about" href={false} name="About me" />
					<Sublink
						target="https://medium.com/@aukkrapolarm"
						href={true}
						name="Medium"
					/>
					<Sublink
						target="https://github.com/bestculling"
						href={true}
						name="Github"
					/>
					<Sublink
						target="https://www.linkedin.com/in/akkrapol-kanpong-ab362214a/"
						href={true}
						name="Linkedin"
					/>
				</div>
			</div>
		</>
	)
}
