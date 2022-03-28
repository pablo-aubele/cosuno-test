import { useState, useEffect } from "react"

import { getRequest } from "./clients/ApiClient"

import Layout from "./components/Layout"
import Companies from "./components/Companies"
import Loading from "./components/Loading"
import ErrorMessage from "./components/ErrorMessage"

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
    <Layout>
      { isLoading ? (
        <Loading />
      ) : errorMessage ? (
        <ErrorMessage>{ errorMessage }</ErrorMessage>
      ) : (
        <Companies companies={companies} />
      ) }
    </Layout>
  )
}

export default App;