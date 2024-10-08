import { Link } from "react-router-dom"

const Error404 = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="text-center">
                    <p className="fs-1 mt-1 mb-4">¡PÁGINA FUERA DE SERVICIO!</p>
                    <img src="https://media1.tenor.com/m/-a1sBSHRfWUAAAAC/mono-platillos.gif" alt="Mono Simpson" width={600}/>
                </div>
                <div className="text-center">
                    <Link to={"/"} className="btn btn-dark text-light col-3 p-2 fs-4 mt-5 mb-3 ">VOLVER AL INICIO</Link>
                </div>
            </div>
        </div>
    )  
}

export default Error404

