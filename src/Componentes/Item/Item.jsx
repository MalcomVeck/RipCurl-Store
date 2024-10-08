import { Link } from 'react-router-dom';
import './Item.css'

const Item = ({id, nombre, precio, imagen}) => {
  return (
    <div className="col-md-3 p-3">
      <div className="card bg-light border-1">
        <img className='rounded-2' src={imagen} alt={nombre}/>
        <div className="card-body text-center">
          <h4>{nombre}</h4>
          <h4 className="text-danger">${precio} ARS</h4>
          <Link to={`/detalle/${id}`}><button className="boton-card w-100 p-2 mt-2 mb-1 fs-6 border-secondary rounded-1">Ver Producto</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Item