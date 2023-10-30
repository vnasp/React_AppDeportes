
const Menu = () => {
  return (
    <div id="menu" className="flex flex-row justify-around items-center p-2 bg-gray-300  text-white" style={{ width: '360px' }}>
      <div className="flex flex-col">
        <span className="material-symbols-outlined">
        👤
        </span>
        Mi perfil
      </div>
      <div>
        <span className="material-symbols-outlined">🗓️
        </span>
        Agenda
      </div>
      <div>
        <span className="material-symbols-outlined">❤️</span>
        Mi Favoritos
      </div>
      <div>
        <span className="material-symbols-outlined">❔</span>
        Ayuda
      </div>
    </div>
  )
}
export default Menu