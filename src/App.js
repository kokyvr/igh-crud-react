
import { useEffect, useState } from 'react';
import './App.css';
import FormProducto from './componentes/Producto/FormProducto';
import Producto from './componentes/Producto/Producto';
const axios = require('axios').default;

const api = "http://localhost:8080/producto"
function App() {



  const [productos, setProductos] = useState([]);
  const [producto, setProducto] = useState();

  const cargaProductos = () => {
    axios.get(`${api}/getAll`).then(({ data }) => setProductos(data.productos));
  }

  useEffect(cargaProductos,[]);

  const onSubmit = (values) => {
    console.log(values);
    axios.post(`${api}`,values).then(()=>cargaProductos())
    .catch(error=>console.log(`Error :${error}`));
  }


  return (
    <div className='App'>
      <Producto productos={productos}/>
      <FormProducto onSubmit={onSubmit} producto={producto} />
    </div>
  );
}

export default App;
