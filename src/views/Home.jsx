import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate()

  const handleRegister = (e) => {
    e.preventDefault()
    navigate(`/register/`)
  }
  const handleCoach = (e) => {
    e.preventDefault()
    navigate(`/coach/`)
  }

  return (
    <section id="main" className="flex flex-col justify-center items-center center">
      <div className="bg-gray-300 rounded w-40 h-40 mb-3"></div>
      <div>
        <p className="text-2xl font-extrabold">¡Bienvenido a LOREM IPSUM!</p>
      </div>
      <div className="my-3 py-3 w-48">
        <p>Encuentra a tu Coach ideal y entrena cuando quieras</p>
      </div>
      <div className="text-center flex flex-col items-center">
        <div className="mb-3">
          <button className="bg-gray-300 rounded-lg p-2" style={{ width: '200px' }} onClick={handleRegister}>
            <div className="flex flex-row items-center justify-stretch ms-6">
              <span className="material-symbols-outlined">sports_mma</span>
              <span className="ms-2"> Quiero Entrenar</span>
            </div>
          </button>
        </div>
        <div>
          <button className="bg-gray-300 rounded-lg p-2" style={{ width: '200px' }}>
            <div className="flex flex-row items-center justify-stretch ms-6">
              <span className="material-symbols-outlined">exercise</span>
              <span className="ms-6" onClick={handleCoach}> Soy Coach</span>
            </div>
          </button>
        </div>
      </div>
      <div className="bg-gray-400"></div>
    </section>
  )
}

export default Home