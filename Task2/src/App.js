import React, { useState } from 'react'
import './App.css'
export default function App() {
  const [user,setUser]=useState([]);
  const loadUserData=async ()=>{
  const url="https://api.github.com/users";
  const response=await fetch(url);
  const parsedResponse=await response.json();
  setUser(parsedResponse);
  };

  return (
    <div style={{"text-align": 'center'}}>
      <header>
        <div class="nav">
        <div class="logo">
        LGMVIP
        </div>
        <div class="btn" style={{'cursor':'pointer'}} onClick={loadUserData}><i class="fi fi-bs-inbox-in"></i> Get Data</div>
        </div>
      </header>
      
      <p>Task 2: Using create react app, added a button 'Get Data' which fetches an Api and displayed it.</p>
      
      <h2>Users:</h2>
      
        <div class="profiles" style={{"display":'flex'}}>
        {user.map((element)=>(<li key={element.id}>
        <img src={element.avatar_url}></img><br></br>
        Name:{element.login}
        
          </li>))}
        </div>
      
    </div>
  )
}
