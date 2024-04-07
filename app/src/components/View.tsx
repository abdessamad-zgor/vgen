import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs'
import React from 'react'
import Graph from './graph/Graph'
import TableView from './table/TableView'

function View() {
  return (
    <Tabs defaultValue='tables' className='w-full px-12 py-4 '>
      <TabsList className='flex w-1/6 gap bg-stone-300 rounded p-1 my-2'>
        <TabsTrigger value='tables' className='basis-1/2 py-2 rounded'>Tables view</TabsTrigger>
        <TabsTrigger value='graph' className='basis-1/2 py-2i rounded'>Graph view</TabsTrigger>
      </TabsList>
      <TabsContent className='w-full p-4 rounded-lg bg-stone-100 border border-zinc-400' value='tables'>
        <TableView />
      </TabsContent>
      <TabsContent className='w-full p-4 rounded-lg bg-white border border-stone-200' value='graph'>
        <Graph width={600} height={600} />
      </TabsContent>
    </Tabs>
  )
}

export default View
