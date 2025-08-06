import styles from './KategorieSection.module.scss'
import FilterSection from '../FilterSection/FilterSection'
import CatalogSection from '../CatalogSection/CatalogSection'
import { useState } from 'react'

const KategorieSection = () => {
	const [filters, setFilters] = useState<{
		category: string | null
		priceRange: number[]
	}>({
		category: null,
		priceRange: [0, 5000],
	})

	return (
		<section>
			<div className={styles.container}>
				<h2 className={styles.title}>Lorem ipsum dolor</h2>
				<div className={styles.row}>
					<FilterSection
						onFilterChange={({ category, priceRange }) => {
							setFilters({ category, priceRange })
						}}
					/>
					<CatalogSection filters={filters} />
				</div>
			</div>
		</section>
	)
}

export default KategorieSection
