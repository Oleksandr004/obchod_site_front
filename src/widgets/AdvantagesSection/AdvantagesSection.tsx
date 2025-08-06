import styles from './AdvantagesSection.module.scss'
import DeliveryImg from '../../assets/HowDoesItWorkSection/Delivery.svg'
import ServiceImg from '../../assets/HowDoesItWorkSection/Servis.svg'
import PriceImg from '../../assets/HowDoesItWorkSection/Price.svg'

const AdvantagesSection = () => {
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Výhody pronájmu u nás</h2>
			<div className={styles.row}>
				<div className={styles.element}>
					<div>
						<img src={DeliveryImg} alt='delivery img' />
					</div>
					<p>Doručení</p>
				</div>
				<div className={styles.element}>
					<div>
						<img src={ServiceImg} alt='service img' />
					</div>
					<p>Servis</p>
				</div>
				<div className={styles.element}>
					<div>
						<img src={PriceImg} alt='price img' />
					</div>
					<p>Nízké ceny</p>
				</div>
			</div>
		</div>
	)
}

export default AdvantagesSection
