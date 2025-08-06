import styles from './SimilarProdutCard.module.scss'
import productPhoto from '../../assets/similarPhoto.png'
import starsImg from '../../assets/stars.png'
import { Link } from 'react-router-dom'

type Props = {
	name: string
	image: string
	id: string
}

const SimilarProdutCard = ({ image, name, id }: Props) => {
	const imgUrl = image.length > 0 ? image : productPhoto

	return (
		<div className={styles.container}>
			<img className={styles.image} src={imgUrl} alt='photo similar product' />
			<p className={styles.name}>{name}</p>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
				}}
			>
				<p className={styles.price}>550 Kč</p>
				<div>
					<img src={starsImg} alt='' />
				</div>
			</div>
			<Link to={`/${id}`} className={styles.btn}>
				Zobrazit produkt
			</Link>
		</div>
	)
}

export default SimilarProdutCard
