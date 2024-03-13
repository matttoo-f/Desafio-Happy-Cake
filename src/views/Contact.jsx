import { useState } from "react"
import Formulario from "../components/Formulario"

const Contact = () => {
    const [Error, setError] = useState(false)
    const [Success, setSuccess] = useState(false)
    const [message,setMessage]= useState("")


    return  (
        <>
        <div className="contact">
            <Formulario setError ={setError} setSuccess = {setSuccess} setMessage={setMessage}/>
            {Error && <p className="error">{message}</p>}
            {Success && <p className="success">{message}</p>}
        </div>
        </>
    )
}
export default Contact