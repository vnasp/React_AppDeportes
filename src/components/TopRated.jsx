import { useContext } from "react"
import Favorites from "./Favorites"
import { DataContext } from "../context/DataContext"

const TopRated = () => {
  const { activities } = useContext(DataContext)
  const best_activities = activities.filter((activity) => activity.grade >= 4)
  best_activities.sort((x, y) => y.grade - x.grade)

  return (
    <>
      {best_activities.map((activity) => (
        <div className="flex flex-col justify-start items-start me-3" key={activity.id}>
          <div className="bg-gray-300 rounded-lg w-40 h-16 flex justify-end items-start">
            <Favorites />
          </div>
          <div className="flex flex-row justify-between items-center w-full text-md font-bold">
            <div>{activity.name}</div>
            <div className="flex justify-center items-center">
              <div>{activity.grade}</div>
              <div className="material-symbols-outlined text-lg grade tracking-widest">grade</div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default TopRated