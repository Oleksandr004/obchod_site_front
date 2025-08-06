import styles from './ContactSection.module.scss'
import SendMessageForm from './SendMessageForm/SendMessageForm'
import ContactInfo from './ContactInfo/ContactInfo'
import mapImg from '../../assets/contact-map.png'

type Props = {
	title?: string
	isHaveMap?: boolean
}

const ContactSection = ({ title, isHaveMap }: Props) => {
	return (
		<>
			<div className={styles.container}>
				{title && <h2 className={styles.title}>{title}</h2>}
				<div className={styles.row}>
					<SendMessageForm />
					<ContactInfo />
				</div>
			</div>
			{isHaveMap && (
				<div>
					<img className={styles.map} src={mapImg} alt='map img' />
				</div>
			)}
		</>
	)
}

export default ContactSection
