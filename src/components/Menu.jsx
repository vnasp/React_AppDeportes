
const Menu = () => {
  return (
    <div id="menu" className="flex flex-row justify-between gap-1 items-center text-black w-full">
      <div className=" bg-gray-300 p-2 w-1/4">
        <p className="material-symbols-outlined">
          person
        </p>
        <p className="text-2xs">Mi Perfil</p>
      </div>
      <div className=" bg-gray-300 p-2 w-1/4">
        <p className="material-symbols-outlined">
          calendar_month
        </p>
        <p className="text-2xs">Agenda</p>
      </div>
      <div className="bg-gray-300 p-2 w-1/4">
        <p className="material-symbols-outlined">
          favorite
        </p>
        <p className="text-2xs">Mis Favoritos</p>
      </div>
      <div className=" bg-gray-300 p-2 w-1/4">
        <p className="material-symbols-outlined">
          contact_support
        </p>
        <p className="text-2xs">Ayuda</p>
      </div>
    </div>
  )
}
export default Menu