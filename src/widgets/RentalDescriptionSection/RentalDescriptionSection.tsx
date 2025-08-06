import styles from './RentalDescriptionSection.module.scss'
import plastererImg from '../../assets/plasterer.png'
import btnBg from '../../assets/btn_bg.svg'

const RentalDescriptionSection = () => {
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Profesionální omítací stroje k pronájmu</h2>
			<div className={styles.row}>
				<div>
					<img src={plastererImg} alt='plasterer img' />
				</div>
				<div>
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
						}}
					>
						<p className={styles.subtitle}>
							Hledáte spolehlivý omítací stroj pro váš projekt? Nabízíme moderní
							<br />
							zařízení za výhodné ceny.
						</p>
						<a className={styles.link} href='/'>
							Není k dispozici
						</a>
					</div>
					<p
						className={styles.text}
						style={{
							marginTop: 20,
							marginBottom: 40,
						}}
					>
						Hledáte spolehlivý omítací stroj pro váš projekt? Nabízíme moderní
						zařízení za výhodné ceny! Naše omítací stroje jsou ideálním řešením
						pro profesionální i menší stavební projekty. Umožňují rychlé a
						rovnoměrné nanášení omítky, čímž šetří váš čas i materiál. Využijte
						naše výhodné podmínky pronájmu a pracujte efektivněji bez nutnosti
						vysokých investic do vlastního zařízení.
					</p>

					<div
						style={{
							display: 'flex',
							gap: 30,
						}}
					>
						<p className={styles.price}>
							Omítací stroj <span>550 Kč</span>
						</p>
						<p className={styles.tax}>bez DPH 194</p>
					</div>

					<p
						className={styles.text}
						style={{ marginTop: 20, marginBottom: 10 }}
					>
						Pronájem je vč. hadic 20bm maltové + vzduchové, pistole, kabel 380v
						25m,čistič tubusu, míchací hřídel 1ks (v případě je nutno dokoupit
						nový kus)
					</p>
					<p className={styles.text}>
						Šnek není součástí zápůjčky je třeba ho zakoupit, máme skladem
					</p>
					<div className={styles.btn}>
						<img src={btnBg} alt='btn bg img' />
						<p>Pronajmout</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default RentalDescriptionSection
