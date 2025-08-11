export type Product = {
	id: string
	name: string
	price: number
	vat: number
	category: string
	weight: number
	quantity: number
	unitsPerPackage: number
	unitsPerPalette: number
	image: string
	description?: string
	desc1?: string
	desc2?: string
	desc3?: string
	desc4?: string

	images?: string[]
}
