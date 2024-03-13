import { useState } from "react"

const Formulario = ({ setError, setSuccess, setMessage }) => {
    const [email, setEmail] = useState("")
    const [description, setDescription] = useState("")

    const ChangeEmail = (e) => {
        setEmail(e.target.value)
        setError(false)
    }
    
    const ChangeDescription = (e) => {
        setDescription(e.target.value)
        setError(false)
    }

    const submitButton = (e) => {
        e.preventDefault()

        if (email === "" || description === "") {
            setError(true)
            setSuccess(false)
            setMessage("Verifica los campos")
            return
        }

        if (!email.includes('@')) {
            setError(true)
            setSuccess(false)
            setMessage("El correo debe incluir @")
            return
        }

        setEmail("")
        setDescription("")

        setError(false)
        setSuccess(true)
        setMessage("Mensaje enviado satisfactoriamente :)")
    }
    
    return (
        <>
            <form className="container-form" onSubmit={submitButton}>
                <h1>Cuéntanos, ¿en qué te podemos ayudar?</h1>
                <p>Correo electrónico</p>
                <input placeholder="ejemplo@email.com" type="text" value={email} onChange={ChangeEmail} />
                <p>Descripción</p>
                <textarea placeholder="Ingresa aquí tu comentario" className="description" type="text" value={description} onChange={ChangeDescription}/>
                <button type="submit">Enviar</button>
            </form>
        </>
    )
}

export default Formulario
