// ============================================================
// EXAMPLE: How to use GenericForm for different entities
// ============================================================

import { PageBreadcrumb } from '@/components'
import { GenericForm } from '@/components/forms/GenericForm'
import {
	hotelFormConfig,
	userFormConfig,
	tourFormConfig,
	routeFormConfig,
} from '@/components/forms/formConfigs'

// ===== FOR HOTELS =====
export const AddHotelPage = () => {
	const handleHotelSubmit = (data: any) => {
		console.log('Hotel data:', data)
		// Send to API
	}

	return (
		<>
			<PageBreadcrumb title="Add Hotel" subName="Hotels" />
			<div className="container-fluid">
				<GenericForm
					sections={hotelFormConfig}
					onSubmit={handleHotelSubmit}
					submitButtonText="Create Hotel"
					submitButtonVariant="primary"
				/>
			</div>
		</>
	)
}

// ===== FOR USERS =====
export const AddUserPage = () => {
	const handleUserSubmit = (data: any) => {
		console.log('User data:', data)
		// Send to API
	}

	return (
		<>
			<PageBreadcrumb title="Add User" subName="Users" />
			<div className="container-fluid">
				<GenericForm
					sections={userFormConfig}
					onSubmit={handleUserSubmit}
					submitButtonText="Create User"
					submitButtonVariant="success"
				/>
			</div>
		</>
	)
}

// ===== FOR TOURS =====
export const AddTourPage = () => {
	const handleTourSubmit = (data: any) => {
		console.log('Tour data:', data)
		// Send to API
	}

	return (
		<>
			<PageBreadcrumb title="Add Tour" subName="Tours" />
			<div className="container-fluid">
				<GenericForm
					sections={tourFormConfig}
					onSubmit={handleTourSubmit}
					submitButtonText="Create Tour"
					submitButtonVariant="info"
				/>
			</div>
		</>
	)
}

// ===== FOR ROUTES =====
export const AddRoutePage = () => {
	const handleRouteSubmit = (data: any) => {
		console.log('Route data:', data)
		// Send to API
	}

	return (
		<>
			<PageBreadcrumb title="Add Route" subName="Routes" />
			<div className="container-fluid">
				<GenericForm
					sections={routeFormConfig}
					onSubmit={handleRouteSubmit}
					submitButtonText="Create Route"
					submitButtonVariant="warning"
				/>
			</div>
		</>
	)
}

// ===== CUSTOM USAGE EXAMPLE =====
// You can also create custom configs on the fly:
export const CustomFormPage = () => {
	const customConfig = [
		{
			title: 'Product Information',
			description: 'Enter product details',
			fields: [
				{
					name: 'productName',
					label: 'Product Name',
					type: 'text' as const,
					placeholder: 'Enter product name',
					required: true,
					columnSize: 'full' as const,
				},
				{
					name: 'price',
					label: 'Price',
					type: 'number' as const,
					placeholder: 'Enter price',
					required: true,
					columnSize: 'half' as const,
				},
				{
					name: 'category',
					label: 'Category',
					type: 'select' as const,
					options: [
						{ value: 'electronics', label: 'Electronics' },
						{ value: 'clothing', label: 'Clothing' },
						{ value: 'books', label: 'Books' },
					],
					columnSize: 'half' as const,
				},
			],
		},
	]

	const handleSubmit = (data: any) => {
		console.log('Product data:', data)
	}

	return (
		<>
			<PageBreadcrumb title="Add Product" subName="Products" />
			<div className="container-fluid">
				<GenericForm
					sections={customConfig}
					onSubmit={handleSubmit}
					submitButtonText="Add Product"
				/>
			</div>
		</>
	)
}
