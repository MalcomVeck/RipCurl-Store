import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import { db }   from "../../Services/Config";
import {collection, getDocs, query, where } from "firebase/firestore"
import Carousel from "../Carousel/Carousel";

const ItemListContainer = () => {

    const [Inventario, setProductos] = useState([]);
    const [loading, setLoading] = useState(false)

    const {idCategoria} = useParams()

    useEffect(()=> {
        setLoading(true)
        const misProductos = idCategoria ? query(collection(db, "Inventario"), where("categoria", "==", idCategoria)) : (collection(db,"Inventario"))

        getDocs(misProductos)
        .then (res => {
            const nuevosProductos = res.docs.map(doc =>{
                const data = doc.data()
                return {id:doc.id , ...data}
            })
            setProductos(nuevosProductos)
        })
        .catch(error => console.log(error))
        .finally(()=>{
            console.log("finalized process")
            setLoading(false)
        })
    }, [idCategoria])

    return (
        <div>
            <div>
                <Carousel/>
                <p className="text-uppercase text-white text-center bg-dark fs-5 p-1"><b>{idCategoria}</b></p>
            </div>
            <div className="container my-5">
                <div className="row">
                    {loading ? <Loader/> : <ItemList productos={Inventario}/> }
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer