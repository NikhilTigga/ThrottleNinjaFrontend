import { PageBreadcrumb } from '@/components'
import {
	
	 GenericForm,hotelFormConfig,
} from '@/components'

const Addhotels = () => {
	const handleHotelSubmit = (data: any) => {
		console.log('Hotel data:', data)
		// Add hotel submission logic here
	}

	return (
		<>
			<PageBreadcrumb title="Add Hotel" subName="Hotels" />
			<div className="container-fluid">
				<GenericForm
                sections={hotelFormConfig}
                onSubmit={handleHotelSubmit}
                submitButtonText="Create Hotel" 
                submitButtonVariant="success"
                />
			</div>
		</>
	)
}

export default Addhotels
