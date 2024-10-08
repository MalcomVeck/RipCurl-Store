import CartWidget from "../CartWidget/CartWidget"
import { Link, NavLink } from "react-router-dom"
import './Navbar.css'

const NavBar = () => {
    return (
        <header>
            <div>
            <p className="text-white text-center bg-dark fs-6 p-1"><b> ★ TIENDA INSPIRADA EN RIPCURL ARGENTINA ★ REALIZADA POR MALCOM VECK PARA EL CURSO REACTJS ★ SURF OR DIE BOY ★ </b></p>
            <div className="container-fluid mb-2">
                <div className="navbar bg-tertiary row">
                    <div className="col">
                        <Link to="/">
                            <img src="https://logodownload.org/wp-content/uploads/2014/10/rip-curl-logo-6.png" alt="RipCurlLogo" width="220" height="40" className="ms-5 pb-2"/>
                        </Link>
                    </div>
                    <div className="col d-flex align-items-center ms-5 pb-2">
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
        </header>
    )
}

export default NavBar