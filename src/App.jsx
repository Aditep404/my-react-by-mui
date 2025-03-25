import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {CssBaseline} from '@mui/material'
import MyPageA from './views/MyPageA'
import MyPageB from './views/MyPageB'
export default function App() {
  return (
    <>
    <CssBaseline />
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<MyPageA />} />
    <Route path="/wow" element={<MyPageB />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}