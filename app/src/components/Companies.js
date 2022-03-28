import { useState, useEffect } from "react"
import { 
  Col,
  Row,
  Form,
  ListGroup,
  Card,
  Badge
} from 'react-bootstrap';

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
      <Row>
        <Col sm={4}>
          <div className="mb-4">
            <p>
              <strong>Type to filter</strong>
            </p>
            <Form.Control
              type="search"
              onChange={(e) => {
                setSearchInName(e.target.value)
              }}
              value={searchInName}
            />
          </div>
          <p>
            <strong>Check to filter</strong>
          </p>
          <ListGroup>
            { specialities.map((speciality, i) => {
              const isSelected = selectedSpecialities.includes(speciality)

              return (
                <ListGroup.Item key={i}>
                  <Form.Check
                    id={ `speciality-${i}` }
                    checked={ isSelected }
                    label={ speciality }
                    onChange={ () => isSelected ? unselectSpeciality(speciality) : selectSpeciality(speciality) }
                  />
                </ListGroup.Item>
              )
            }) }
          </ListGroup>
        </Col>
        <Col sm={8}>
          <h2 className="mb-3">Companies</h2>
          <Row>
            { filteredCompanies.map((company, i) => (
              <Col sm={4} className="mb-4">
                <Card>
                  <Card.Img variant="top" src={ company.logo } />
                  <Card.Body>
                    <Card.Title>{ company.name }</Card.Title>
                    <Card.Text>
                      <p>
                        <strong>City:</strong>{ " " }
                        { company.city }
                      </p>
                      <p>
                        <strong>Specialities:</strong><br />
                        { company.specialities.map((speciality, i) => (
                            <Badge className="me-1" bg="light" text="dark" key={ i }>
                              { speciality }
                            </Badge>
                        )) }
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            )) }
          </Row>
        </Col>
      </Row>
  )
}

export default Companies