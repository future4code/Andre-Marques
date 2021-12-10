import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router'
import axios from 'axios'
import { COUNTRIES } from '../../constants/Constants'
import { DivMain, DivHeader, Form } from './Styled'
import useForm from '../../hooks/useForm'

function ApplicationFormPage() {

    const history = useHistory()
    const [listTrips, setListTrips] = useState([])
    const [trip, setTrip] = useState()
    const [id, setId] = useState()
    const {form, handleInputs, cleanFields} = useForm({
        name: "",
        age: "",
        applicationText: "",
        profession: "",
        country: ""
    })

    const goToListTripsPage = () => {
        history.push('/TripList')
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

    const onSubmitApplication = (e) => {
        e.preventDefault()

        const headers = {
            'Content-Type' : 'application/json'
        }

        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/andre-marques-carver/trips/${id}/apply`, form, headers)      
        .then((res) =>{
            console.log(res.data)
            setTrip("")
            cleanFields()
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

            <Form onSubmit={onSubmitApplication}>
                <select value={trip} onChange={handleTrip}>
                    {listTrips.map((trip, index) => {
                        return <option key={index}>{trip.name}</option>
                    })}
                </select>
                <input required type="text" placeholder="Nome" name='name' value={form.name} onChange={handleInputs}></input>
                <input required type="number" placeholder="Idade" name='age' value={form.age} onChange={handleInputs}></input>
                <input required type="text" placeholder="Texto" name='applicationText' value={form.applicationText} onChange={handleInputs}></input>
                <input required type="text" placeholder="Profissao" name='profession' value={form.profession} onChange={handleInputs}></input>
                <select required name="country" onChange={handleInputs}>
                    <option selected disabled>Selecione um País</option>
                    {COUNTRIES.map((country, index) => {
                        return <option key={index} value={country}>{country}</option>
                    })}
                </select>
                <button>Enviar</button>
            </Form>

        </DivMain>
    )
}

export default ApplicationFormPage