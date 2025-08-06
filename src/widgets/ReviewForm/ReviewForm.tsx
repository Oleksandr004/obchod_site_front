import styles from './ReviewForm.module.scss'
import starsImg from '../../assets/stars-gray.png'

const ReviewForm = () => {
	return (
		<section>
			<div className={styles.container}>
				<h2 className={styles.title}>Zanechat recenzi</h2>
				<div className={styles.stars}>
					<img src={starsImg} alt='stars img' />
				</div>
				<div className={styles.row}>
					<input placeholder='Zadejte svůj e-mail' type='text' />
					<input placeholder='Zadejte svůj e-mail' type='text' />
				</div>
				<textarea
					className={styles.textarea}
					placeholder='Zadejte svůj e-mail'
				/>
				<button className={styles.btn}>Odeslat</button>
			</div>
		</section>
	)
}

export default ReviewForm
