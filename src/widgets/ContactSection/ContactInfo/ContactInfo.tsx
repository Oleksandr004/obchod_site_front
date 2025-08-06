import styles from './ContactInfo.module.scss'
import phoneIcon from '../../../assets/icons/contact-phone.svg'
import emailIcon from '../../../assets/icons/contact-email.svg'
import locationIcon from '../../../assets/icons/contact-location.svg'

const ContactInfo = () => {
	return (
		<div className={styles.container}>
			<div className={styles.body}>
				<h2 className={styles.title}>Kontakty</h2>
				<div style={{ display: 'flex', flexDirection: 'column', gap: 25 }}>
					<div className={styles.contact_element}>
						<div>
							<img src={phoneIcon} alt='phone img' />
						</div>
						<p>+420 774 675 115</p>
					</div>
					<div className={styles.contact_element}>
						<div>
							<img src={emailIcon} alt='email img' />
						</div>
						<p>omitky-m@seznam.cz</p>
					</div>
					<div className={styles.contact_element}>
						<div>
							<img src={locationIcon} alt='location img' />
						</div>
						<p>IČO 22454632</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ContactInfo
