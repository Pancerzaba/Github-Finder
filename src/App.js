import React, {Component} from 'react';
import Navbar from './components/layoyt/Navbar';
import UserItem from './components/useres/UserItem';
import './App.css';

class App extends React.Component{
  
  render(){
  
    return (
     
    <div className='App'>
       <Navbar/>
        <UserItem/>
    </div>
  );
  }

}

export default App;
