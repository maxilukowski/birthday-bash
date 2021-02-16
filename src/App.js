import React, { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    getData()
  }, [])
  return <></>
  async function getData() {
    const { data } = await axios.get('http://localhost:3004/employees')
    setData(data)
  }
}

export default App
