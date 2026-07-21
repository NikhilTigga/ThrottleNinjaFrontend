import { gql } from '@apollo/client'
import { useQuery } from '@apollo/client/react'
import { PageBreadcrumb } from '@/components'
import { Alert, Card, Spinner, Table } from 'react-bootstrap'

type UserItem = { id: string | number; nickName: string }
type PostItem = { id: string | number; caption: string }
type HotelItem = { id: string | number; hotelName: string }
type RouteItem = { id: string | number; source: string; destination: string }
type DashboardData = {
	users: UserItem[]
	posts: PostItem[]
	hotels: HotelItem[]
	routes: RouteItem[]
}

const GET_DASHBOARD_DATA = gql`
	query GetDashboardData {
		users {
			id
			nickName
		}
		posts {
			id
			caption
		}
		hotels {
			id
			hotelName
		}
		routes {
			id
			source
			destination
		}
	}
`

type DashboardSectionProps = {
	title: string
	columns: string[]
	rows: Array<Record<string, string | number | null | undefined>>
}

const DashboardSection = ({ title, columns, rows }: DashboardSectionProps) => (
	<Card className="shadow-sm">
		<Card.Header>
			<h5 className="mb-0">{title}</h5>
		</Card.Header>
		<Card.Body>
			<Table striped bordered hover responsive size="sm">
				<thead>
					<tr>
						{columns.map((column) => (
							<th key={column}>{column}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{rows.length > 0 ? (
						rows.map((row, index) => (
							<tr key={`${title}-${index}`}>
								{columns.map((column) => (
									<td key={`${title}-${column}-${index}`}>
										{row[column.toLowerCase().replace(/\s+/g, '')] ?? '—'}
									</td>
								))}
							</tr>
						))
					) : (
						<tr>
							<td colSpan={columns.length}>No data available</td>
						</tr>
					)}
				</tbody>
			</Table>
		</Card.Body>
	</Card>
)

const Starter = () => {
	const { loading, error, data } = useQuery<DashboardData>(GET_DASHBOARD_DATA)

	const users = data?.users ?? []
	const posts = data?.posts ?? []
	const hotels = data?.hotels ?? []
	const routes = data?.routes ?? []

	return (
		<>
			<PageBreadcrumb title="Starter" subName="Pages" />
			<div className="container-fluid">
				{loading && (
					<div className="d-flex align-items-center gap-2 mb-3">
						<Spinner animation="border" size="sm" />
						<span>Loading data from backend...</span>
					</div>
				)}

				{error && (
					<Alert variant="danger">
						Failed to load data from GraphQL: {error.message}
					</Alert>
				)}

				{!loading && !error && (
					<div className="row g-3">
						<div className="col-12 col-xl-6">
							<DashboardSection
								title="Users"
								columns={['ID', 'Nick Name']}
								rows={users.map((user: any) => ({
									id: user.id,
									nickname: user.nickName,
								}))}
							/>
						</div>

						<div className="col-12 col-xl-6">
							<DashboardSection
								title="Posts"
								columns={['ID', 'Caption']}
								rows={posts.map((post: any) => ({
									id: post.id,
									caption: post.caption,
								}))}
							/>
						</div>

						<div className="col-12 col-xl-6">
							<DashboardSection
								title="Hotels"
								columns={['ID', 'Hotel Name']}
								rows={hotels.map((hotel: any) => ({
									id: hotel.id,
									hotelname: hotel.hotelName,
								}))}
							/>
						</div>

						<div className="col-12 col-xl-6">
							<DashboardSection
								title="Routes"
								columns={['ID', 'Source', 'Destination']}
								rows={routes.map((route: any) => ({
									id: route.id,
									source: route.source,
									destination: route.destination,
								}))}
							/>
						</div>
					</div>
				)}
			</div>
		</>
	)
}

export default Starter
