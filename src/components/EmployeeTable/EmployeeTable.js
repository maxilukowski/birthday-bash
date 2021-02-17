import React, { useMemo } from 'react'
import { useSortBy, useTable } from 'react-table'
import styled from 'styled-components'
import tableStructure from './tableStructure'

const EmployeeTable = ({ data }) => {
  const columns = useMemo(() => tableStructure, [])
  const tableInstance = useTable({ columns, data }, useSortBy)

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance

  return (
    <Table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
}

export default EmployeeTable

const Table = styled.table`
  width: 70vw;
  border: 1px solid black;
  border-collapse: collapse;
  td,
  th {
    border: 1px solid black;
    text-align: center;
    padding: 3px;
  }
  tr:nth-child(even) {
    background-color: #eee;
  }
`
