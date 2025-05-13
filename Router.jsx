import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home.jsx'
import Web_Series from './Web_Series.jsx'
import Login from './Login.jsx'
import Hindi from './Hindi.jsx'
import Korean from './Korean.jsx'
import Comedy from './Comedy.jsx'
import English from './English.jsx'
import SeriesDetails from './SeriesDetails.jsx'
import WatchList from './WatchList.jsx'
import PrivateRoute from './PrivateRoute.jsx' 

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path='/home'
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route path='/series/:title' element={<SeriesDetails />} />
        <Route path='/webSeries' element={<PrivateRoute><Web_Series /></PrivateRoute> }>
          <Route path='hindiWebSeries' element={<Hindi />} />
          <Route path='koreanWebSeries' element={<Korean />} />
          <Route path='comedyWebSeries' element={<Comedy />} />
          <Route path='englishWebSeries' element={<English />} />
        </Route>
        <Route
          path='/watchlist'
          element={
            <PrivateRoute>
              <WatchList />
            </PrivateRoute>
          }
        />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
