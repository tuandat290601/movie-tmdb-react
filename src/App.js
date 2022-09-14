import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header, Footer } from './components'
import AutoScrollToTop from './components/AutoScrollToTop/AutoScrollToTop'
import { Home, MovieDetail } from './pages'


const App = () => {
  return (
    <BrowserRouter>
      <AutoScrollToTop>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/movie/:movie_id" element={<MovieDetail />} />
        </Routes>
      </AutoScrollToTop>
      <Footer />
    </BrowserRouter>
  )
}

export default App