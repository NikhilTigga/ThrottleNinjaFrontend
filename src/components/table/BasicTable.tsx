import React, { useMemo } from 'react'
import { Card ,Button } from 'react-bootstrap'
import { Column } from 'react-table'

import { Table } from '@/components/table'
import { records } from '@/pages/ui/tables/data'

type RecordRow = {
	name: string
	phoneNo: string
	dob: string
	country: string
}

const columns: ReadonlyArray<Column<RecordRow>> = [
	{
		Header: 'Name',
		accessor: 'name',
	},
	{
		Header: 'Phone Number',
		accessor: 'phoneNo',
	},
	{
		Header: 'Date of Birth',
		accessor: 'dob',
	},
	{
		Header: 'Country',
		accessor: 'country',
	},
	{
	Header: 'Action',
	Cell: ({ row }) => (
		<>
			<Button
				variant="outline-primary"
				className="rounded-pill me-2"
				onClick={() => console.log('Approve', row.original)}
			>
				Approve
			</Button>

			<Button
				variant="outline-danger"
				className="rounded-pill"
				onClick={() => console.log('Reject', row.original)}
			>
				Reject
			</Button>
		</>
	),
}
]
export const BasicTable = () => {
	const memoColumns = useMemo(() => columns, [])
	const memoData = useMemo(() => records as RecordRow[], [])

	return (
		<>
			<Card>
				<Card.Header>
					<h4 className="header-title">View Users</h4>
					<p className="text-muted mb-0">
						Use the table below with search and pagination enabled.
					</p>
				</Card.Header>
				<Card.Body>
					<Table
						columns={memoColumns}
						data={memoData}
						isSearchable
						isSortable
						pagination
						pageSize={5}
						sizePerPageList={[
							{ text: '5', value: 5 },
							{ text: '10', value: 10 },
							{ text: '20', value: 20 },
						]}
						tableClass="mb-0"
						theadClass="table-dark"
					/>
				</Card.Body>
			</Card>
		</>
	)
}

