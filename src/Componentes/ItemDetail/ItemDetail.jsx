import { useState } from "react";
import Contador from "../Contador/contador";
import { Link } from "react-router-dom";
import { CarritoContext } from "../../Context/CarritoContext";
import { useContext } from "react";
import Swal from "sweetalert2";


const ItemDetail = ({id, nombre, precio, imagen, descripción, stock}) => {

  const [agregarCantidad, setAgregarCantidad] = useState(0)

  const {agregarAlCarrito} = useContext(CarritoContext)

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);

    const item = {id, nombre, precio}
      agregarAlCarrito (item, cantidad)
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Producto Agregado",
        showConfirmButton: false,
        timer: 1000
      });
  }

  return (
    <div className="container my-5">
      <div className="card border-light bg-light shadow p-2 w-100">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={imagen} className="rounded-4 p-2" height="600" alt={nombre}/>
          </div>
          <div className="col-md-8 text-center">
            <div className="card-body">
              <h2 className="card-title pt-2">{nombre}</h2>
              <h6 className="card-text pt-2">Artículo Número: {id}</h6>
              <h6 className="card-text pb-2">Stock: {stock}</h6>
              <h5 className="card-text ms-5 me-5"><b>Descripción:</b> {descripción}</h5>
              <h2 className="card-text text-danger pt-3">${precio} ARS</h2>
              <h5>{agregarCantidad > 0 ? (<Link to="/cart"><button className="fs-5 mt-5 btn btn-dark btn-lg rounded-2">FINALIZAR COMPRA</button></Link>) : (<Contador inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)}</h5>
              <Link to="/"><button className="fs-6 mt-5 border-dark rounded-2">MÁS PRODUCTOS</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail
