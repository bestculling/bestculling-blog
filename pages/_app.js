import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../public/css/styles.css'

export default function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
			<link rel="icon" type="image/png" href="/icons.png" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossorigin
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Lato:wght@100;400;700&display=swap"
					rel="stylesheet"
				/>
				<title>BESTCULLING</title>
			</Head>
			<Component {...pageProps} />
		</>
	)
}
