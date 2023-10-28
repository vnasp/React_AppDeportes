import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { DataContext } from "../context/DataContext"

const Register = () => {
  const navigate = useNavigate()
  const { customer, setNewCustomer } = useContext(DataContext)

  const handleBack = () => {
    navigate(`/`)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/`)
  }

  const handleRegister = (e) => {
    e.preventDefault()
    setNewCustomer([...customer, {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
    }])
    navigate(`/hola`)
  }

  return (
    <>
      <section id="main" className="flex flex-col justify-center items-center mt-8" style={{ width: '360px' }}>
        <div className="flex flex-row justify-start items-end w-full mb-3 p-3">
          <div>
            <button className="border-0 bg-transparent" onClick={handleBack}>
              <span className="material-symbols-outlined">
                arrow_back
              </span>
            </button>
          </div>
          <div className="text-3xl font-extrabold text-center ms-12">
            Crea tu cuenta
          </div>
        </div>
        <div className="bg-gray-300 rounded-full w-36 h-36 mb-3 text-white flex justify-center items-center">
          <span className="material-symbols-outlined text-7xl">add_a_photo
          </span>
        </div>
        <form onSubmit={handleSubmit}>
          <div id="register-inputs" className="flex flex-col items-center mb-3">
            <div className="flex flex-row mb-2">
              <div><input className="bg-gray-300 rounded-lg indent-3 p-1" type="text" id="name" placeholder="Nombre" style={{ width: '80%' }}></input></div>
              <div><input className="bg-gray-300 rounded-lg indent-3 p-1" type="text" id="lastname" placeholder="Apellido" style={{ width: '80%' }}></input></div>
            </div>
            <div className="w-full mb-2">
              <input className="bg-gray-300 rounded-lg indent-3 p-1" type="text" id="email" placeholder="Correo electrónico" style={{ width: '90%' }}></input>
            </div>
            <div className="w-full mb-2">
              <input className="bg-gray-300 rounded-lg indent-3 p-1" type="password" id="password" placeholder="Contraseña" style={{ width: '90%' }}></input>
            </div>
          </div>
          <div id="register-button" className="flex flex-col items-center">
            <div className="flex flex-row justify-start text-2xs text-gray-700 mb-4 px-4">
              <div><input type="checkbox" className="me-2" /></div>
              <div className="text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquam sapien non fermentum convallis.
              </div>
            </div>
            <button className="bg-gray-300 rounded-lg mb-3 p-2" style={{ width: '200px' }} onClick={handleRegister}>
              Registrarse
            </button>
            <div className="mb-2 text-2xs font-bold underline">
            <a href="/recovery-password">Olvidé mi contraseña</a>
            </div>
          </div >
        </form>
        <div id="disclaimer" className="text-2xs text-gray-500 text-left absolute bottom-10 p-5">
          Al registrarte, aceptas nuestras <a href="/terms"><span className="font-bold underline">Condiciones de uso</span></a> y confirmas que has leído el <a href="/terms"><span className="font-bold underline">Aviso de Privacidad</span></a> y <a href="/terms"><span className="font-bold underline">Política de Cookies</span></a>.
        </div>
      </section >
    </>
  )
}

export default Register