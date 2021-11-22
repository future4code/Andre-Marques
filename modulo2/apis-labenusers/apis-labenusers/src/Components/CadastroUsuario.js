import React from 'react';
import styled from 'styled-components';

const DivCadastro = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    align-self: center;
`
const DivInput = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
`

export default class CadastroUsuario extends React.Component{
    render() {
        return (
            <DivCadastro>
                <DivInput>
                    <label>Name:</label>
                    <input type="text" value={this.props.nameInputValue} onChange={this.props.onChangeNameInput}/>  
                </DivInput>

                <DivInput>
                    <label>E-mail</label>
                    <input type="text" value={this.props.emailInputValue} onChange={this.props.onChangeEmailInput}/>  
                </DivInput>

                <button onClick={this.props.cadastrar}>Salvar</button>
            </DivCadastro>
        )
    }
}