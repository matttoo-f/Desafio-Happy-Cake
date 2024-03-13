import { Link } from "react-router-dom"
import { GiCupcake } from "react-icons/gi"

import Home from "../views/Home"

const NavBar = ({nav}) => {

    return (
        
        <nav>
            <div className="link-nav">
                {nav.map((enlace, index) => {
                    return(
                        <Link className="enlaces" key={index} to={enlace.to}>{enlace.icon}{enlace.name}</Link>
                    )
                })}
            </div>
            <Link className="logo" to='/' element={<Home/>}><h1>Happy Cakes</h1><GiCupcake className="icon-logo"/></Link>
        </nav>
        
    )

}
export default NavBar