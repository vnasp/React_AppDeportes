import { createContext, useState,useEffect } from "react"
export const DataContext = createContext()

const DataProvider = ({ children }) => {
  const API_URL = "/Activities.json"
  const CLP = new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' })
  const [ customer, setCustomer ] = useState({})
  const [ activities, setActivities ] = useState([])
  const [searchResult, setSearchResult] = useState([])


  try {
    const getActivities = async () => {
        const response = await fetch(API_URL)
        if (response.status != 200) {
            throw new Error
        }
        const data = await response.json()
        setActivities(data)
  
    }
    useEffect(() => {
      getActivities()
    }, [])
}
catch (Error) {
    alert({ Error })
}

  return (
    <DataContext.Provider value={{ customer, setCustomer, activities, setActivities, searchResult, setSearchResult, CLP }}>
        {children}
    </DataContext.Provider>
)
}

export default DataProvider