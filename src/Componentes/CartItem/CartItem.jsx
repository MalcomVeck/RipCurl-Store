import { useContext } from "react"
import {CarritoContext} from '../../Context/CarritoContext'

const CartItem = ({item, cantidad}) => {
    const {eliminarProducto} = useContext(CarritoContext)

    return (
      <tr>
        <th className="ps-5 align-middle"><h4>{item.nombre}</h4></th>
        <th className="text-center align-middle"><h5>{cantidad}</h5></th>
        <th className="text-center align-middle"><h5>${item.precio} ARS</h5></th>
        <th className="text-end align-middle"><button className="border-dark btn sm rounded-2" onClick={()=>eliminarProducto(item.id)}>X</button></th>
      </tr>
    )
}

export default CartItem