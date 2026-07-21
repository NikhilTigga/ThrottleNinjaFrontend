import { useMemo } from 'react'
import { Card } from 'react-bootstrap'
import { Column } from 'react-table'
import { Table } from './Table'
type GenericTableProps<T extends object> = {
  title: string
  description?: string
  columns: ReadonlyArray<Column<T>>
  data: T[]
}
export function GenericTable<T extends object>({
  title,
  description,
  columns,
  data,
}: GenericTableProps<T>) {
  const memoColumns = useMemo(() => columns, [columns])
  const memoData = useMemo(() => data, [data])
  return (
    <Card>
      <Card.Header>
        <h4 className="header-title">{title}</h4>
        {description && <p className="text-muted mb-0">{description}</p>}
      </Card.Header>
      <Card.Body>
        <Table
          columns={memoColumns as ReadonlyArray<Column>}
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
  )
}