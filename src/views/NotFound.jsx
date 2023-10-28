import { useNavigate } from "react-router-dom"

const NotFound = () => {
  const navigate = useNavigate()

  const handleBack = () => {
    navigate(`/`)
  }
  return (
    <section id="main" className="flex flex-col justify-center items-center mt-8" style={{ width: '360px' }}>
      <div>Ñeeeeee. Página no encontrada.</div>
      <div>     <button className="border-0 bg-transparent" onClick={handleBack}>
        <span className="material-symbols-outlined">
          arrow_back
        </span>
      </button></div>
    </section>
  )
}

export default NotFound