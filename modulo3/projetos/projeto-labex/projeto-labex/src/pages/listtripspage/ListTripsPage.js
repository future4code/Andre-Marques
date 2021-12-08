import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'

const DivMain = styled.div`
border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
    height: 100vh;
`
const DivHeader = styled.div`
    border: 1px solid black;
    display: flex;
    align-items: center;
    height: 100px;
    width: 100%;
`

const DivFooter = styled.div`
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    width: 100%;
`



function ListTripsPage() {

    const history = useHistory()
    const [trips, setTrips] = useState([])

    const goToHomePage = () => {
        history.goBack()
    }

    const goToApplicationFormPage = () => {
        history.push("/ApplicationForm")
    }

    useEffect(() => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/andre-marques-carver/trips')
        .then((res) =>{
            console.log(res.data.trips)
            setTrips(res.data.trips)
        })
        .catch((err) => {
            console.log(err.response.data)
        })
    }, [])

    return (
        <DivMain>
            <DivHeader>
                <button onClick={goToHomePage}>Voltar</button>
            </DivHeader>

            <div>
                <h1>Lista de Viagens</h1>
            </div>

            {trips.map((trip) => {
                return (
                    <div key={trip.id}>
                        <p>Nome: {trip.name}</p>
                        <p>Descricao: {trip.description}</p>
                        <p>Planeta: {trip.planet}</p>
                        <p>Duracao: {trip.durationInDays}</p>
                        <p>Data: {trip.date}</p>
                </div> 
                )
            })}

            {/* <div>
                <p>Nome:{trips && trips.name}</p>
                <p>Descricao</p>
                <p>Planeta</p>
                <p>Duracao</p>
                <p>Data</p>
            </div> */}

            <DivFooter>
                <button onClick={goToApplicationFormPage}>Inscrever-se</button>
            </DivFooter>
        </DivMain>
    )
}

export default ListTripsPage