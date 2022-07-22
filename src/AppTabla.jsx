import { useState, useEffect } from 'react';
import './App.css';

function AppTabla() {
  const url ='https://w0c78d732h.execute-api.us-east-1.amazonaws.com/dev';
  
  const[datos, setDatos] = useState()
  
  const fetchApi = async() =>{
    const data = await fetch(url);
    const {body} = await data.json();
    setDatos(body);
  }

  useEffect(() => {
    fetchApi()
  },[])

  return(
    <div className='App'>
      Tabla con React
    {
      !datos ? "Cargando ..." : 
       datos.map(item =>(
        <tr>
          <td id="userid">{item.userId}</td>    
          <td id="id">{item.id}</td>
          <td id="title">{item.title}</td>
          <td id="body">{item.body}</td>
        </tr>
      ))
    }
    </div>
  )
}

export default AppTabla
