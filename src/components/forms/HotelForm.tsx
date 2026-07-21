import React from 'react'
import { Card, Form, Row, Col, Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { FormInput } from '@/components'

type HotelFormData = {
	hotelName: string
	hotelType: string
	rating: string
	phone: string
	email: string
	website: string
	address: string
	city: string
	state: string
	country: string
	zipCode: string
	description: string
}

type HotelFormProps = {
	onSubmit?: (data: HotelFormData) => void
	title?: string
}

export const HotelBasicInfo = () => {
	return (
		<Card>
			<Card.Header>
				<h4 className="header-title">Hotel Basic Information</h4>
				<p className="text-muted mb-0">Enter hotel name, type and rating</p>
			</Card.Header>
			<Card.Body>
				<Form>
					<Form.Group className="mb-3">
						<Form.Label>Hotel Name</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter hotel name"
							id="hotelName"
						/>
					</Form.Group>

					<Row className="g-2">
						<Form.Group as={Col} md={6} className="mb-3">
							<Form.Label>Hotel Type</Form.Label>
							<Form.Select id="hotelType" defaultValue="">
								<option value="">Choose hotel type...</option>
								<option value="budget">Budget</option>
								<option value="mid-range">Mid-Range</option>
								<option value="luxury">Luxury</option>
								<option value="resort">Resort</option>
								<option value="boutique">Boutique</option>
							</Form.Select>
						</Form.Group>

						<Form.Group as={Col} md={6} className="mb-3">
							<Form.Label>Rating (1-5)</Form.Label>
							<Form.Control
								type="number"
								min="1"
								max="5"
								placeholder="Enter rating"
								id="rating"
							/>
						</Form.Group>
					</Row>
				</Form>
			</Card.Body>
		</Card>
	)
}

export const HotelContactInfo = () => {
	return (
		<Card>
			<Card.Header>
				<h4 className="header-title">Contact Information</h4>
				<p className="text-muted mb-0">Add phone, email and website details</p>
			</Card.Header>
			<Card.Body>
				<Form>
					<Row className="g-2">
						<Form.Group as={Col} md={6} className="mb-3">
							<Form.Label>Phone Number</Form.Label>
							<Form.Control
								type="tel"
								placeholder="Enter phone number"
								id="phone"
							/>
						</Form.Group>

						<Form.Group as={Col} md={6} className="mb-3">
							<Form.Label>Email</Form.Label>
							<Form.Control
								type="email"
								placeholder="Enter email address"
								id="email"
							/>
						</Form.Group>
					</Row>

					<Form.Group className="mb-3">
						<Form.Label>Website</Form.Label>
						<Form.Control
							type="url"
							placeholder="Enter website URL"
							id="website"
						/>
					</Form.Group>

					<Form.Group className="mb-0">
						<Form.Label>Description</Form.Label>
						<Form.Control
							as="textarea"
							rows={3}
							placeholder="Enter hotel description"
							id="description"
						/>
					</Form.Group>
				</Form>
			</Card.Body>
		</Card>
	)
}

export const HotelAddressInfo = () => {
	return (
		<Card>
			<Card.Header>
				<h4 className="header-title">Address Information</h4>
				<p className="text-muted mb-0">Enter hotel location and address details</p>
			</Card.Header>
			<Card.Body>
				<Form>
					<Form.Group className="mb-3">
						<Form.Label>Address</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter street address"
							id="address"
						/>
					</Form.Group>

					<Row className="g-2">
						<Form.Group as={Col} md={6} className="mb-3">
							<Form.Label>City</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter city"
								id="city"
							/>
						</Form.Group>

						<Form.Group as={Col} md={3} className="mb-3">
							<Form.Label>State</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter state"
								id="state"
							/>
						</Form.Group>

						<Form.Group as={Col} md={3} className="mb-3">
							<Form.Label>Zip Code</Form.Label>
							<Form.Control
								type="text"
								placeholder="Zip code"
								id="zipCode"
							/>
						</Form.Group>
					</Row>

					<Form.Group className="mb-0">
						<Form.Label>Country</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter country"
							id="country"
						/>
					</Form.Group>
				</Form>
			</Card.Body>
		</Card>
	)
}

export const HotelForm = ({ onSubmit, title = 'Add Hotel' }: HotelFormProps) => {
	const methods = useForm<HotelFormData>()
	const { handleSubmit } = methods

	return (
		<form onSubmit={handleSubmit(onSubmit || (() => {}))}>
			<HotelBasicInfo />
			<HotelContactInfo />
			<HotelAddressInfo />
			<Button
				variant="primary"
				type="submit"
				className="mt-3 waves-effect waves-light"
			>
				{title}
			</Button>
		</form>
	)
}
