import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Category from './components/Category/Category';
import Notification from './components/Notification/Notification';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/home/category" element={<Category/>}/>
        <Route path="/home/notification" element={<Notification/>}/>
        <Route path="home/profile" element={<Profile/>}/>
      </Routes>
    </div>
  );
}

export default App;
