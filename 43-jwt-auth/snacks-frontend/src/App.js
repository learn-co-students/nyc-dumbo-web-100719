import React from 'react';
import './App.css';
import LogIn from './LogIn'
import SnackDashboard from './SnackDashboard'


class App extends React.Component {

  state = {
    loggedInUserId: 1,
  }

  logOutClick = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("token");

    this.setState({
      loggedInUserId: null,
      token: null
    })
  }

  loggedIn(){
    return !!this.state.loggedInUserId;
  }

  render(){
    return (<main>
      <header>{ this.loggedIn() 
                ? <button onClick={ this.logOutClick }>Log out</button> 
                : "" 
              }</header>
      {
        this.loggedIn()
          ? <SnackDashboard token={ this.state.token } 
                            loggedInUserId={ this.state.loggedInUserId } />
          : <LogIn setToken={ this.setToken } />
      }
    </main>);
  }
}

export default App;
