import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react";
import axios from 'axios';


function App() {
  const [data, setData] = useState([]);

  useEffect (() => {
      getBooks();
  }, [])

  const getBooks  = () => {
      axios.get(
          '/books'
      )
      .then ((response) => {
        setData(response.data)
      })

  }
  console.log(data);


  return (
    <div className="App">

    </div>
  );
}

export default App;
