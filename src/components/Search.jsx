import { useState, useContext, useEffect } from "react"
import { DataContext } from "../context/DataContext"

const SearchBox = () => {
  const { activities, searchResult, setSearchResult } = useContext(DataContext)
  const [search, setSearch] = useState('')

  const handleChange = (e) => {
    setSearch(e.target.value)
  }
  useEffect(() => {
    if (!search) {
      setSearchResult([])
    } else {
      setSearchResult(activities.filter((activity) =>
        activity.name.toLowerCase().includes(search.toLowerCase())
      ))
    }
  }, [activities, search, setSearch, setSearchResult])

  return (
    <>
      <div className="flex flex-col">
        <div className="bg-gray-300 rounded-lg flex justify-center items-center">
          <span className="material-symbols-outlined">
            search
          </span>
          <input className="rounded-lg indent-1 bg-gray-300 p-3 w-10/12" type="text" placeholder="¿Qué deporte quieres hacer hoy?" value={search} onChange={handleChange}></input>
        </div>
        <div id="Results" className="bg-white rounded-lg border-gray-400 border-2 z-50">
          <ul>
            {searchResult.map((activity) => (
              <li key={activity.id}>{activity.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default SearchBox