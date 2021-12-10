import { useHistory } from 'react-router'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { DivContainer, DivP, DivMain, DivHeader, DivTripList, DivButton } from './Styled'
import { BASE_URL } from '../../constants/Constants'

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
        if(window.confirm("Tem certeza que deseja deletar essa viagem?")){
            axios.delete(`${BASE_URL}trips/${id}`, {
                headers: {
                    auth: newToken, 
                    'Content-Type': 'application/json'
                }
            })
            .then((res) => {
                alert("Viagem deletada com sucesso!")
            })
            .catch((err) => {
                alert(err.response.data)
            })
        }
        
        

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
            alert(err.response.data)
        })
    }, [listTrips])

    return (
        <DivMain>

            <DivHeader>
                <button onClick={goToHomePage}>Voltar</button>
                <button onClick={goToCreateTripPage}>Criar Viagem</button>
                <button onClick={goToLoginPage}>Sair</button>
            </DivHeader>

            <DivContainer>
                {listTrips && listTrips.map((trip, index) => {
                    return (
                        <DivTripList key={index}>
                            <DivP>
                                <p>{trip.name}</p>
                            </DivP>
                                <DivButton>
                                    <button onClick={() => getTripDetail(trip.id)}>Ver</button>
                                    <button onClick={() => deleteTrip(trip.id)}>Excluir</button>
                                </DivButton>
                        </DivTripList>
                    )
                })}
            </DivContainer>

        </DivMain>
    )
}

export default AdminHomePage