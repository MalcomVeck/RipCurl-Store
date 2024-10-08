import { useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import Loader from "../Loader/Loader";
import { db } from '../../Services/Config';
import {getDoc, doc} from 'firebase/firestore'

const ItemDetailContainer = () => {

  const [producto, setProducto] = useState(null)
  const [loading, setLoading] = useState(false)

  const {idProducto} = useParams()

useEffect(()=>{
  setLoading(true)
  const nuevoDoc = doc(db, "Inventario", idProducto)

  getDoc(nuevoDoc)
    .then(res => {
      const data = res.data();
      const nuevosProducto = {id: res.id,...data}
      setProducto(nuevosProducto)
    })
    .catch(error => console.log(error))
    .finally(()=>{
      console.log("finalized process")
      setLoading(false)
  })
}, [idProducto])

  return (
    <>
      {loading ? <Loader/> : <ItemDetail {...producto} />}
    </>
  )
}

export default ItemDetailContainer