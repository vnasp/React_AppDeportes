import { createContext, useState } from "react"
export const DataContext = createContext()

const DataProvider = ({ children }) => {
  const [ customer, setCustomer ] = useState({})

  return (
    <DataContext.Provider value={{ customer, setCustomer }}>
        {children}
    </DataContext.Provider>
)
}

export default DataProvider