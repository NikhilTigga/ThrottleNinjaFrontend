import { FormSectionConfig } from './GenericForm'

// ===== HOTEL FORM CONFIG =====
export const hotelFormConfig: FormSectionConfig[] = [
	{
		title: 'Hotel Basic Information',
		description: 'Enter hotel name, type and rating',
		fields: [
			{
				name: 'hotelName',
				label: 'Hotel Name',
				type: 'text',
				placeholder: 'Enter hotel name',
				required: true,
				columnSize: 'full',
			},
			{
				name: 'hotelType',
				label: 'Hotel Type',
				type: 'select',
				options: [
					{ value: 'budget', label: 'Budget' },
					{ value: 'mid-range', label: 'Mid-Range' },
					{ value: 'luxury', label: 'Luxury' },
					{ value: 'resort', label: 'Resort' },
					{ value: 'boutique', label: 'Boutique' },
				],
				required: true,
				columnSize: 'half',
			},
			{
				name: 'rating',
				label: 'Rating (1-5)',
				type: 'number',
				placeholder: 'Enter rating',
				required: true,
				columnSize: 'half',
			},
		],
	},
	{
		title: 'Contact Information',
		description: 'Add phone, email and website details',
		fields: [
			{
				name: 'phone',
				label: 'Phone Number',
				type: 'tel',
				placeholder: 'Enter phone number',
				columnSize: 'half',
			},
			{
				name: 'email',
				label: 'Email',
				type: 'email',
				placeholder: 'Enter email address',
				columnSize: 'half',
			},
			{
				name: 'website',
				label: 'Website',
				type: 'url',
				placeholder: 'Enter website URL',
				columnSize: 'full',
			},
			{
				name: 'description',
				label: 'Description',
				type: 'textarea',
				placeholder: 'Enter hotel description',
				columnSize: 'full',
			},
		],
	},
	{
		title: 'Address Information',
		description: 'Enter hotel location and address details',
		fields: [
			{
				name: 'address',
				label: 'Address',
				type: 'text',
				placeholder: 'Enter street address',
				columnSize: 'full',
			},
			{
				name: 'city',
				label: 'City',
				type: 'text',
				placeholder: 'Enter city',
				columnSize: 'half',
			},
			{
				name: 'state',
				label: 'State',
				type: 'text',
				placeholder: 'Enter state',
				columnSize: 'third',
			},
			{
				name: 'zipCode',
				label: 'Zip Code',
				type: 'text',
				placeholder: 'Zip code',
				columnSize: 'third',
			},
			{
				name: 'country',
				label: 'Country',
				type: 'text',
				placeholder: 'Enter country',
				columnSize: 'full',
			},
		],
	},
]

// ===== USER FORM CONFIG =====
export const userFormConfig: FormSectionConfig[] = [
	{
		title: 'User Information',
		description: 'Enter user basic details',
		fields: [
			{
				name: 'firstName',
				label: 'First Name',
				type: 'text',
				placeholder: 'Enter first name',
				required: true,
				columnSize: 'half',
			},
			{
				name: 'lastName',
				label: 'Last Name',
				type: 'text',
				placeholder: 'Enter last name',
				required: true,
				columnSize: 'half',
			},
			{
				name: 'email',
				label: 'Email',
				type: 'email',
				placeholder: 'Enter email address',
				required: true,
				columnSize: 'full',
			},
			{
				name: 'userRole',
				label: 'Role',
				type: 'select',
				options: [
					{ value: 'admin', label: 'Admin' },
					{ value: 'manager', label: 'Manager' },
					{ value: 'user', label: 'User' },
					{ value: 'guest', label: 'Guest' },
				],
				required: true,
				columnSize: 'half',
			},
			{
				name: 'status',
				label: 'Status',
				type: 'select',
				options: [
					{ value: 'active', label: 'Active' },
					{ value: 'inactive', label: 'Inactive' },
					{ value: 'suspended', label: 'Suspended' },
				],
				columnSize: 'half',
			},
		],
	},
	{
		title: 'Contact Details',
		description: 'Add phone and address',
		fields: [
			{
				name: 'phone',
				label: 'Phone Number',
				type: 'tel',
				placeholder: 'Enter phone number',
				columnSize: 'half',
			},
			{
				name: 'address',
				label: 'Address',
				type: 'text',
				placeholder: 'Enter address',
				columnSize: 'full',
			},
			{
				name: 'city',
				label: 'City',
				type: 'text',
				placeholder: 'Enter city',
				columnSize: 'half',
			},
			{
				name: 'country',
				label: 'Country',
				type: 'text',
				placeholder: 'Enter country',
				columnSize: 'half',
			},
		],
	},
]

