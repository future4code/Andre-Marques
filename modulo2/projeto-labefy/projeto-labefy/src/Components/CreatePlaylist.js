import axios from "axios"
import React from "react"
import styled from "styled-components"

const DivCreate = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const DivInput = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 20px;
`

export default class CreatePlaylist extends React.Component{

    state = {
        playlistName: ""
    }

    handlePlaylist = (e) =>{
        this.setState({playlistName: e.target.value})
    } 

    createPlaylist = async () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
        const body = {
            name: this.state.playlistName
        }

        try{
            const response = await axios.post(url, body, {
                headers: {
                    Authorization: "andre-marques-carver"
                }
            } )
            alert("Sucess!")
            this.setState({playlistName: ""})
        } catch(err) {
            console.log(err.response.data)
        }
    }

  render() {

    return(

      <DivCreate>
        <button onClick={this.props.toPlaylist}>Go to Playlist</button>
        <DivInput>
            <input placeholder={"Insert the new playlist"} value={this.state.playlistName} onChange={this.handlePlaylist}></input>
            <button onClick={this.createPlaylist}>Save</button>
        </DivInput>
      </DivCreate>
    )
  }
}