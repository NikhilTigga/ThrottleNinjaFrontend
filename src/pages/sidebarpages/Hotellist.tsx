import { useMemo } from 'react'
import { gql } from '@apollo/client'
import { useQuery } from '@apollo/client/react'
import { PageBreadcrumb } from '@/components'

import { Column } from 'react-table'
import { GenericTable } from '@/components/table'
import { hotels } from '@/pages/ui/tables/data'

type HotelRow = {
  hotelName: string
  hotelType: string
  rating: number
  phone: string
  city: string
}

type GraphQLHotel = {
  id: string
  name: string
  type: string
  rating: number
  phone: string
  city: string
}

const hotelColumns: ReadonlyArray<Column<HotelRow>> = [
  { Header: 'Hotel Name', accessor: 'hotelName' },
  { Header: 'Type', accessor: 'hotelType' },
  { Header: 'Rating', accessor: 'rating' },
  { Header: 'Phone', accessor: 'phone' },
  { Header: 'City', accessor: 'city' },
]

const GET_HOTELS = gql`
  query GetHotels {
    hotels {
      id
      name
      type
      rating
      phone
      city
    }
  }
`

type HotelsQueryData = {
  hotels: GraphQLHotel[]
}

const Hotellist = () => {
  const { loading, error, data } = useQuery<HotelsQueryData>(GET_HOTELS)

  const memoColumns = useMemo(() => hotelColumns, [])
  const memoData = useMemo(() => {
    if (data?.hotels) {
      return data.hotels.map((hotel: GraphQLHotel) => ({
        hotelName: hotel.name,
        hotelType: hotel.type,
        rating: hotel.rating,
        phone: hotel.phone,
        city: hotel.city,
      }))
    }

    return hotels as HotelRow[]
  }, [data])

  return (
    <>
      <PageBreadcrumb title="Hotel List" subName="Hotels" />
      <div className="container-fluid">
        {loading && <p>Loading hotels...</p>}
        {error && <p>Error loading hotels: {error.message}</p>}
        {!loading && !error && (
          <GenericTable
            title="Hotel List"
            description="Search and manage hotels"
            columns={memoColumns}
            data={memoData}
          />
        )}
      </div>
    </>
  )
}

export default Hotellist