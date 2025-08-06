import styles from './ProductCard.module.scss'
import productImg from '../../assets/product img.png'
import { Link } from 'react-router-dom'

type Props = {
	width?: number
	height?: number
	id?: string
	name?: string
	image?: string
}

const ProductCard = ({ width, height, id, name, image }: Props) => {
	const imageUrl = image && image?.length > 0 ? image : productImg

	return (
		<Link to={`/${id}`}>
			<div className={styles.img}>
				<img
					style={{ width: width, height: height }}
					src={imageUrl}
					alt='product img'
				/>
			</div>
			<p className={styles.title}>{name}</p>
		</Link>
	)
}

export default ProductCard
