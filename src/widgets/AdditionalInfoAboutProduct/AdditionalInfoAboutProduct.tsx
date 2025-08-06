import styles from './AdditionalInfoAboutProduct.module.scss'
import { useState } from 'react'
import ReviewSection from './ReviewSection/ReviewSection'
import PoppyProductSection from './PoppyProductSection/PoppyProductSection'
import type { Product } from '../../types/Product'

type Props = {
	product: Product
}
const AdditionalInfoAboutProduct = ({ product }: Props) => {
	const [activeTab, setActiveTab] = useState<'Recenze' | 'Popis'>('Popis')
	return (
		<div className={styles.container}>
			<div className={styles.row}>
				{/* <p onClick={() => setActiveTab('Recenze')}>Recenze (1)</p> */}
				<p onClick={() => setActiveTab('Popis')}>Popis produktu</p>
			</div>
			{activeTab == 'Popis' && <PoppyProductSection product={product} />}
			{activeTab == 'Recenze' && <ReviewSection />}
		</div>
	)
}

export default AdditionalInfoAboutProduct
