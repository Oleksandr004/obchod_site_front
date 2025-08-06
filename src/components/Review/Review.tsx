import styles from './Review.module.scss'
import reviewLogo from '../../assets/review_photo.png'
import starsImg from '../../assets/stars.png'

const Review = () => {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.row}>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							gap: 15,
						}}
					>
						<img src={reviewLogo} alt='review logo' />
						<img src={starsImg} alt='stars img' />
					</div>
					<div>
						<p className={styles.name}>Andrey</p>
						<p className={styles.text}>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type <br /> and scrambled it to make a type specimen book. It has
							survived not.
						</p>
					</div>
				</div>
			</div>
			<div className={styles.line} />
		</>
	)
}

export default Review
