import Menu from "../components/Menu"
import Recommended from "../components/Recommended"
import TopRated from "../components/TopRated"
import Search from "../components/Search"

const Activities = () => {

  return (
    <>
      <section className="flex flex-col justify-center items-center mt-8" style={{ width: '360px', height: '640px' }}>
        <div id="activities-search" className="flex flex-row justify-around items-center w-full my-3 z-50">
          <div className="bg-gray-300 w-16 h-12">
          </div>
          <Search />
        </div>
        <div id="activities-recommended" className="flex flex-col justify-start items-start w-full mb-3 px-3 overflow-x-scroll overflow-y-hidden">
          <div className="text-lg font-bold">Recomendaciones</div>
          <div className="flex flex-row">
            <Recommended />
          </div>
        </div>
        <div id="activities-near" className="flex flex-col justify-start items-start w-full mb-3 px-3">
          <div className="text-lg font-bold">Cerca de ti</div>
          <div className="bg-gray-300 rounded-lg w-full h-28">
          </div>
        </div>
        <div id="activities-near" className="flex flex-col justify-start items-start w-full mb-3 px-3 overflow-x-scroll overflow-y-hidden">
          <div className="text-lg font-bold">Mejor valorados</div>
          <div className="flex flex-row">
            <TopRated />
          </div>
        </div>
        <Menu />
      </section >
    </>
  )
}

export default Activities