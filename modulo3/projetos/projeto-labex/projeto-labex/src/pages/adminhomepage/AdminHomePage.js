import { useHistory } from 'react-router'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { DivMain, DivHeader, DivTripList, DivFooter } from './Styled'

function AdminHomePage() {

    const [listTrips, setListTrips] = useState([])
    const [newToken, setNewToken] = useState('')

    const history = useHistory()

    const goToHomePage = () => {
        history.push('/')
    }

    const goToLoginPage = () => {
        localStorage.clear()
        history.push("/Login")
    }

    const goToCreateTripPage = () => {
        history.push("/CreateTrip")
    }

    const getTripDetail = (id) => {
        history.push(`/TripDetails/${id}`)
    }

    const deleteTrip = (id) => {
        
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/andre-marques-carver/trips/${id}`, {
            headers: {
                auth: newToken, 
                'Content-Type': 'application/json'
            }
        })
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err.response.data)
        })

    }

    useEffect(() => {
        const token = localStorage.getItem('token')
        setNewToken(token)

        if(token === null){
            history.push('/Login')
        }
    }, [])

    useEffect(() => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/andre-marques-carver/trips')
        .then((res) => {
            setListTrips(res.data.trips)
        })
        .catch((err) => {
            console.log(err.response.data)
        })
    }, [listTrips])

    return (
        <DivMain>

            <DivHeader>
                <button onClick={goToHomePage}>Voltar</button>
                <button onClick={goToLoginPage}>Sair</button>
            </DivHeader>

            <DivTripList>
                {listTrips && listTrips.map((trip, index) => {
                    return (
                        <ul key={index}>
                            <div>
                            <li>{trip.name}</li>
                            <button onClick={() => getTripDetail(trip.id)}>Ver</button>
                            <button onClick={() => deleteTrip(trip.id)}>Excluir</button>
                            </div>
                        </ul>
                    )
                })}
            </DivTripList>

            <DivFooter>
                <button onClick={goToCreateTripPage}>Criar Viagem</button>
            </DivFooter>

        </DivMain>
    )
}

export default AdminHomePage