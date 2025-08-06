import type { Product } from '../../../types/Product'
import styles from './PoppyProductSection.module.scss'

type Props = {
	product: Product
}

const PoppyProductSection = ({ product }: Props) => {
	return (
		<div>
			<table className={styles.table}>
				<tbody>
					<tr>
						<td className={styles.label}>Obchodní značka</td>
						<td>Lorem Ipsum is simply</td>
					</tr>
					<tr>
						<td className={styles.label}>Typ</td>
						<td>Lorem Ipsum is simply</td>
					</tr>
					<tr>
						<td className={styles.label}>Materiál plátna</td>
						<td>Lorem Ipsum is simply</td>
					</tr>
					<tr>
						<td className={styles.label}>Šířka čepele, mm</td>
						<td>Lorem Ipsum is simply</td>
					</tr>
				</tbody>
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
