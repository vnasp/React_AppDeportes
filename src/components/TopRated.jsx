import Favorites from "./Favorites"

const TopRated = () => {
  return (
    <>
      <div className="flex flex-col justify-start items-start me-3">
        <div className="bg-gray-300 rounded-lg w-40 h-16 flex justify-end items-start">
          <Favorites />
        </div>
        <div className="flex flex-row justify-between items-center w-full text-md font-bold">
          <div>Lorem Ipsum</div>
          <div>5 ⭐</div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start me-3">
        <div className="bg-gray-300 rounded-lg w-40 h-16 flex justify-end items-start">
          <Favorites />
        </div>
        <div className="flex flex-row justify-between items-center w-full text-md font-bold">
          <div>Lorem Ipsum</div>
          <div>5 ⭐</div>
        </div>
      </div>
    </>
  )
}

export default TopRated