import type { Product } from '../../../types/Product'
import styles from './PoppyProductSection.module.scss'

type Props = {
	product: Product
}

const PoppyProductSection = ({ product }: Props) => {
	return (
		<div>
			<table className={styles.table}>
				<table className={styles.table}>
					<tbody>
						{product.category && (
							<tr>
								<td className={styles.label}>Kategorie</td>
								<td>{product.category}</td>
							</tr>
						)}
						{product.weight !== 0 && (
							<tr>
								<td className={styles.label}>Hmotnost</td>
								<td>{product.weight}</td>
							</tr>
						)}
						{product.unitsPerPackage !== 0 && (
							<tr>
								<td className={styles.label}>Počet kusů v balení</td>
								<td>{product.unitsPerPackage}</td>
							</tr>
						)}
						{product.unitsPerPalette !== 0 && (
							<tr>
								<td className={styles.label}>Jednotky na paletě</td>
								<td>{product.unitsPerPalette}</td>
							</tr>
						)}
					</tbody>
				</table>
			</table>
			<p className={styles.text}>
				{[
					product.description,
					product.desc1,
					product.desc2,
					product.desc3,
					product.desc4,
				]
					.filter((text) => text && text.trim() !== '')
					.map((text, index) => (
						<span key={index}>
							{text}
							<br />
							<br />
						</span>
					))}
			</p>
		</div>
	)
}

export default PoppyProductSection
