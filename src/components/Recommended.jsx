import { useContext } from "react"
import Favorites from "./Favorites"
import { DataContext } from "../context/DataContext"

const Recommended = () => {
  const { activities } = useContext(DataContext)
  const recomm_activities = activities.filter((activity) => activity.distance <= 10)
  recomm_activities.sort((x, y) => x.distance - y.distance)

  return (
    <>
      {recomm_activities.map((activity) => (
        <div className="flex flex-col justify-start items-start me-3" key={activity.id}>
          <div className="bg-gray-300 rounded-lg w-32 h-20 flex justify-end items-start">
            <Favorites />
          </div>
          <div className="text-md font-bold">{activity.name}</div>
          <div className="text-sm flex justify-center items-center">
            <div><span className="material-symbols-outlined text-sm">
              location_on
            </span></div>
            <div> A {activity.distance} KM</div>
          </div>
          <div>
            {activity.grade == 5 ? <div className="material-symbols-outlined text-sm grade">grade grade grade grade grade</div> : ''}
            {activity.grade == 4 ? <div className="material-symbols-outlined text-sm grade">grade grade grade grade <span className="gradeoff">grade</span></div> : ''}
            {activity.grade == 3 ? <div className="material-symbols-outlined text-sm grade">grade grade grade <span className="gradeoff">grade grade</span></div> : ''}
            {activity.grade == 2 ? <div className="material-symbols-outlined text-sm grade">grade grade <span className="gradeoff">grade grade grade</span></div> : ''}
            {activity.grade == 1 ? <div className="material-symbols-outlined text-sm grade">grade <span className="gradeoff">grade grade grade grade</span></div> : ''}
          </div>
        </div>
      ))}
    </>

  )
}

export default Recommended