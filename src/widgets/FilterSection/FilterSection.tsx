import styles from './FilterSection.module.scss'
import { useState, useEffect } from 'react'
import { Range, getTrackBackground } from 'react-range'
import axios from 'axios'

const MIN = 0
const MAX = 5000
const STEP = 100

type Props = {
	onFilterChange: (filters: {
		category: string | null
		priceRange: number[]
	}) => void
}

const FilterSection = ({ onFilterChange }: Props) => {
	const [values, setValues] = useState([500, 3000])
	const [categories, setCategories] = useState<string[]>([])
	const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

	useEffect(() => {
		const fetchCategories = async () => {
			try {
				const res = await axios.get<string[]>(
					`${import.meta.env.VITE_API_BASE_URL}/api/products/categories/list`
				)
				setCategories(res.data.filter((c) => c.trim() !== ''))
			} catch (err) {
				console.error('Ошибка при загрузке категорий:', err)
			}
		}
		fetchCategories()
	}, [])

	useEffect(() => {
		onFilterChange({ category: selectedCategory, priceRange: values })
	}, [selectedCategory, values])

	return (
		<div>
			<p className={styles.titles}>FilterSection</p>
			{categories
				.filter((c) => c.trim() !== '')
				.map((item, index) => (
					<div className={styles.filter_item} key={index}>
						<label style={{ display: 'flex', gap: 10 }}>
							<input
								type='radio'
								name='category'
								value={item}
								checked={selectedCategory === item}
								onChange={() => setSelectedCategory(item)}
							/>
							<p>{item}</p>
						</label>
					</div>
				))}

			<p style={{ marginTop: 30 }} className={styles.titles}>
				Cena
			</p>

			<div className={styles.price_row}>
				<div>
					<p>{values[0]}</p>
				</div>
				<div>
					<p>{values[1]}</p>
				</div>
			</div>

			<div style={{ marginBottom: 30 }}>
				<Range
					values={values}
					step={STEP}
					min={MIN}
					max={MAX}
					onChange={setValues}
					renderTrack={({ props, children }) => (
						<div
							onMouseDown={props.onMouseDown}
							onTouchStart={props.onTouchStart}
							style={{
								height: '14px',
								display: 'flex',
								width: 275,
								marginTop: 15,
							}}
						>
							<div
								ref={props.ref}
								style={{
									height: '6px',
									width: '100%',
									borderRadius: '4px',
									background: getTrackBackground({
										values,
										colors: ['#ccc', 'rgb(255, 183, 0)', '#ccc'],
										min: MIN,
										max: MAX,
									}),
									alignSelf: 'center',
								}}
							>
								{children}
							</div>
						</div>
					)}
					renderThumb={({ props }) => (
						<div
							{...props}
							style={{
								...props.style,
								height: '20px',
								width: '20px',
								borderRadius: '50%',
								backgroundColor: 'white',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								boxShadow: '0 2px 6px #AAA',
							}}
						></div>
					)}
				/>
			</div>

			{/* <p className={styles.titles}>FilterSection</p>
			{secondData.map((item, index) => (
				<div className={styles.filter_item} key={index}>
					<input type='radio' />
					<p>{item}</p>
				</div>
			))}
			<p style={{ marginTop: 30 }} className={styles.titles}>
				FilterSection
			</p>

			{secondData.map((item, index) => (
				<div className={styles.filter_item} key={index}>
					<input type='radio' />
					<p>{item}</p>
				</div>
			))} */}
		</div>
	)
}

export default FilterSection
