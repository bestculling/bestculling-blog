import Image from 'next/image'
import Link from 'next/link'

export default function About() {
	return (
		<div className="container py-5 mt-4">
			<div className="header">
				<h1 className="fw-bolder">Akkrapol Kanpong</h1>
				<h4 className="fw-bolder text-secondary">Interested in Software Engineer</h4>
			</div>
			<div className="intern mt-5">
				<h4 className="fw-bold">Internships</h4>
				<p className="px-4">-</p>
			</div>
			<div className="edu mt-5">
				<h4 className="fw-bold">Education</h4>
				<p className="px-4 fw-bold text-secondary">
					Bachelor of Computer Science at Suan Sunandha Rajabhat
					University | 2021 - Present
				</p>
			</div>
			<div className="projects mt-5">
				<h4 className="fw-bold mb-4">Projects</h4>
				<div className="px-4 d-flex flex-column flex-wrap gap-4">
					<div>
						<div className="head fw-bold">
							วิเคราะห์ข้อมูลการซื้อสินค้าของสมาชิกในร้านค้า 2
							สาขา เดือน สิงหาคม — ตุลาคม 2563 🛒
						</div>
						<Link
							href="https://medium.com/botnoi-classroom/botnoi-classroom-week1-%E0%B8%A7%E0%B8%B4%E0%B9%80%E0%B8%84%E0%B8%A3%E0%B8%B2%E0%B8%B0%E0%B8%AB%E0%B9%8C%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%B9%E0%B8%A5%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%8B%E0%B8%B7%E0%B9%89%E0%B8%AD%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B8%84%E0%B9%89%E0%B8%B2%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%AA%E0%B8%A1%E0%B8%B2%E0%B8%8A%E0%B8%B4%E0%B8%81%E0%B9%83%E0%B8%99%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B9%89%E0%B8%B2-2-%E0%B8%AA%E0%B8%B2%E0%B8%82%E0%B8%B2-%E0%B9%80%E0%B8%94%E0%B8%B7%E0%B8%AD%E0%B8%99-%E0%B8%AA%E0%B8%B4%E0%B8%87%E0%B8%AB%E0%B8%B2%E0%B8%84%E0%B8%A1-706398e1e928"
							target="_blank"
							className="text-secondary"
						>
							medium
						</Link>
					</div>
					<div>
						<div className="head fw-bold">
							มาลองเอาความรู้ Time Series & Trend forecasting
							มาช่วยเลือกซื้อหุ้นใน SET100 กันเถอะ!!!
						</div>
						<Link
							href="https://aukkrapolarm.medium.com/%E0%B8%A1%E0%B8%B2%E0%B8%A5%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%AD%E0%B8%B2%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%A3%E0%B8%B9%E0%B9%89-time-series-trend-forecasting-%E0%B8%A1%E0%B8%B2%E0%B8%8A%E0%B9%88%E0%B8%A7%E0%B8%A2%E0%B9%80%E0%B8%A5%E0%B8%B7%E0%B8%AD%E0%B8%81%E0%B8%8B%E0%B8%B7%E0%B9%89%E0%B8%AD%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99%E0%B9%83%E0%B8%99-set100-%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B9%80%E0%B8%96%E0%B8%AD%E0%B8%B0-fa1b132575e5"
							target="_blank"
							className="text-secondary"
						>
							medium
						</Link>
					</div>
					<div>
						<div className="head fw-bold">
							Express Typescript MVC template
						</div>
						<Link
							href="https://github.com/bestculling/Express-Typescript"
							target="_blank"
							className="text-secondary"
						>
							github
						</Link>
					</div>
					<div>
						<div className="head fw-bold">
							Bootstrap 5 mini project
						</div>
						<Link
							href="https://bestculling.github.io/bootstrap5-mini-project1/"
							target="_blank"
							className="text-secondary"
						>
							github
						</Link>
					</div>
					<div>
						<div className="head fw-bold">
							Tailwind mini project
						</div>
						<Link
							href="https://bestculling.github.io/tailwind-mini-project1/public/"
							target="_blank"
							className="text-secondary"
						>
							github
						</Link>
					</div>
					<div>
						<div className="head fw-bold">
							Online Elearning Marketplace
						</div>
						<Link
							href="https://github.com/bestculling/ELearning-Next"
							target="_blank"
							className="text-secondary"
						>
							github
						</Link>
					</div>
					<div>
						<div className="head">SEO Blog</div>
						<Link
							href="https://github.com/touchmylike2019/SEO-BLOG"
							target="_blank"
							className="text-secondary"
						>
							github
						</Link>
					</div>
				</div>
			</div>
			<div className="cer mt-5">
				<h4 className="fw-bold">Certificates</h4>
				<div className="mt-4 px-4 d-flex flex-wrap gap-5">
					<div>
						<Image
							src="/botnoi.jpeg"
							alt="me"
							width="300"
							height="200"
							className='rounded'
						/>
						<p className="px-2 text-center mt-3">
							Botnoi DSE class 2
						</p>
					</div>
					<div>
						<Image
							src="/face_detect.png"
							alt="me"
							width="300"
							height="200"
							className='rounded'
						/>
						<p className="px-2 text-center mt-3">
							Face Detection Processing
						</p>
					</div>
				</div>
			</div>
			<div className="skills mt-5">
				<h4 className="fw-bold">Skills</h4>
				<div className="items px-4 d-flex flex-wrap gap-4">
					<div className="item">Javascript</div>
					<div className="item">Typescript</div>
					<div className="item">HTML</div>
					<div className="item">CSS</div>
					<div className="item">Python</div>
					<div className="item">Java</div>
					<div className="item">Node.js</div>
					<div className="item">Express.js</div>
					<div className="item">React.js</div>
					<div className="item">Next.js</div>
					<div className="item">Pandas</div>
					<div className="item">Numpy</div>
					<div className="item">Matplotlib</div>
					<div className="item">MongoDB</div>
					<div className="item">MySQL</div>
					<div className="item">Git</div>
				</div>
			</div>
		</div>
	)
}
