import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import { useEffect } from "react/cjs/react.development"
import { DivMain} from "./Styled"

function HomePage() {

    const history = useHistory()

    const goToListTripPage = () => {
       history.push("/TripList")
    }

    const goToLoginPage = (token) =>{
        history.push('/Login')
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