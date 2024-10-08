import { useState } from "react"

export const Contador = ({inicial, stock, funcionAgregar}) => {

    const [contador, setContador] = useState(inicial)

    const sumarContador = () => {
        if (contador < stock) {
            setContador(contador +1)
        }
    }

    const restarContador = () => {
        if ( contador > inicial) {
            setContador (contador - 1)
        }
    }

  return (
    <>
        <div className="fs-4 mt-2">
            <button className="rounded-circle" onClick={restarContador}> - </button>
            <strong>{contador}</strong>
            <button className="rounded-circle" onClick={sumarContador}> + </button>
        </div>
        <button className="fs-5 mt-3 btn btn-dark btn-lg rounded-2" onClick={()=>funcionAgregar(contador)}>AGREGAR AL BOLSO</button>
    </>
  )
}

export default Contador