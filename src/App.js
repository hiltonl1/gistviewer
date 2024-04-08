import React from 'react';
import MainPage from './pages/MainPage';
import DetailPage from './pages/DetailPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
   
    <div className='App'>
    <BrowserRouter>
      <Routes>
        <Route path='/' >
          <Route index element={<MainPage />} />
          <Route path='detail' element={<DetailPage />} />                    
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
