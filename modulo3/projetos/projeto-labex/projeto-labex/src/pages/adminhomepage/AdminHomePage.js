import styled from 'styled-components'
import { useHistory } from 'react-router'
import { useEffect, useState } from 'react'
import axios from 'axios'

const DivMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100vh;
`
const DivHeader = styled.div`
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100px;
    width: 100%;
`

const DivListaViagens = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    height: 100%;
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

function AdminHomePage() {

    const [tripDetail, setTripDetail] = useState()
    const [listTrips, setListTrips] = useState([])

    const history = useHistory()

    const goToHomePage = () => {
        history.goBack()
    }

    const goToLoginPage = () => {
        history.push("/Login")
    }

    const goToCreateTripPage = () => {
        history.push("/CreateTrip")
    }

    const getTripDetail = (id) => {
        history.push(`/TripDetails/${id}`)
    }

    useEffect(() => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/andre-marques-carver/trips')
        .then((res) => {
            setListTrips(res.data.trips)
        })
        .catch((err) => {
            console.log(err.response.data)
        })
    }, [])

    return (
        <DivMain>

            <DivHeader>
                <button onClick={goToHomePage}>Voltar</button>
                <button onClick={goToLoginPage}>Sair</button>
            </DivHeader>

            <DivListaViagens>
                {listTrips && listTrips.map((trip, index) => {
                    return (
                        <ul key={index}>
                            <div>
                            <li>{trip.name}</li>
                            <button onClick={() => getTripDetail(trip.id)}>Ver</button>
                            <button>Excluir</button>
                            </div>
                        </ul>
                    )
                })}
            </DivListaViagens>

            <DivFooter>
                <button onClick={goToCreateTripPage}>Criar Viagem</button>
            </DivFooter>

        </DivMain>
    )
}

export default AdminHomePage