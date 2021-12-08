import styled from 'styled-components'
import { useHistory } from 'react-router'

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

const DivCriarViagem = styled.div`
    display: flex;
    flex-direction: column;
    margin: 30px;
    align-items: center;

    select, input{
        margin-top: 15px;
        height: 30px;
        width: 300px;
    }
`

function CreateTripPage() {

    const history = useHistory()

    const goToAdminHomePage = () => {
        history.goBack()
    }

    return (
        <DivMain>

            <DivHeader>
                <button onClick={goToAdminHomePage}>Voltar</button>
            </DivHeader>

            <DivCriarViagem>
                <input placeholder="Nome"></input>
                <select>
                    <option>Planeta</option>
                </select>
                <input placeholder="Data"></input>
                <input placeholder="Descricao"></input>
                <input placeholder="Duracao em dias"></input>
            </DivCriarViagem>

            <DivFooter>
                <button>Criar</button>
            </DivFooter>

        </DivMain>
    )
}

export default CreateTripPage