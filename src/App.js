import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header, Footer } from './components'
import { Home } from './pages'


const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App