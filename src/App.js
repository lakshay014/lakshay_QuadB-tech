import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AllMovies from './page/AllMovies';
import SingleMovie from './page/SingleMovie';
import Modal from 'react-modal';
import './App.css'

Modal.setAppElement('#root');
const App = () => {
  return (
    <div className='temp'>

      <Routes>
        <Route exact path="/" element={<AllMovies />} />
        <Route path="/movie/:id" element={<SingleMovie />} />
      </Routes>
    </div>
  )
}

export default App;
