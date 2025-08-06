import styles from './Footer.module.scss'
import logoImg from '../../assets/logo-white.svg'
import phoneImg from '../../assets/icons/phone.svg'
import emailImg from '../../assets/icons/email.svg'
import locationImg from '../../assets/icons/location.svg'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.row}>
					<div>
						<img src={logoImg} alt='logo img' />
					</div>
					<div
						style={{
							marginTop: 10,
							display: 'flex',
							gap: 93,
						}}
					>
						<ul>
							<li>
								<p className={styles.nav_link}>Katalog produktů</p>
							</li>
							<li>
								<p className={styles.nav_link}>Pronájem</p>
							</li>
							<li>
								<p className={styles.nav_link}>Kontakty</p>
							</li>
						</ul>

						<ul className={styles.contacts_list}>
							<li>
								<img
									style={{ marginRight: 6.98 }}
									src={phoneImg}
									alt='phone img'
								/>
								<span className={styles.contacts_link}>+420 774 675 115</span>
							</li>
							<li>
								<img
									style={{ marginRight: 6.98 }}
									src={emailImg}
									alt='email img'
								/>
								<span className={styles.contacts_link}>omitky-m@seznam.cz</span>
							</li>
							<li>
								<img
									style={{ marginRight: 8.56 }}
									src={locationImg}
									alt='location img'
								/>
								<span className={styles.contacts_link}> IČO 22454632</span>
							</li>
						</ul>

						<ul className={styles.info}>
							<li className={styles.info_element}>
								<p style={{ marginRight: 15 }}>Po-pa</p>
								<span>6:00-16:00 </span>
							</li>
							<li className={styles.info_element}>
								<p style={{ marginRight: 36 }}>So</p>
								<span>dle telefonicky domluvy </span>
							</li>
							<li className={styles.info_element}>
								<p style={{ marginRight: 33 }}>Ne</p>
								<span>zavřeno</span>
							</li>
						</ul>
					</div>

					<div>
						<iframe
							title='Google Maps Location'
							src='https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2564.5876084376077!2d15.76823677653077!3d50.00034067150984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTDCsDAwJzAxLjIiTiAxNcKwNDYnMTQuOSJF!5e0!3m2!1sru!2sua!4v1752684505079!5m2!1sru!2sua'
							width='218'
							height='120'
							style={{ marginBottom: 10 }}
							loading='lazy'
							referrerPolicy='no-referrer-when-downgrade'
						/>

						<div>
							<img
								style={{ marginLeft: 3.5, marginRight: 8.56 }}
								src={locationImg}
								alt='location img'
							/>
							<span className={styles.location_text}>
								Dražkovice Pardubice Areál <br /> Hakve
							</span>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.line} />
			<p className={styles.footer_text}>
				© 2025 Vše pro omítky. Všechna práva vyhrazena.
			</p>
		</footer>
	)
}

export default Footer
