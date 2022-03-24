import './App.css';
import Header from './components/Header';
import Form from './pages/Form'
import {Routes, Route } from 'react-router-dom';
import Price from './pages/Price';
import OtpVerify from './pages/OtpVerify';
import Submit from './pages/Submit';

function App() {
  return (
    <div className="App">   
    <Header/>   
      <Routes>
        <Route path='/' element = {<Form/>}/>
        <Route path='/car-booking' element = {<Form/>}/>      
        <Route path='/pricing' element = {<Price/>}/>
        <Route path='/otp-verify' element = {<OtpVerify/>}/>
        <Route path='/submission' element = {<Submit/>}/>
      </Routes>
    </div>
  );
}

export default App;
