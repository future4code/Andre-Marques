import React from "react"
import CreatePlaylist from "./Components/CreatePlaylist"
import Playlist from "./Components/Playlist"
import styled from "styled-components"

const DivApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`


export default class App extends React.Component{

  state = {
    changePage: "create"
  }

  changeComponents = () => {
    switch(this.state.changePage){
      case "create":
        return <CreatePlaylist toPlaylist={this.toPlaylist}/>
        
      case "playlist":
        return <Playlist toCreate={this.toCreate}/>
     
      default:
        return <div>"Page does not exist!"</div>
        
    }
  }

  toCreate = () => {
    this.setState({changePage: "create"})
  }

  toPlaylist = () => {
    this.setState({changePage: "playlist"})
  }

  render() {

    return(

      <DivApp>
        <h1>Welcome to Labefy</h1>
        {this.changeComponents()}
      </DivApp>
    )
  }
}