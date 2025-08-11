import styles from './RepairDescriptionSection.module.scss'
import PlastererRepairImg from '../../assets/plasterer-repair.png'

import contactUsImg from '../../assets/HowIsTheRepairSection/contactUs.svg'
import DiagnosticsImg from '../../assets/HowIsTheRepairSection/Diagnostics.svg'
import CorrectionImg from '../../assets/HowIsTheRepairSection/Correction.svg'
import TestingImg from '../../assets/HowIsTheRepairSection/Testing.svg'

import orrangeBtnBg from '../../assets/HowIsTheRepairSection/orrange_btn_bg.svg'
import whiteBtnBg from '../../assets/HowIsTheRepairSection/white_btn_bg.svg'

import { Link } from 'react-router-dom'

const RepairDescriptionSection = () => {
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>
				Oprava omítacích strojů rychle a kvalitně
			</h2>
			<div className={styles.row}>
				<div>
					<img src={PlastererRepairImg} alt='Plasterer Repair Img' />
				</div>

				<div>
					<div
						style={{
							display: 'flex',
							gap: 84,
						}}
					>
						<p className={styles.subtitle}>
							Váš omítací stroj nefunguje správně? Postaráme se o rychlou a{' '}
							<br />
							spolehlivou opravu.
						</p>
						<p className={styles.not_available_link}>Není k dispozici</p>
					</div>

					<div>
						<h3 className={styles.how_it_link}>Jak probíhá oprava?</h3>
						<div>
							<div className={styles.element}>
								<div>
									<img src={contactUsImg} alt='contact us img' />
								</div>
								<div>
									<p className={styles.name}>Kontaktujte nás</p>
									<p className={styles.description}>
										Popište problém a domluvíme se na servisu.
									</p>
								</div>
							</div>
							<div className={styles.element}>
								<div>
									<img src={DiagnosticsImg} alt='diagnostic img' />
								</div>
								<div>
									<p className={styles.name}>Diagnostika</p>
									<p className={styles.description}>
										Zjistíme závadu a navrhneme řešení.
									</p>
								</div>
							</div>
							<div className={styles.element}>
								<div>
									<img src={CorrectionImg} alt='correction img' />
								</div>
								<div>
									<p className={styles.name}>Oprava</p>
									<p className={styles.description}>
										Používáme kvalitní díly a profesionální nástroje.
									</p>
								</div>
							</div>
							<div className={styles.element}>
								<div>
									<img src={TestingImg} alt='testing img' />
								</div>
								<div>
									<p className={styles.name}>Testování a předání</p>
									<p className={styles.description}>
										Zaručujeme funkčnost a spokojenost.
									</p>
								</div>
							</div>

							<div className={styles.btn_row}>
								<div className={styles.btn}>
									<img src={orrangeBtnBg} alt='orrange btn bg img' />
									<p>Objednat opravu</p>
								</div>
								<Link to='/contact' className={styles.btn}>
									<img src={whiteBtnBg} alt='white btn bg img' />
									<p style={{ left: 56 }}>Kontaktujte nás</p>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default RepairDescriptionSection
