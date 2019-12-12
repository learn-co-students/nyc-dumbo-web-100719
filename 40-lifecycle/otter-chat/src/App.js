import React from 'react';
import MessageContainer from './MessageContainer'
import Sidebar from './Sidebar'
import './App.css';


class App extends React.Component {

  render() {
    return (<div className="App">
      <Sidebar />
      <MessageContainer />
    </div>)
  }

}

export default App;
