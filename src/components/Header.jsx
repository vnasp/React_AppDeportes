
const Header = () => {
  return (
    <section id="header" className="bg-gray-300 flex flex-row justify-between items-end px-3 absolute top-0" style={{ width: '360px'}}>
      <div>
        <span>22:30</span>
      </div>
      <div className="flex items-center">
        <span className="material-symbols-outlined">4g_plus_mobiledata</span>
        <span className="material-symbols-outlined">signal_cellular_alt</span>
        <span>75%</span>
        <span className="material-symbols-outlined">battery_5_bar </span>
      </div>
    </section>
  )
}

export default Header