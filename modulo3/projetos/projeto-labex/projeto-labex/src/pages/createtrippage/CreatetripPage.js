import { useHistory } from 'react-router'
import { DivMain, DivHeader, FormCreateTrip} from './Styled'
import { useEffect } from 'react'
import { BASE_URL, PLANETS } from '../../constants/Constants'
import useForm from '../../hooks/useForm'
import axios from 'axios'

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

        axios.post(`${BASE_URL}trips`, form, {
            headers: {
                auth: token
            }
        })
        .then((res) => {
            alert("Viagem criada com sucesso!")
            cleanFields()
            history.push('/AdminHome')
        })
        .catch((err) => {
            alert(err.response.data)
        })
    }

    return (
        <DivMain>

            <DivHeader>
                <button onClick={goToAdminHomePage}>Voltar</button>
            </DivHeader>

            <FormCreateTrip onSubmit={onSubmitCreateTrip}>
                <input
                    required
                    placeholder="Nome"
                    type="text" name="name"
                    value={form.name}
                    onChange={handleInputs}
                    pattern={'^.{5,}'}
                    title={'Insira um texto com pelo menos 5 caracteres'}
                >
                </input>

                <select
                    required
                    name="planet"
                    onChange={handleInputs}
                >
                    <option selected disabled>Selecione um Planeta</option>
                    {PLANETS.map((planet, index) => {
                    return <option value={planet} key={index}>{planet}</option>
                })}
                </select>

                <input
                    required
                    placeholder="Data"
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleInputs}
                >
                </input>

                <input
                    required
                    placeholder="Descricao"
                    type="text"
                    name="description"
                    value={form.description}
                    onChange={handleInputs}
                    pattern={'^.{15,}'}
                    title={'Insira um texto com pelo menos 15 caracteres'}
                >
                </input>

                <input
                    required
                    placeholder="Duração em dias"
                    type="number"
                    name="durationInDays"
                    value={form.durationInDays}
                    onChange={handleInputs}
                    min={3}
                >
                </input>

                <button>Criar</button>
            </FormCreateTrip>

        </DivMain>
    )
}

export default CreateTripPage