// ===== TOUR FORM CONFIG =====
export const tourFormConfig: FormSectionConfig[] = [
	{
		title: 'Tour Information',
		description: 'Enter tour details',
		fields: [
			{
				name: 'tourName',
				label: 'Tour Name',
				type: 'text',
				placeholder: 'Enter tour name',
				required: true,
				columnSize: 'full',
			},
			{
				name: 'destination',
				label: 'Destination',
				type: 'text',
				placeholder: 'Enter destination',
				required: true,
				columnSize: 'half',
			},
			{
				name: 'duration',
				label: 'Duration (Days)',
				type: 'number',
				placeholder: 'Enter number of days',
				required: true,
				columnSize: 'half',
			},
			{
				name: 'price',
				label: 'Price ($)',
				type: 'number',
				placeholder: 'Enter price',
				required: true,
				columnSize: 'half',
			},
			{
				name: 'difficulty',
				label: 'Difficulty Level',
				type: 'select',
				options: [
					{ value: 'easy', label: 'Easy' },
					{ value: 'moderate', label: 'Moderate' },
					{ value: 'hard', label: 'Hard' },
					{ value: 'expert', label: 'Expert' },
				],
				columnSize: 'half',
			},
			{
				name: 'description',
				label: 'Tour Description',
				type: 'textarea',
				placeholder: 'Enter tour description',
				columnSize: 'full',
				rows: 4,
			},
		],
	},
	{
		title: 'Schedule',
		description: 'Set tour dates',
		fields: [
			{
				name: 'startDate',
				label: 'Start Date',
				type: 'date',
				required: true,
				columnSize: 'half',
			},
			{
				name: 'endDate',
				label: 'End Date',
				type: 'date',
				required: true,
				columnSize: 'half',
			},
			{
				name: 'maxParticipants',
				label: 'Max Participants',
				type: 'number',
				placeholder: 'Enter max participants',
				columnSize: 'half',
			},
		],
	},
]

// ===== ROUTE FORM CONFIG =====
export const routeFormConfig: FormSectionConfig[] = [
	{
		title: 'Route Information',
		description: 'Enter route details',
		fields: [
			{
				name: 'routeName',
				label: 'Route Name',
				type: 'text',
				placeholder: 'Enter route name',
				required: true,
				columnSize: 'full',
			},
			{
				name: 'startPoint',
				label: 'Start Point',
				type: 'text',
				placeholder: 'Enter starting location',
				required: true,
				columnSize: 'half',
			},
			{
				name: 'endPoint',
				label: 'End Point',
				type: 'text',
				placeholder: 'Enter ending location',
				required: true,
				columnSize: 'half',
			},
			{
				name: 'distance',
				label: 'Distance (km)',
				type: 'number',
				placeholder: 'Enter distance',
				required: true,
				columnSize: 'half',
			},
			{
				name: 'estimatedTime',
				label: 'Estimated Time (hours)',
				type: 'number',
				placeholder: 'Enter estimated time',
				columnSize: 'half',
			},
			{
				name: 'routeType',
				label: 'Route Type',
				type: 'select',
				options: [
					{ value: 'hiking', label: 'Hiking' },
					{ value: 'cycling', label: 'Cycling' },
					{ value: 'driving', label: 'Driving' },
					{ value: 'walking', label: 'Walking' },
				],
				columnSize: 'half',
			},
			{
				name: 'difficulty',
				label: 'Difficulty',
				type: 'select',
				options: [
					{ value: 'easy', label: 'Easy' },
					{ value: 'moderate', label: 'Moderate' },
					{ value: 'hard', label: 'Hard' },
				],
				columnSize: 'half',
			},
			{
				name: 'description',
				label: 'Route Description',
				type: 'textarea',
				placeholder: 'Enter route description',
				columnSize: 'full',
				rows: 4,
			},
		],
	},
]
