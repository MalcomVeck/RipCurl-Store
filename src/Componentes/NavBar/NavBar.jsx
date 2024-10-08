import CartWidget from "../CartWidget/CartWidget"
import { Link, NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <header>
            <div>
            <p className="text-white text-center bg-dark fs-6 p-1"><b> ★ TIENDA INSPIRADA EN RIPCURL ARGENTINA ★ REALIZADA POR MALCOM VECK PARA EL CURSO REACTJS ★ SURF OR DIE BOY ★ </b></p>
            <div className="container-fluid mb-3">
                <div className="bg-tertiary shadow p-3">
                    <div className="row">
                        <div className="col pt-2">
                            <Link to="/">
                                <img src="../../../public/rip-curl-logo.png" alt="RipCurlLogo" width="220" height="30" className="ms-5"/>
                            </Link>
                        </div>
                        <div className="col d-flex align-items-center ms-5">
                            <ul className="nav justify-content-center">
                                <li className="nav-item">
                                    <NavLink to="categoria/Camisas" className="nav-link text-dark fs-4"><b>CAMISAS</b></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="categoria/Remeras" className="nav-link active text-dark fs-4"><b>REMERAS</b></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="categoria/Shorts" className="nav-link text-dark fs-4"><b>SHORTS</b></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="categoria/Neoprene" className="nav-link text-dark fs-4"><b>SURF</b></NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="col d-flex align-items-center justify-content-end">
                            <CartWidget/>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </header>
    )
}

export default NavBar