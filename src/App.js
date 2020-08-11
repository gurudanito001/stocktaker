import React from 'react';
//import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './loginOrRegister';
import Main from './Main/main';
import Sidebar from './Sidebar/sidebar'
import LoginOrRegister from './loginOrRegister';


export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      Authorized: false,
      currentScreen: 'Inventory Records',
      screenHeader: 'Inventory Records',
    }
  }

  toggleSidebar = ()=>{
    document.getElementById('sidebar').classList.toggle('d-none')
  }

  setScreenDetails = (currentScreen,screenHeader) =>{
    this.setState({currentScreen: currentScreen, screenHeader: screenHeader});
  }
  render(){
    /* if(this.state.Authorized === false){
      return(
        <LoginOrRegister onSubmit={this.getToken}/>
      )
    } */
    return (
        <section className="container-fluid">
        <div className="row">
          <Sidebar  
            currentScreen={this.state.currentScreen}
            setScreenDetails={this.setScreenDetails} 
            toggleSidebar={this.toggleSidebar}
          />
          <Main  
          currentScreen={this.state.currentScreen} 
          screenHeader={this.state.screenHeader}
          setScreenDetails={this.setScreenDetails} 
          toggleSidebar={this.toggleSidebar}/>
        </div>
      </section>
      
    )
  }
  
}
