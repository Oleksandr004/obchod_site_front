import ContactSection from '../widgets/ContactSection/ContactSection'
import { useEffect } from 'react'

const ContactPage = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<div style={{ marginTop: 80 }}>
			<ContactSection isHaveMap={true} />
		</div>
	)
}

export default ContactPage
