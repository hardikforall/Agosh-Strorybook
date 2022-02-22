import React, { useState } from 'react'

import useTable from '../../hooks/useTable'
// import styles from './Table.module.css'
import { TableRowHeader, Table, TableCell, TableHeader, TableRowItems } from './Table.styles'
import TableFooter from './TableFooter'

const TableComponent = ({ data, rowsPerPage = 4 }) => {
  const [page, setPage] = useState(1)
  const { slice } = useTable(data, page, rowsPerPage)
  const [sliceshow, setSliceshow] = useState(slice)

  const useSortableData = (items, config = null) => {
    const [sortConfig, setSortConfig] = React.useState(config)

    const sortedItems = React.useMemo(() => {
      let sortableItems = [...sliceshow]
      if (sortConfig !== null) {
        sortableItems.sort((a, b) => {
          if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? -1 : 1
          }
          if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? 1 : -1
          }
          return 0
        })
      }
      return sortableItems
    }, [sortConfig])

    const requestSort = (key) => {
      let direction = 'ascending'
      if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
        direction = 'descending'
      }
      setSortConfig({ key, direction })
    }

    return { items: sortedItems, requestSort, sortConfig }
  }

  const ProductTable = (props) => {
    const { items, requestSort } = useSortableData(props.products)

    return (
      <Table>
        <TableRowHeader>
          <TableHeader onClick={() => requestSort('name')}>Country</TableHeader>
          <TableHeader onClick={() => requestSort('capital')}>Capital</TableHeader>
          <TableHeader onClick={() => requestSort('language')}>Language</TableHeader>
        </TableRowHeader>
        <tbody>
          {items.map((el) => (
            <TableRowItems key={el.id}>
              <TableCell>{el.name}</TableCell>
              <TableCell>{el.capital}</TableCell>
              <TableCell>{el.language}</TableCell>
            </TableRowItems>
          ))}
        </tbody>
      </Table>
    )
  }

  return (
    <>
      <ProductTable products={data} />
      <TableFooter
        data={data}
        rowsPerPage={rowsPerPage}
        setPage={setPage}
        setSlice={setSliceshow}
        page={page}
      />
    </>
  )
}

export default TableComponent
