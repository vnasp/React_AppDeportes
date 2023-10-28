const Footer = () => {
  return (
    <section id="footer" className="absolute bottom-0 flex flex-row justify-around items-center p-2 bg-gray-800  text-white" style={{ width: '360px' }}>
      <div>
        <span className="material-symbols-outlined">
          reply
        </span>
      </div>
      <div>
        <span className="material-symbols-outlined">circle</span>
      </div>
      <div>
        <span className="material-symbols-outlined">check_box_outline_blank</span>
      </div>
    </section>
  )
}

export default Footer