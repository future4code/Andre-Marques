import { useHistory, useParams } from 'react-router'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { DivMain, DivHeader, DivViagem, DivTripList, DivPeopleList, DivButton } from './Styled'

function TripDetailsPage() {

    const history = useHistory()
    const params = useParams()
    const [trip, setTrip] = useState({})
    const token = localStorage.getItem('token')

    const goToAdminHomePage = () => {
        history.goBack()
    }

    useEffect(() => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/andre-marques-carver/trip/${params.id}`, {
            headers: {
                auth: token
            }
        })
        .then((res) => {
            setTrip(res.data.trip)
            
        })
        .catch((err) => {
            console.log(err.response.data)
        })
    }, [params.id])

    const approveCandidate = (id, value) => {

        const body = {
            approve: value
        }

        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/andre-marques-carver/trips/${trip.id}/candidates/${id}/decide`, body, {
            headers: {
                auth: token,
                'Content-Type': 'application/json'
            }
        })
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err.response.data.message)
            console.log(id)
        })
    }

    const renderCandidates = () => {
        return(
            trip.candidates && trip.candidates.map((candidate, index) => {
                return (
                    <DivPeopleList key={index}>
                        <p>Nome: {candidate.name}</p>
                        <p>Profissao: {candidate.profession}</p>
                        <p>Idade: {candidate.age}</p>
                        <p>País: {candidate.country}</p>
                        <p>Descricao: {candidate.applicationText}</p>
                        <DivButton>
                            <button onClick={() => approveCandidate(candidate.id, true)}>Aprovar</button>
                            <button onClick={() => approveCandidate(candidate.id, false)}>Reprovar</button>
                        </DivButton>
                    </DivPeopleList>
                )
            })
        )
    }

    useEffect(() => {
        renderCandidates()
    }, [trip.approved])
    
 
    return (
        <DivMain>

            <DivHeader>
                <button onClick={goToAdminHomePage}>Voltar</button>
            </DivHeader>

            <DivViagem>
                <h1>{trip.name}</h1>
                <DivTripList>
                    <p>Descricao: {trip.description}</p>
                    <p>Planeta: {trip.planet}</p>
                    <p>Duracao: {trip.durationInDays} dias</p>
                    <p>Data: {trip.date}</p>
                </DivTripList>

                <h2>Candidatos Pendente</h2>
                    {renderCandidates()}
                  

                <div>
                    <h2>Candidatos Aprovados</h2>
                    {/* {trip.approved} */}
                    <ul>
                        <li>André</li>
                        <li>Giovanni</li>
                        <li>Lucas</li>
                    </ul>
                </div>
            </DivViagem>

        </DivMain>
    )
}

export default TripDetailsPage