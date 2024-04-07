import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Appbar from './components/Appbar'
import View from './components/View'

function App() {

  return (
    <main className='w-full min-h-screen bg-stone-200'>
      <Appbar />
      <View />
    </main>
  )
}

export default App
