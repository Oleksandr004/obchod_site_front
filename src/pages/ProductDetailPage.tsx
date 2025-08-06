import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import SimilarProductSection from '../widgets/SimilarProductSection/SimilarProductSection'
import AboutProductSection from '../widgets/AboutProductSection/AboutProductSection'
import AdditionalInfoAboutProduct from '../widgets/AdditionalInfoAboutProduct/AdditionalInfoAboutProduct'

import type { Product } from '../types/Product'

const ProductDetailPage = () => {
	const { id } = useParams<{ id: string }>()
	const [product, setProduct] = useState<Product | null>(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		window.scrollTo(0, 0)
		const fetchProduct = async () => {
			try {
				const response = await axios.get(
					`${import.meta.env.VITE_API_BASE_URL}/api/products/${id}`
				)
				setProduct(response.data)
			} catch {
				setError('Ошибка при загрузке товара')
			} finally {
				setLoading(false)
			}
		}

		if (id) fetchProduct()
	}, [id])

	if (loading) return <p>Загрузка...</p>
	if (error || !product) return <p>{error || 'Товар не найден'}</p>

	return (
		<>
			<AboutProductSection product={product} />
			<AdditionalInfoAboutProduct product={product} />
			<SimilarProductSection currentProduct={product} />
		</>
	)
}

export default ProductDetailPage
