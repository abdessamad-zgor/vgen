import React from 'react'
import type { Table } from '../../types/models'

type TablePropTypes = Table;

function Table({ name, fields }: TablePropTypes) {
  return (
    <div className='rounded shadow '>Table</div>
  )
}

export default Table
