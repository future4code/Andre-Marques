import styled from 'styled-components'
import { useHistory, useParams } from 'react-router'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { DivMain, DivHeader, DivViagem, DivListaViagens } from './Styled'



function TripDetailsPage() {

    const history = useHistory()
    const params = useParams()
    const [trip, setTrip] = useState({})

    const goToAdminHomePage = () => {
        history.goBack()
    }

    useEffect(() => {
        const token = localStorage.getItem('token')
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/andre-marques-carver/trip/${params.id}`, {
            headers: {
                auth: token
            }})
        .then((res) => {
            setTrip(res.data.trip)
            
        })
        .catch((err) => {
            console.log(err.response.data)
        })
    }, [params.id])

 
    return (
        <DivMain>

            <DivHeader>
                <button onClick={goToAdminHomePage}>Voltar</button>
            </DivHeader>

            <DivViagem>
                <h1>{trip.name}</h1>
                <DivListaViagens>
                    <p>Descricao: {trip.description}</p>
                    <p>Planeta: {trip.planet}</p>
                    <p>Duracao: {trip.durationInDays} dias</p>
                    <p>Data: {trip.date}</p>
                </DivListaViagens>

                <div>
                    <h2>Candidatos Pendenter</h2>
                    <p>Nome</p>
                    <p>Profissoa</p>
                    <p>Idade</p>
                    <p>País</p>
                    <p>Texto de Candidatura:</p>
                    <div>
                        <button>Aprovar</button>
                        <button>Reprovar</button>
                    </div>
                </div>

                <div>
                    <h2>Candidatos Aprovados</h2>
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