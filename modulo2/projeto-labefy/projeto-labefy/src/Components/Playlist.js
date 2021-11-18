import axios from "axios"
import React from "react"
import styled from "styled-components"

const DivPlaylist = styled.div`
    width: 100%;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const DivList = styled.div`
    width: 200px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;

    button{
        height: 25px;
    }
`

export default class Playlist extends React.Component{

    state = {
        playlist: [],
    }

    componentDidMount() {
        this.getPlaylist()
    }

    componentDidUpdate(){
        this.getPlaylist()
    }

    getPlaylist = async () =>{
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'

        try{
            const response = await axios.get(url, {
                headers: {
                    Authorization: "andre-marques-carver"
                }
            })
            this.setState({playlist: response.data.result.list})
        } catch(err) {
            console.log(err.response)
        }
    }

    deletePlaylist = async (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`

        try{
            const response = await axios.delete(url, {
                headers: {
                    Authorization: "andre-marques-carver"
                }
            })
            this.setState({playlist: response.data.result.list})
            this.getPlaylist()
        } catch(err) {
            console.log(err.response)
        }
    }

  render() {
    
    const renderPlaylist = this.state.playlist.map((value) => {
        return (
            <DivList>           
                <p>{value.name}</p>
                <button onClick={() => this.deletePlaylist(value.id)}>X</button>
            </DivList>
        )
    })

    return(

      <DivPlaylist>
        <button onClick={this.props.toCreate}>Create a new Playlist</button>
        {renderPlaylist}
      </DivPlaylist>
    )
  }
}