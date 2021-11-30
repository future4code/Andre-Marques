import axios from "axios"
import React from "react"
import styled from "styled-components"

const DivPlaylist = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const DivList = styled.div`
    width: 300px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 20px;

    button{
        height: 25px;
    }
`

const DivTracks = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    li{
        margin-right: 10px;
        margin-bottom: 10px;
    }

    button{
        margin-bottom: 10px;
    }
`

const DivInputSong = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 15px;
`

export default class Playlist extends React.Component{

    state = {
        playlist: [],
        tracks: [],
        name: "",
        id: "",
        artist: "",
        url: "",
        addSong: 0,
    }

    componentDidMount() {
        this.getAllPlaylist()
    }

    componentDidUpdate(){
        this.getAllPlaylist()
    }

    handleName = (e) => {
        this.setState({name: e.target.value})
    }

    handleArtist = (e) => {
        this.setState({artist: e.target.value})
    }

    handleUrl = (e) => {
        this.setState({url: e.target.value})
    }


    toAddSong = () => {
        if(this.state.addSong === 0){
            return this.setState({addSong: 1})
        } else{
            return this.setState({addSong: 0})
        }
    }

    ShowInputAddSong = () => {
        
        if(this.state.addSong === 1){
            return(
            <DivInputSong>
                <input placeholder="Insert the new song" value={this.state.name} onChange={this.handleName}></input>
                <input placeholder="Insert the artist" value={this.state.artist} onChange={this.handleArtist}></input>
                <input placeholder="Insert the url" value={this.state.url} onChange={this.handleUrl}></input>
                <button onClick={() => this.addtrackToPlaylist()}>Save</button>
            </DivInputSong>
            )
        } else{
            return ""
        } 
    }

    getAllPlaylist = async () =>{
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
        const headers = {headers : {
                Authorization: "andre-marques-carver"
            }
        }    
        
        try{
            const response = await axios.get(url, headers)
            this.setState({playlist: response.data.result.list})
        } catch(err) {
            console.log(err.response)
        }
    }

    getPlaylistTrack = async (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
        const headers ={ headers :{
                Authorization: "andre-marques-carver"
            }
        }

        try{
            const response = await axios.get(url, headers)
            console.log(response.data.result.tracks)
            this.setState({tracks: response.data.result.tracks})
            this.setState({id: id})
        } catch(err) {
            console.log(err.response)
        }
    }

    addtrackToPlaylist = async () => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.id}/tracks`
        const headers = {
            Authorization: "andre-marques-carver"
        }
        const body = {
            name: this.state.name,
            artist: this.state.artist,
            url: this.state.url
        }

        try{
            const response = await axios.post(url, body, headers)
            alert("Sucess")
            this.setState({name: "", artist: "", url: ""})
            this.getPlaylistTrack()
        } catch(err){
            alert(err.response)
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
            this.getAllPlaylist()
        } catch(err) {
            console.log(err.response)
        }
    }

  render() {

    const renderTracks = this.state.tracks.map((value) => {
        let src = value.url + '?utm_source=generator'
        return(
            <DivTracks key={value.id}>
                <iframe title="This is a unique title" src={src} width="300" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            </DivTracks>
        )
    })
    
    const renderPlaylist = this.state.playlist.map((value) => {
        return (
            <DivList key={value.id}>           
                <p>{value.name}</p>
                <button onClick={() => this.deletePlaylist(value.id)}>X</button>
                <button onClick={() => this.getPlaylistTrack(value.id)}>Open Playlist</button>
                <button onClick={this.toAddSong}>Add Song</button>
            </DivList>
        )
    })
    
    return(
        
      <DivPlaylist>
        <button onClick={this.props.toCreate}>Create a new Playlist</button>
        {renderPlaylist}
        <div>
            {renderTracks}
            <div>
                {this.ShowInputAddSong()}
            </div>
        </div>
        
      </DivPlaylist>
    )
  }
}