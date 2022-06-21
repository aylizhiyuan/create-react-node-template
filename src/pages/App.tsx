import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home/index'
import A from '@/pages/A'
import B from '@/pages/B'
import C from '@/pages/C'
import D from '@/pages/D'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a" element={<A />} />
        <Route path="/b" element={<B />} />
        <Route path="/c" element={<C />} />
        <Route path="/d" element={<D />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
