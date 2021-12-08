import React from "react"
import styled from "styled-components"
import { useHistory } from "react-router-dom"

const DivMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
`

function HomePage() {

    const history = useHistory()

    const goToListTripPage = () => {
        history.push("/ListTrips")
    }

    const goToLoginPage = () => {
        history.push("/Login")
    }

    return (
        <DivMain>
            <div>
                <h1>LabeX</h1>
            </div>

            <div>
                <button onClick={goToListTripPage}>Ver Viagens</button>
                <button onClick={goToLoginPage}>Área Admin</button>
            </div>
        </DivMain>
    )
}

export default HomePage