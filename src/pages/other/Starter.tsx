import { useMemo } from 'react'
import { gql } from '@apollo/client'
import { useQuery } from '@apollo/client/react'
import { Alert, Spinner } from 'react-bootstrap'
import { Column } from 'react-table'

import { PageBreadcrumb } from '@/components'
import { GenericTable } from '@/components/table'

type UserItem = {
	id: string
	fullName: string
	nickName: string
	mobileno: string
	city: string
	profileImg: string
	followersCount: number
	followingCount: number
	isVerified: boolean
	isPrivate: boolean
}
type DashboardData = {
	users: UserItem[]
}

const GET_DASHBOARD_DATA = gql`
	query GetDashboardData {
		users {
			id
			fullName
			nickName
			mobileno
			city
			profileImg
			followersCount
			followingCount
			isVerified
			isPrivate
		}
	}
`

const Starter = () => {
	const { loading, error, data } =
		useQuery<DashboardData>(GET_DASHBOARD_DATA)

	const users = data?.users ?? []

	const userColumns = useMemo<Column<UserItem>[]>(
	() => [
		{
			Header: 'ID',
			accessor: 'id',
		},
		{
			Header: 'Full Name',
			accessor: 'fullName',
		},
		{
			Header: 'Nick Name',
			accessor: 'nickName',
		},
		{
			Header: 'Mobile',
			accessor: 'mobileno',
		},
		{
			Header: 'City',
			accessor: 'city',
		},
		{
			Header: 'Followers',
			accessor: 'followersCount',
		},
		{
			Header: 'Following',
			accessor: 'followingCount',
		},
		{
			Header: 'Verified',
			accessor: (row) => (row.isVerified ? 'Yes' : 'No'),
			id: 'isVerified',
		},
		{
			Header: 'Private',
			accessor: (row) => (row.isPrivate ? 'Yes' : 'No'),
			id: 'isPrivate',
		},
	],
	[]
)

	return (
		<>
			<PageBreadcrumb title="Users" subName="Pages" />

			<div className="container-fluid">
				{loading && (
					<div className="d-flex align-items-center gap-2 mb-3">
						<Spinner animation="border" size="sm" />
						<span>Loading users...</span>
					</div>
				)}

				{error && (
					<Alert variant="danger">
						Failed to load users: {error.message}
					</Alert>
				)}

				{!loading && !error && (
					<GenericTable<UserItem>
						title="Users List"
						description="All registered users"
						columns={userColumns}
						data={users}
					/>
				)}
			</div>
		</>
	)
}

export default Starter