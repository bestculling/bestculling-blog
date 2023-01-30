import Link from 'next/link'

export default function Sublink({ target, href, name }) {
	return (
		<>
			<div className="sub_link">
				<Link
					href={target}
					target="_blank"
					passHref={href}
					className="link"
				>
					{name}
				</Link>
			</div>
		</>
	)
}
