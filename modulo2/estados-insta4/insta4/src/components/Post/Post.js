import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { IconeComContador } from '../IconeComContador/IconeComContador'
import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import iconeMarcacao from '../../img/marcacao.svg'
import iconeMarcacaoPreto from '../../img/marcacao-preto.svg'
import iconeDeCompartilhar from '../../img/share1.svg'
import facebook from '../../img/face.svg'
import instagram from '../../img/insta.svg'
import twitter from '../../img/twitter.svg'
import { SecaoComentario } from '../SecaoComentario/SecaoComentario'
import { IconeMarcador } from '../IconeMarcador/IconeMarcador'
import { IconeCompartilhar } from '../IconeCompartilhar/IconeCompartilhar'
import { RedeSocial } from '../RedeSocial/RedeSocial'


const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    marcado: false,
    compartilhado: false
  }

  onClickCurtida = () => {
    this.setState({
      curtido: true,
      numeroCurtidas: this.state.numeroCurtidas + 1
    })

    if(this.state.numeroCurtidas >= 1){
      this.setState({
        curtido: false,
        numeroCurtidas: this.state.numeroCurtidas - 1})
    }
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  onClickMarcacao = () => {
    // console.log('Curtiu!')
    this.setState({
      marcado: true
    })

    if(this.state.marcado === true){
      this.setState({
      marcado: false})
    }
  }

  onClickCompartilhar = () => {
    this.setState({
      compartilhado: !this.state.compartilhado
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  aoEnviarCompartilhamento = () => {
    this.setState({
      compartilhado: false
    })
  }

  render() {
    
    let iconeCurtida

    if (this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let iconeMarcador

    if (this.state.marcado) {
      iconeMarcador = iconeMarcacaoPreto
    } else {
      iconeMarcador = iconeMarcacao
    }

    let iconeCompartilhado

    if (this.state.compartilhado) {
      iconeCompartilhado = iconeDeCompartilhar
    } else {
      iconeCompartilhado = iconeDeCompartilhar
    }

    let componenteComentario

    if (this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario} />
    }

    let componenteRedeSocial

    if(this.state.compartilhado) {
      componenteRedeSocial = <RedeSocial />
    }

    return (
      <PostContainer>
        <PostHeader>
          <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'} />
          <p>{this.props.nomeUsuario}</p>
        </PostHeader>

        <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'} />

        <PostFooter>
          <IconeComContador
            icone={iconeCurtida}
            onClickIcone={this.onClickCurtida}
            valorContador={this.state.numeroCurtidas}
          />

          <IconeComContador
            icone={iconeComentario}
            onClickIcone={this.onClickComentario}
            valorContador={this.state.numeroComentarios}
          />

          <IconeMarcador
            icone={iconeMarcador}
            onClickIconeMarcador={this.onClickMarcacao}
          />

          <IconeCompartilhar
            icone={iconeCompartilhado}
            onClickIconeCompartilhar={this.onClickCompartilhar}
          />
        </PostFooter>
        {componenteComentario}
        {componenteRedeSocial}
      </PostContainer>
    )
  }
}

export default Post