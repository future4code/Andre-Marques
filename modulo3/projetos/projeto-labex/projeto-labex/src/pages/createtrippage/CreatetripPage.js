import { useHistory } from 'react-router'
import { DivMain, DivHeader, DivFooter, FormCreateTrip} from './Styled'
import { useEffect } from 'react'
import { PLANETS } from '../../constants/Constants'
import useForm from '../../hooks/useForm'
import axios from 'axios'
import { useState } from 'react/cjs/react.development'

function CreateTripPage() {

    const history = useHistory()
    const token = localStorage.getItem('token')
    const {form, handleInputs, cleanFields} = useForm({name: "", planet: "", date: "", description: "", durationInDays: ""})

    const goToAdminHomePage = () => {
        history.push('/AdminHome')
    }

    useEffect(() => {
        const token = localStorage.getItem('token')

        if(token === null){
            history.push('/Login')
        }
    }, [])

    const onSubmitCreateTrip = (e) => {
        e.preventDefault()

        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/andre-marques-carver/trips', form, {
            headers: {
                auth: token
            }
        })
        .then((res) => {
            console.log(res.data)
            cleanFields()
        })
        .catch((err) => {
            console.log(err.response.data)
        })
    }

    return (
        <DivMain>

            <DivHeader>
                <button onClick={goToAdminHomePage}>Voltar</button>
            </DivHeader>

            <FormCreateTrip onSubmit={onSubmitCreateTrip}>
                <input required placeholder="Nome" type="text" name="name" value={form.name} onChange={handleInputs}></input>
                <select required name="planet" onChange={handleInputs}>
                    <option selected disabled>Selecione um Planeta</option>
                    {PLANETS.map((planet, index) => {
                    return <option value={planet} key={index}>{planet}</option>
                })}
                </select>
                {/* <input required placeholder='Planeta' type="text" name="planet" value={form.planet} onChange={handleInputs}></input> */}
                <input required placeholder="Data" type="date" name="date" value={form.date} onChange={handleInputs}></input>
                <input required placeholder="Descricao" type="text" name="description" value={form.description} onChange={handleInputs}></input>
                <input required placeholder="Duracao em dias" type="number" name="durationInDays" value={form.durationInDays} onChange={handleInputs}></input>
                <button>Criar</button>
            </FormCreateTrip>

            <DivFooter>
               
            </DivFooter>

        </DivMain>
    )
}

export default CreateTripPage