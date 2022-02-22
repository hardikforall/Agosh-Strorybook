import styled, { css } from 'styled-components'

export const DivTableFooter = styled.h1`
  background-color: #f1f1f1;
  padding: 8px;
  font-weight: 500;
  text-align: left;
  font-size: 16px;
  color: #2c3e50;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const TableButton = styled.button`
  border: none;
  padding: 7px 14px;
  border-radius: 10px;
  cursor: pointer;
  margin-right: 4px;
  margin-left: 4px;

  &.activeButton {
    color: white;
    background: #185adb;
  }

  &.inactiveButton {
    color: #2c3e50;
    background: #f9f9f9;
  }
`

export const Input = styled.input`
  border: 0;
  background: #eadef7;
  padding: 5px 10px;
  margin: 0 10px;
  border-radius: 5px;
`
