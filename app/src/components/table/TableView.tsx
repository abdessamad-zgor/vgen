import React from 'react'
import { useAtom } from 'jotai'
import { modelsAtom, useModels } from '@/state/models'
import Table from './Table'
import addIcon from '../../assets/add.svg'

function TableView() {
  const { models, addTable } = useModels()
  return (
    <div className='h-full flex w-full items-center justify-center flex-wrap gap-2'>
      {
        models.filter(m => m.type == "table").map(
          m =>
            <Table id={m.id} />
        )
      }
      <div className='min-h-[300px] max-h-[350px] flex justify-center items-center basis-1/6'>
        <button onClick={addTable}>
          <img src={addIcon} className='w-[70px] h-[70px] shadow-lg rounded-full cursor-pointer' />
        </button>
      </div>
    </div>
  )
}

export default TableView
