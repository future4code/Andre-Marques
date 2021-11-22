import React from 'react';
import styled from 'styled-components';

const DivLista = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    align-self: center;
`

export default class ListaUsuario extends React.Component{
    render() {
        return (
            <DivLista>
                <h3>Usuários Cadastrados</h3>
                <p>{this.props.usuario}</p>                
            </DivLista>
        )
    }
}