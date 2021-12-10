import { useHistory, useParams } from 'react-router'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { DivChoice, DivApproved, DivH3, DivMain, DivHeader, DivViagem, DivTripList, DivPeopleList, DivButton } from './Styled'
import { BASE_URL } from '../../constants/Constants'

function TripDetailsPage() {

    const history = useHistory()
    const params = useParams()
    const [trip, setTrip] = useState({})
    const token = localStorage.getItem('token')

    const goToAdminHomePage = () => {
        history.goBack()
    }

    const getTripDetails = () => {
        axios.get(`${BASE_URL}trip/${params.id}`, {
            headers: {
                auth: token
            }
        })
        .then((res) => {
            setTrip(res.data.trip)
        })
        .catch((err) => {
            alert(err.response.data)
        })
    }

    useEffect(() => {
        getTripDetails()
    }, [params.id])
       
    const approveCandidate = (id, value) => {

        const body = {
            approve: value
        }

        axios.put(`${BASE_URL}trips/${trip.id}/candidates/${id}/decide`, body, {
            headers: {
                auth: token,
                'Content-Type': 'application/json'
            }
        })
        .then((res) => {
            getTripDetails()
            if(value === true){
                alert("Candidato aprovado!")
            } else {
                alert("Candidato recusado!")
            }
        })
        .catch((err) => {
            alert(err.response.data.message)
        })
    }

    const renderCandidates = () => {
        return(
            trip.candidates && trip.candidates.map((candidate, index) => {
                return (
                    <DivPeopleList key={index}>
                        <p><strong>Nome:</strong> {candidate.name}</p>
                        <p><strong>Profissao:</strong> {candidate.profession}</p>
                        <p><strong>Idade:</strong> {candidate.age}</p>
                        <p><strong>País:</strong> {candidate.country}</p>
                        <p><strong>Descricao:</strong> {candidate.applicationText}</p>
                        <DivButton>
                            <button onClick={() => approveCandidate(candidate.id, true)}>Aprovar</button>
                            <button onClick={() => approveCandidate(candidate.id, false)}>Reprovar</button>
                        </DivButton>
                    </DivPeopleList>
                )
            })
        )
    }
    
    return (
        <DivMain>

            <DivHeader>
                <button onClick={goToAdminHomePage}>Voltar</button>
            </DivHeader>

            <DivViagem>
                <DivTripList>
                    <DivH3>
                        <h3>{trip.name}</h3>
                    </DivH3>
                        <p><strong>Descricao:</strong> {trip.description}</p>
                        <p><strong>Planeta:</strong> {trip.planet}</p>
                        <p><strong>Duracao:</strong> {trip.durationInDays} dias</p>
                        <p><strong>Data:</strong> {trip.date}</p>
                </DivTripList>

                <DivChoice>
                    <h2>Candidatos Pendente</h2>
                    {renderCandidates()}
                </DivChoice>    

                <DivApproved>
                    <h2>Candidatos Aprovados</h2>
                    {trip.approved && trip.approved.map((candidate, index) => {
                        return (
                            <ul key={index}>
                                <li>{candidate.name}</li>
                            </ul>
                        )
                    })}
                    
                </DivApproved>
            </DivViagem>

        </DivMain>
    )
}

export default TripDetailsPage