import React, {Component} from 'react';
import styled from 'styled-components';
import facebook from '../../img/face.svg'
import instagram from '../../img/insta.svg'
import twitter from '../../img/twitter.svg'



const InputComentario = styled.input`
    width: 67.5%;
    margin-right: 5px;
`

const ImgRedesSocial = styled.img`
	width: 25px;
`
export class RedeSocial extends Component{
	state = {
		comentarioFace: "",
		comentarioInsta: "",
		comentarioTwitter: ""
	}

	onChangeFace = (event) => {
		this.setState({comentarioFace: event.target.value})
	}

	onChangeInsta = (event) => {
		this.setState({comentarioInsta: event.target.value})
	}

	onChangeTwitter = (event) => {
		this.setState({comentarioTwitter: event.target.value})
	}

	onClickFace = () => {
		console.log("Post compartilhado no Facebook com a mensagem: " + this.state.comentarioFace)
		this.setState({comentarioFace: ""})
	}


	onClickInsta = () => {
		alert("Post compartilhado no Instagram com a mensagem: " + this.state.comentarioInsta)
		this.setState({comentarioInsta: ""})
	}

	onClickTwitter = () => {
		alert("Post compartilhado no Twitter com a mensagem: " + this.state.comentarioTwitter)
		this.setState({comentarioTwitter: ""})
	}

	


	render(){
		return(
			<div>
				<div>
				<ImgRedesSocial alt='Facebook' src={facebook} />
				<InputComentario onChange={this.onChangeFace} value={this.state.comentarioFace} type='text' placeholder='Comentário'/>
				<button onClick={this.onClickFace} type='submit'>Enviar</button>
				</div>
				<div>
				<ImgRedesSocial alt='Instagram' src={instagram} />
				<InputComentario onChange={this.onChangeInsta} value={this.state.comentarioInsta} type='text' placeholder='Comentário'/>
				<button onClick={this.onClickInsta} type='submit'>Enviar</button>
				</div>
				<div>
				<ImgRedesSocial alt='twitter' src={twitter} />
				<InputComentario onChange={this.onChangeTwitter} value={this.state.comentarioTwitter} type='text' placeholder='Comentário'/>
				<button onClick={this.onClickTwitter} type='submit'>Enviar</button>
				</div>
			</div>
		)
	}
}