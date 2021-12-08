import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router'
import axios from 'axios'
import { COUNTRIES } from '../../constants/Constants'

const DivMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 1550px;
    height: 100vh;
`
const DivHeader = styled.div`
    border: 1px solid black;
    display: flex;
    align-items: center;
    height: 100px;
    width: 100%;
`

const DivFormulario = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    height: 100%;

    select, input{
        margin-top: 15px;
        width: 300px;
        height: 30px;
    }
`

function ApplicationFormPage() {

    const history = useHistory()
    const [listTrips, setListTrips] = useState([])
    const [trip, setTrip] = useState()
    const [name, setName] = useState()
    const [age, setAge] = useState()
    const [text, setText] = useState()
    const [profession, setProfession] = useState()
    const [country, setCountry] = useState()
    const [id, setId] = useState()
    const headers = {
        'Content-Type' : 'application/json'
    }
    const body = {
        name: name,
        age: age,
        applicationText: text,
        profession: profession,
        country: country
    }

    const goToListTripsPage = () => {
        history.goBack()
    }

    const handleTrip = (e) => {
        setTrip(e.target.value)
        listTrips.map((trip) => {
            if(e.target.value === trip.name){
                setId(trip.id)
            }
            return id
        })
    }

    const handleName = (e) => {
        setName(e.target.value)
    }
    
    const handleAge = (e) => {
        setAge(e.target.value)
    }

    const handleText = (e) => {
        setText(e.target.value)
    }
    
    const handleProfession = (e) => {
        setProfession(e.target.value)
    }

    const handleCountry = (e) => {
        setCountry(e.target.value)
    }

    const sendApplication = () => {
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/andre-marques-carver/trips/${id}/apply`, body, headers)      
        .then((res) =>{
            console.log(res.data)
            setTrip("")
            setName("")
            setAge("")
            setText("")
            setProfession("")
            setCountry("")
        })
        .catch((err) => {
            console.log(err.response.data.message)
        })
    }

    useEffect(() => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/andre-marques-carver/trips')
        .then((res) =>{
            setListTrips(res.data.trips)
        })
        .catch((err) => {
            console.log(err.response.data)
        })
    }, [])

    return (
        <DivMain>

            <DivHeader>
                <button onClick={goToListTripsPage}>Voltar</button>
            </DivHeader>

            <DivFormulario>
                <select value={trip} onChange={handleTrip}>
                    {listTrips.map((trip, index) => {
                        return <option key={index} placeholder="Selecione uma viagem">{trip.name}</option>
                    })}
                </select>
                <input placeholder="Nome" value={name} onChange={handleName}></input>
                <input placeholder="Idade" value={age} onChange={handleAge}></input>
                <input placeholder="Texto" value={text} onChange={handleText}></input>
                <input placeholder="Profissao" value={profession} onChange={handleProfession}></input>
                <select name="" value={country} onChange={handleCountry}>
                    {COUNTRIES.map((country, index) => {
                        return <option key={index}>{country}</option>
                    })}
                </select>
                <button onClick={sendApplication}>Enviar</button>
            </DivFormulario>

        </DivMain>
    )
}

export default ApplicationFormPage