import { useEffect, useState } from 'react'
import axios from 'axios'
import styles from './HeroKategorieSection.module.scss'
import ProductCard from '../../components/ProductCard/ProductCard'

type Product = {
	id: string
	name: string
	image: string
	price: number
	vat: number
	quantity: number
}

const HeroKategorieSection = () => {
	const [randomProducts, setRandomProducts] = useState<Product[]>([])

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await axios.get<Product[]>(
					`${import.meta.env.VITE_API_BASE_URL}/api/products/`
				)
				const shuffled = [...response.data].sort(() => 0.5 - Math.random())
				const selected = shuffled.slice(0, 15)
				setRandomProducts(selected)
			} catch (error) {
				console.error('Ошибка загрузки продуктов:', error)
			}
		}

		fetchProducts()
	}, [])

	return (
		<section>
			<div className={styles.container}>
				<h2 className={styles.title}>Kategorie</h2>
				<div className={styles.grid}>
					{randomProducts.map((product) => (
						<ProductCard
							key={product.id}
							id={product.id}
							name={product.name}
							image={product.image}
							width={367}
							height={268}
						/>
					))}
				</div>
			</div>
		</section>
	)
}

export default HeroKategorieSection
