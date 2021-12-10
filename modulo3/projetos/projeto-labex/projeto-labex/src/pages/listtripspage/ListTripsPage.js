import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router'
import { DivMain, DivHeader, DivTripList, DivTripContainer } from './Styled'
import { BASE_URL } from '../../constants/Constants'

function ListTripsPage() {

    const history = useHistory()
    const [trips, setTrips] = useState([])

    const goToHomePage = () => {
        history.push('/')
    }

    const goToApplicationFormPage = () => {
        history.push("/ApplicationForm")
    }

    useEffect(() => {
        axios.get(`${BASE_URL}trips`)
        .then((res) =>{
            setTrips(res.data.trips)
        })
        .catch((err) => {
            alert(err.response.data)
        })
    }, [])

    return (
        <DivMain>
            <DivHeader>
                <button onClick={goToHomePage}>Voltar</button>
                <button onClick={goToApplicationFormPage}>Inscrever-se</button>
            </DivHeader>

            <DivTripContainer>
                {trips.map((trip) => {
                    return (
                        <DivTripList key={trip.id}>
                            <p><strong>Nome:</strong> {trip.name}</p>
                            <p><strong>Descricao:</strong> {trip.description}</p>
                            <p><strong>Planeta:</strong> {trip.planet}</p>
                            <p><strong>Duracao:</strong> {trip.durationInDays}</p>
                            <p><strong>Data:</strong> {trip.date}</p>
                        </DivTripList> 
                    )
                })}
            </DivTripContainer>
        </DivMain>
    )
}

export default ListTripsPage