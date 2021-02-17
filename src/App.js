import React, { useEffect, useState } from 'react'
import axios from 'axios'
import EmployeeTable from './components/EmployeeTable/EmployeeTable'

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    getData()
  }, [])

  return <EmployeeTable data={data} />

  async function getData() {
    const { data } = await axios.get('http://localhost:3004/employees')
    setData(data)
  }
}

export default App
