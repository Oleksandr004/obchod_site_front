import { useEffect, useState } from 'react'
import styles from './SimilarProductSection.module.scss'
import SimilarProdutCard from '../../components/SimilarProdutCard/SimilarProdutCard'
import axios from 'axios'

import type { Product } from '../../types/Product'

type Props = {
	currentProduct: Product
}

const SimilarProductSection = ({ currentProduct }: Props) => {
	const [similarProducts, setSimilarProducts] = useState<Product[]>([])

	useEffect(() => {
		const fetchSimilarProducts = async () => {
			try {
				const response = await axios.get(
					`${import.meta.env.VITE_API_BASE_URL}/api/products`
				)
				const allProducts: Product[] = response.data

				// Фильтруем текущий товар и берём 4 случайных
				const filtered = allProducts.filter((p) => p.id !== currentProduct.id)
				const shuffled = filtered.sort(() => 0.5 - Math.random())
				const randomFour = shuffled.slice(0, 4)

				setSimilarProducts(randomFour)
			} catch (error) {
				console.error('Ошибка при загрузке похожих товаров:', error)
			}
		}

		fetchSimilarProducts()
	}, [currentProduct.id])

	return (
		<section>
			<div className={styles.container}>
				<h2 className={styles.title}>Podobné produkty</h2>
				<div className={styles.row}>
					{similarProducts.map((product) => (
						<SimilarProdutCard
							key={product.id}
							id={product.id}
							name={product.name}
							image={product.image}
						/>
					))}
				</div>
			</div>
		</section>
	)
}

export default SimilarProductSection
