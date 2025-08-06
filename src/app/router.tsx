import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import HomePage from '../pages/HomePage'
import KategoriePage from '../pages/KategoriePage'
import ProductDetailPage from '../pages/ProductDetailPage'
import ContactPage from '../pages/ContactPage'
import MachineRentalPage from '../pages/MachineRentalPage'
import MachineRepairPage from '../pages/MachineRepairPage'

export const router = createBrowserRouter([
	{
		element: <MainLayout />,
		children: [
			{ index: true, element: <HomePage /> },
			{ path: '/kategorie', element: <KategoriePage /> },
			{ path: '/product-card', element: <ProductDetailPage /> },
			{ path: '/contact', element: <ContactPage /> },
			{ path: '/machine-rental', element: <MachineRentalPage /> },
			{ path: '/machine-repair', element: <MachineRepairPage /> },
			{ path: '/:id', element: <ProductDetailPage /> },
		],
	},
])
