import styles from './HeroBanner.module.scss'
import bgBtn from '../../assets/btn_bg.png'
import { Link } from 'react-router-dom'

const HeroBanner = () => {
	return (
		<section className={styles.hero_banner}>
			<div className={styles.container}>
				<h1 className={styles.title}>
					Profesionální omítací stroje k pronájmu
				</h1>
				<p className={styles.subtitle}>
					Hledáte kvalitní omítací stroj pro váš projekt? Nabízíme moderní
					zařízení <br /> za výhodné ceny. Rychlá rezervace, odborné
					poradenství, možnost dopravy.
				</p>
				<Link to='/machine-rental' className={styles.btn}>
					<img src={bgBtn} alt='button background' />
					<p>Pronájem</p>
				</Link>
			</div>
		</section>
	)
}

export default HeroBanner
