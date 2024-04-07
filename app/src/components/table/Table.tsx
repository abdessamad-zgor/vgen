import React from 'react'
import type { Table, Type } from '../../types/models'
import { useModels } from '../../state/models'
import addIcon from "@/assets/add.svg"
import { SQLDataTypes } from '@/types/data';
import Field from './Field';

type TablePropTypes = {
  id: string
};

function Table({ id }: TablePropTypes) {
  const { getModel, setTableField } = useModels();
  const table = getModel(id) as Table
  const { name, fields } = table
  return (
    <div className='rounded shadow-lg border border-gray-300 min-h-[200px] max-h-[350px] bg-stone-50 basis-1/6'>
      <div className='border-b text-lg border-gray-300 font-medium text-center min-h-[20px]'>{name.charAt(0).toUpperCase() + name.slice(1)}</div>
      {
        fields.map(
          (f, i) => <Field id={id} field={f} index={i} />
        )
      }
      {
        <div className='border-b text-lg border-gray-300 font-medium text-center'>
          <button className='' onClick={() => setTableField(id, fields.length, { name: 'property1', type: SQLDataTypes.VARCHAR, contraints: [] })} >
            <img src={addIcon} className='w-[1em] h-[1em]' />
          </button>
        </div>
      }
    </div>
  )
}

export default Table
