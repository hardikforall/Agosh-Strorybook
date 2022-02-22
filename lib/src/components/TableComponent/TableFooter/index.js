import React, { useEffect, useState } from 'react'

// import styles from './TableFooter.module.css'
import { DivTableFooter, TableButton, Input } from './TableFooter.styles'
import useTable from '../../../hooks/useTable'

const TableFooter = ({ data, setPage, setSlice, page, rowsPerPage }) => {
  const [rows, setRows] = useState(rowsPerPage)
  const { slice, range } = useTable(data, page, rows)

  useEffect(() => {
    setSlice(slice)
  }, [slice, setSlice])

  const from = (page - 1) * rows + 1
  const to = from + slice.length - 1

  useEffect(() => {
    if (slice.length < 1 && page !== 1) {
      setPage(page - 1)
    }
  }, [slice, page, setPage])
  return (
    <DivTableFooter>
      <div className='rangeShower'>
        <Input
          type='number'
          name='rangeNo'
          defaultValue={rows}
          max={data.length}
          min={1}
          id='rangeNo'
          onChange={(e) => setRows(e.target.value)}
        />
        <span>
          Showing {from} - {to} of {data.length}
        </span>
      </div>
      <div className='pagination'>
        {range.map((el, index) => (
          <TableButton
            key={index}
            className={`${page === el ? 'activeButton' : 'inactiveButton'}`}
            onClick={() => setPage(el)}
          >
            {el}
          </TableButton>
        ))}
      </div>
      <div className='goto'>
        <span>Go to Page</span>
        <Input
          type='number'
          name='pageNo'
          defaultValue={page}
          max={range[range.length - 1]}
          min={range[0]}
          id='inputGoto'
        />
        <TableButton onClick={() => setPage(Number(document.getElementById('inputGoto').value))}>
          Go
        </TableButton>
      </div>
    </DivTableFooter>
  )
}

export default TableFooter
