import styled from 'styled-components'

export const Table = styled.table`
  border-collapse: collapse;
  border: none;
  width: 100%;
`

export const TableRowHeader = styled.tr`
  background-color: transparent;
  transition: all 0.25s ease;
  border-radius: 10px;
`
export const TableHeader = styled.th`
  background-color: #f1f1f1;
  padding: 12px;
  font-weight: 500;
  text-align: left;
  font-size: 14px;
  color: #2c3e50;

  &:hover {
    cursor: pointer;
    background-color: #ddd;
  }

  &:first-child {
    border-top-left-radius: 15px;
  }

  &:last-child {
    border-top-right-radius: 15px;
  }
`

export const TableRowItems = styled.tr`
  cursor: auto;

  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`

export const TableCell = styled.td`
  padding: 12px;
  font-size: 14px;
  color: grey;
`
