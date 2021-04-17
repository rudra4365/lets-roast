import axios from 'axios';
import React, {useState, useEffect} from 'react';
import './App.css'

function App() {
  const [message, setMessage] = useState("initial");

  function refreshPage() {
    window.location.reload(false);
  }

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get('https://evilinsult.com/generate_insult.php?lang=en&type=json');
      console.log(request.data);
      setMessage(request.data.insult);
      return request;
    }
    fetchData();
}, [])

  return (
    <div className = "main_container">
      <h1>NO OFFENCE BUT...</h1>
      <div className = "insult_container">
        {message}
      </div>
      <img className = "meme" src = "https://media.giphy.com/media/cF7QqO5DYdft6/giphy.gif" alt = "loading..."></img>
      <h2>You still here ?</h2>
      <button onClick = {refreshPage} className = "try_again">
        Let's insult you more
      </button>
    </div>
  )
}

export default App
