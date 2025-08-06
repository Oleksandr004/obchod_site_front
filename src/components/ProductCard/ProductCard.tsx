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
	const fallbackImage =
		typeof productImg === 'string' ? productImg : String(productImg)

	// Функция нормализации пути картинки: берет только путь (pathname) из полного URL
	const normalizeImageUrl = (url: string | undefined) => {
		if (!url) return fallbackImage

		try {
			// Если url — полный URL с доменом, вернем только путь (например /obrazky/0002/image.jpg)
			const parsedUrl = new URL(url)
			return parsedUrl.pathname
		} catch {
			// Если не URL, вернем как есть
			return url
		}
	}

	const imageUrl = normalizeImageUrl(image)

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
