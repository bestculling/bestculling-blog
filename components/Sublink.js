import Link from 'next/link'

export default function Sublink({ target, href, name }) {
	return (
		<>
			<Link
				href={target}
				target="_blank"
				passHref={href}
				className="text-decoration-none btn btn-outline-secondary m-3"
			>
				{name}
			</Link>
		</>
	)
}
