import { useState, useEffect } from "react"

import { getRequest } from "./clients/ApiClient"

import Companies from "./components/Companies"

import 'bootstrap/dist/css/bootstrap.min.css';

const fetchCompanies = async (setCompanies, setIsLoading, setErrorMessage) => {
  setIsLoading(true)
  try {
      const companies = await getRequest(`/companies`)

      if(!companies.data.code) {
          setCompanies(companies.data)
      }
      else {
        throw new Error('There was an error while loading the companies')
      }
  }
  catch(e) {
      setCompanies([])
      setErrorMessage(e.message)
  }
  setIsLoading(false)
}

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState()
  const [companies, setCompanies] = useState([])

  useEffect(() => {
    fetchCompanies(setCompanies, setIsLoading, setErrorMessage)
  }, [])

  return (
    <div>
      { isLoading ? (
        <div>Loading companies...</div>
      ) : errorMessage ? (
        <div>{ errorMessage }</div>
      ) : (
        <Companies companies={companies} />
      ) }
    </div>
  )
}

export default App;