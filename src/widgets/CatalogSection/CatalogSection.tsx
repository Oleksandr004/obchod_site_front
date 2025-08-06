import { useEffect, useState } from 'react'
import axios from 'axios'
import styles from './CatalogSection.module.scss'
import ProductCard from '../../components/ProductCard/ProductCard'

type Product = {
	id: string
	name: string
	price: number
	vat: number
	quantity: number
	category: string
	image: string
}

type Props = {
	filters: {
		category: string | null
		priceRange: number[]
	}
}

const ITEMS_PER_PAGE = 15

const CatalogSection = ({ filters }: Props) => {
	const [products, setProducts] = useState<Product[]>([])
	const [currentPage, setCurrentPage] = useState(1)

	useEffect(() => {
		const fetchFilteredProducts = async () => {
			try {
				const params: {
					category?: string
					minPrice?: number
					maxPrice?: number
				} = {}

				if (filters.category) params.category = filters.category
				if (filters.priceRange.length === 2) {
					params.minPrice = filters.priceRange[0]
					params.maxPrice = filters.priceRange[1]
				}
				const response = await axios.get(
					`${import.meta.env.VITE_API_BASE_URL}/api/products`,
					{
						params,
					}
				)

				setProducts(response.data)
				setCurrentPage(1)
			} catch (err) {
				console.error('Ошибка загрузки товаров:', err)
			}
		}

		fetchFilteredProducts()
	}, [filters])

	const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE)
	const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
	const currentProducts = products.slice(
		startIndex,
		startIndex + ITEMS_PER_PAGE
	)

	const handlePageChange = (page: number) => {
		if (page >= 1 && page <= totalPages) setCurrentPage(page)
	}

	const getPaginationRange = (
		current: number,
		total: number
	): (number | string)[] => {
		const delta = 1
		const range: number[] = []
		const rangeWithDots: (number | string)[] = []
		let last: number | null = null

		for (let i = 1; i <= total; i++) {
			if (
				i === 1 ||
				i === total ||
				(i >= current - delta && i <= current + delta)
			) {
				range.push(i)
			}
		}

		for (const i of range) {
			if (last !== null) {
				if (i - last === 2) {
					rangeWithDots.push(last + 1)
				} else if (i - last > 2) {
					rangeWithDots.push('...')
				}
			}
			rangeWithDots.push(i)
			last = i
		}
		return rangeWithDots
	}

	return (
		<div className={styles.container}>
			<div className={styles.grid}>
				{currentProducts.length === 0 ? (
					<p>Нет товаров по фильтру</p>
				) : (
					currentProducts.map((product) => (
						<ProductCard
							key={product.id}
							id={product.id}
							name={product.name}
							image={product.image}
							width={267}
							height={300}
						/>
					))
				)}
			</div>

			<div className={styles.pages}>
				<button
					onClick={() => handlePageChange(currentPage - 1)}
					disabled={currentPage === 1}
				>
					&lt;
				</button>

				{getPaginationRange(currentPage, totalPages).map((page, i) =>
					page === '...' ? (
						<span key={`dots-${i}`} className={styles.dots}>
							...
						</span>
					) : (
						<button
							key={page}
							onClick={() => handlePageChange(Number(page))}
							className={Number(page) === currentPage ? styles.activePage : ''}
						>
							{page}
						</button>
					)
				)}

				<button
					onClick={() => handlePageChange(currentPage + 1)}
					disabled={currentPage === totalPages}
				>
					&gt;
				</button>
			</div>
		</div>
	)
}

export default CatalogSection
