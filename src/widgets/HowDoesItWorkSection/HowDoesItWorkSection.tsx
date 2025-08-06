import styles from './HowDoesItWorkSection.module.scss'
import firstItemImg from '../../assets/HowDoesItWorkSection/1.svg'
import secondItemImg from '../../assets/HowDoesItWorkSection/2.svg'
import thirdItemImg from '../../assets/HowDoesItWorkSection/3.svg'
import fourtItemImg from '../../assets/HowDoesItWorkSection/4.svg'

const HowDoesItWorkSection = () => {
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Jak to funguje?</h2>
			<div className={styles.grid}>
				<div className={styles.grid_element}>
					<div>
						<img src={firstItemImg} alt='first item img' />
					</div>
					<div>
						<p className={styles.name}>Vyberte si stroj</p>
						<p className={styles.description}>
							Zvolte model, který nejlépe vyhovuje vašim potřebám.
						</p>
					</div>
				</div>
				<div className={styles.grid_element}>
					<div>
						<img src={secondItemImg} alt='second item img' />
					</div>
					<div>
						<p className={styles.name}>Rezervujte online</p>
						<p className={styles.description}>
							Vyplňte vzorce podle vlastního uvážení.
						</p>
					</div>
				</div>
				<div className={styles.grid_element}>
					<div>
						<img src={thirdItemImg} alt='third item img' />
					</div>
					<div>
						<p className={styles.name}>Převzetí stroje</p>
						<p className={styles.description}>
							Osobní odběr nebo doručení na místo.
						</p>
					</div>
				</div>
				<div className={styles.grid_element}>
					<div>
						<img src={fourtItemImg} alt='fourt item img' />
					</div>
					<div>
						<p className={styles.name}>Vraťte se po dokončení</p>
						<p className={styles.description}>
							Po ukončení prací nám stroj vrátíte.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HowDoesItWorkSection
