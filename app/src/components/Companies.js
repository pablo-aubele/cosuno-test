import { useState, useEffect } from "react"

const getUniqueSpecialities = (companies) => {
  return [...new Set(companies.reduce((specialities, company) => {
    return [...specialities, ...company.specialities]
  }, []))]
}

const getFilteredCompanies = (companies, selectedSpecialities, searchInName) => {
  return companies.filter((company) => {
    if(!company.name.toLowerCase().includes(searchInName.toLowerCase())) {
      return false
    }

    if(!selectedSpecialities.every(speciality => company.specialities.includes(speciality))) {
      return false
    }
    
    return true
  })
}

const Companies = ({ companies }) => {

  const [specialities, setSpecialities] = useState([])
  const [selectedSpecialities, setSelectedSpecialities] = useState([])
  const [searchInName, setSearchInName] = useState("")

  useEffect(() => {
    setSearchInName("")
    setSelectedSpecialities([])
    setSpecialities(getUniqueSpecialities(companies))
  }, [companies])

  const selectSpeciality = (speciality) => {
    setSelectedSpecialities(selectSpecialities => [
      ...selectSpecialities,
      speciality
    ])
  }

  const unselectSpeciality = (speciality) => {
    setSelectedSpecialities(selectSpecialities => selectSpecialities.filter(selectSpeciality => selectSpeciality !== speciality))
  }

  const filteredCompanies = getFilteredCompanies(companies, selectedSpecialities, searchInName)

  return (
      <div>
        <div>
          <div>
            <input
              type="search"
              onChange={(e) => {
                setSearchInName(e.target.value)
              }}
              value={searchInName}
            />
          </div>
          <ul>
            { specialities.map((speciality, i) => {
              const isSelected = selectedSpecialities.includes(speciality)

              return (
                <li key={i}>
                  <input
                    type="checkbox"
                    id={ `speciality-${i}` }
                    checked={ isSelected }
                    onChange={ () => isSelected ? unselectSpeciality(speciality) : selectSpeciality(speciality) }
                  />
                  <label htmlFor={ `speciality-${i}` }>{ speciality }</label>
                </li>
              )
            }) }
          </ul>
        </div>
        <div>
          { filteredCompanies.map((company, i) => (
            <div key={ i }>
              { JSON.stringify(company) }
            </div>
          )) }
        </div>
      </div>
  )
}

export default Companies