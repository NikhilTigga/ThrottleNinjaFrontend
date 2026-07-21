import React from 'react'
import { Card, Form, Row, Col, Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

export type FormFieldConfig = {
	name: string
	label: string
	type: 'text' | 'email' | 'tel' | 'url' | 'number' | 'select' | 'textarea' | 'date' | 'password'
	placeholder?: string
	required?: boolean
	validation?: any
	options?: Array<{ value: string; label: string }>
	rows?: number
	columnSize?: 'full' | 'half' | 'third'
	defaultValue?: string | number
}

export type FormSectionConfig = {
	title: string
	description?: string
	fields: FormFieldConfig[]
}

export type GenericFormProps = {
	sections: FormSectionConfig[]
	onSubmit: (data: any) => void
	submitButtonText?: string
	submitButtonVariant?: string
}

const getColumnClass = (columnSize?: string) => {
	switch (columnSize) {
		case 'half':
			return 6
		case 'third':
			return 4
		default:
			return 12
	}
}

type FormFieldProps = {
	field: FormFieldConfig
	register: ReturnType<typeof useForm>['register']
	errors: any
}

const FormField = ({ field, register, errors }: FormFieldProps) => {
	const colSize = getColumnClass(field.columnSize)

	if (field.type === 'select') {
		return (
			<Form.Group as={Col} md={colSize} className="mb-3">
				<Form.Label>{field.label}</Form.Label>
				<Form.Select
					id={field.name}
					defaultValue={field.defaultValue ?? ''}
					{...register(field.name, { required: field.required })}
				>
					<option value="">Choose {field.label.toLowerCase()}...</option>
					{field.options?.map((opt) => (
						<option key={opt.value} value={opt.value}>
							{opt.label}
						</option>
					))}
				</Form.Select>
			</Form.Group>
		)
	}

	if (field.type === 'textarea') {
		return (
			<Form.Group className="mb-3">
				<Form.Label>{field.label}</Form.Label>
				<Form.Control
					as="textarea"
					rows={field.rows || 3}
					placeholder={field.placeholder}
					defaultValue={field.defaultValue ?? ''}
					{...register(field.name, { required: field.required })}
				/>
			</Form.Group>
		)
	}

	return (
		<Form.Group as={Col} md={colSize} className="mb-3">
			<Form.Label>{field.label}</Form.Label>
			<Form.Control
				type={field.type}
				placeholder={field.placeholder}
				defaultValue={field.defaultValue ?? ''}
				{...register(field.name, { required: field.required })}
			/>
		</Form.Group>
	)
}

export const GenericForm = ({
	sections,
	onSubmit,
	submitButtonText = 'Submit',
	submitButtonVariant = 'primary',
}: GenericFormProps) => {
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm()

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			{sections.map((section, idx) => (
				<Card key={idx} className="mb-3">
					<Card.Header>
						<h4 className="header-title">{section.title}</h4>
						{section.description && (
							<p className="text-muted mb-0">{section.description}</p>
						)}
					</Card.Header>
					<Card.Body>
						<Form>
							<Row className="g-2">
								{section.fields.map((field) => (
									<FormField
										key={field.name}
										field={field}
										register={register}
										errors={errors}
									/>
								))}
							</Row>
						</Form>
					</Card.Body>
				</Card>
			))}
			<Button
				variant={submitButtonVariant}
				type="submit"
				className="mt-3 waves-effect waves-light"
			>
				{submitButtonText}
			</Button>
		</form>
	)
}
