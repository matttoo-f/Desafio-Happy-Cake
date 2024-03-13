import { Link } from "react-router-dom"
import { GiCupcake } from "react-icons/gi"


const NotFound = () => {
    return (
        <>
        <div className="notFound">
            <GiCupcake className="logo-not"/>
            <h1>Esta página no existe!!</h1>
            <Link className="volver" to="/">Volver al Home</Link>
        </div>
        </>
    )
}
export default NotFound