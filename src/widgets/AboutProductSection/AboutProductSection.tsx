import styles from './AboutProductSection.module.scss'
import mainProdudctImg from '../../assets/product/main-product-img.png'
// import firstMiniProductImg from '../../assets/product/mini-img-1.png'
// import secodnMiniProductImg from '../../assets/product/mini-img-2.png'
// import thirdMiniProductImg from '../../assets/product/mini-img-3.png'
// import fourthMiniProductImg from '../../assets/product/mini-img-4.png'
import btnBg from '../../assets/btn_bg.png'
import type { Product } from '../../types/Product'

type Props = {
	product: Product
}

const AboutProductSection = ({ product }: Props) => {
	const priceWithoutVat = product.price / (1 + product.vat / 100)

	const imageUrl =
		product.image && product.image.trim()
			? `/obrazky/${product.id}/image.jpg`
			: mainProdudctImg

	return (
		<section>
			<div className={styles.container}>
				<h2 className={styles.title}>{product.name}</h2>
				<div className={styles.content_row}>
					<div className='left'>
						<img
							className={styles.main_img}
							src={imageUrl}
							alt='main product image'
						/>
						<div className={styles.img_row}>
							{product.images?.map((item, index) => (
								<img key={index} src={item} />
							))}
						</div>
					</div>
					<div className='right'>
						<div
							style={{
								display: 'flex',
								gap: 326,
							}}
						>
							<p className={styles.article}>
								Článek č <span>{product.id}</span>
							</p>
							<p className={styles.available}>
								K dispozici: {product.quantity}
							</p>
						</div>
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
						<div className={styles.price}>
							<p>{product.price} Kč</p>
							<p>bez DPH {priceWithoutVat.toFixed(2)} Kč</p>
						</div>

						<div className={styles.btn}>
							<img src={btnBg} alt='btn bg' />
							<p>Rezervace</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default AboutProductSection
