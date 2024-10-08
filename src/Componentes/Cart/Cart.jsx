import { useContext } from 'react'
import { CarritoContext } from '../../Context/CarritoContext'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'

const Cart = () => {
    const {carrito, total, cantidadTotal, vaciarCarrito} = useContext(CarritoContext) 

    if (cantidadTotal === 0) {
        return (
            <div className='text-center'>
                <img className='mt-5' src="https://www.cristobalcolon.com/fullaccess/item24919foto106224th.jpg" alt="Bolso de compras" width={250} />
                <h3 className='text-center align-middle mt-5 mb-3'>AÚN NO HAY PRODUCTOS EN EL BOLSO!</h3>
                <h5 className='text-center align-middle mb-5'><Link to="/"><button className="fs-4 mt-4 btn btn-dark btn-lg rounded-2">VER PRODUCTOS</button></Link></h5>
            </div>
        )
    } 
    return (
        <div className='container my-5 rounded-4 shadow'>
            <table className='table pt-5'>
                <thead>
                  <tr>
                    <td><h4 className="ps-4 pt-2 mt-3 text-start align-middle" colSpan="4">BOLSO DE COMPRAS</h4></td>
                  </tr>
                  <tr>
                    <td><h5 className="ms-5 text-start align-middle" colSpan="2">Producto</h5></td>
                    <td><h5 className="ps-5 align-middle" colSpan="3">Cantidad</h5></td>
                    <td><h5 className="text-center align-middle" colSpan="4">Precio U.</h5></td>
                    <td className="text-end align-middle" colSpan="6"><button className='btn-md border-dark rounded-2' onClick={()=> vaciarCarrito()}>VACIAR BOLSO</button></td>
                  </tr>
                </thead>
                <tbody>
                    {carrito.map(producto => <CartItem key={producto.id} {...producto}/>)}
                </tbody>
                <tfoot>
                  <tr>
                    <td className="text-end align-middle" colSpan="2"><h4>Cantidad Total: {cantidadTotal}</h4></td>
                    <td className="text-center align-middle"><h4>Valor Total: ${total} ARS</h4></td>
                    <td className="text-end align-middle"><Link to="/checkout" className="btn btn-dark btn-lg rounded-2 mb-2 mt-2">CHECKOUT</Link></td>
                  </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default Cart