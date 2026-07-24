import { useMemo } from 'react'
import { gql } from '@apollo/client'
import { useQuery } from '@apollo/client/react'
import { Alert, Spinner, Image, Badge } from 'react-bootstrap'
import { Column } from 'react-table'

import { PageBreadcrumb } from '@/components'
import { GenericTable } from '@/components/table'

type PostMedia = {
	mediaUrl: string
	mediaType: string
	thumbnailUrl?: string | null
}

type PostItem = {
	id: string
	caption?: string | null
	location?: string | null
	likeCount: number
	commentCount: number
	status: string
	adminRemark?: string | null
	creatorId: string
	creatorName: string
	creatorUsername: string
	media: PostMedia[]
	createdAt: string
}

type PostsData = {
	adminPosts: PostItem[]
}

const GET_ADMIN_POSTS = gql`
	query GetAdminPosts {
		adminPosts {
			id
			caption
			location
			likeCount
			commentCount
			status
			adminRemark
			creatorId
			creatorName
			creatorUsername
			media {
				mediaUrl
				mediaType
				thumbnailUrl
			}
			createdAt
		}
	}
`

const PostList = () => {
	const { loading, error, data } =
		useQuery<PostsData>(GET_ADMIN_POSTS)

	const posts = data?.adminPosts ?? []

	const columns = useMemo<Column<PostItem>[]>(
		() => [
			{
				Header: 'ID',
				accessor: 'id',
			},
			{
				Header: 'Creator',
				accessor: 'creatorName',
			},
			{
				Header: 'Username',
				accessor: 'creatorUsername',
			},
			{
				Header: 'Caption',
				accessor: (row) => {
					if (!row.caption) return '-'

					return row.caption.length > 50
						? `${row.caption.substring(0, 50)}...`
						: row.caption
				},
				id: 'caption',
			},
			{
				Header: 'Location',
				accessor: (row) => row.location || '-',
				id: 'location',
			},
			{
				Header: 'Likes',
				accessor: 'likeCount',
			},
			{
				Header: 'Comments',
				accessor: 'commentCount',
			},
			{
				Header: 'Status',
				Cell: ({ row }) => {
					const status = row.original.status

					let bg = 'secondary'

					if (status === 'approved') bg = 'success'
					else if (status === 'rejected') bg = 'danger'
					else if (status === 'pending') bg = 'warning'

					return (
						<Badge bg={bg}>
							{status}
						</Badge>
					)
				},
			},
			{
				Header: 'Media',
				Cell: ({ row }) => {
					const media = row.original.media?.[0]

					if (!media) return '-'

					return (
						<Image
							src={media.thumbnailUrl || media.mediaUrl}
							width={60}
							height={60}
							rounded
							style={{
								objectFit: 'cover',
							}}
						/>
					)
				},
			},
			{
				Header: 'Created',
				accessor: (row) =>
					new Date(
						row.createdAt
					).toLocaleString(),
				id: 'createdAt',
			},

            {
                Header: 'Actions',
                Cell: ({ row }) => (
                    <div className="d-flex gap-1">
                        <button className="btn btn-success btn-sm">
                            Approve
                        </button>

                        <button className="btn btn-danger btn-sm">
                            Reject
                        </button>
                    </div>
                ),
            }
		],
		[]
	)

	return (
		<>
			<PageBreadcrumb
				title="Posts"
				subName="Content Management"
			/>

			<div className="container-fluid">
				{loading && (
					<div className="d-flex align-items-center gap-2 mb-3">
						<Spinner
							animation="border"
							size="sm"
						/>
						<span>Loading posts...</span>
					</div>
				)}

				{error && (
					<Alert variant="danger">
						Failed to load posts:{' '}
						{error.message}
					</Alert>
				)}

				{!loading && !error && (
					<GenericTable<PostItem>
						title="Posts List"
						description="All uploaded posts"
						columns={columns}
						data={posts}
					/>
				)}
			</div>
		</>
	)
}

export default PostList