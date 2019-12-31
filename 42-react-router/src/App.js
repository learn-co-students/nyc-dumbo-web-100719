import React from 'react';
import logo from './logo.svg';
import './App.css';
import NotFound from './NotFound'
import Home from './Home'
import { Route, Switch } from 'react-router'
import { NavLink } from 'react-router-dom'
import { SpiceGirl, Scary, Baby, Ginger, Posh, Sporty } from './spice-girls';

export default class App extends React.Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Spice Force Five</h1>
          <aside className="sidebar">
            <ul>
              <li>
                <NavLink to="/" exact activeClassName="selected">Home</NavLink>
              </li>
              {
                this.state.spiceGirls.map(spice => <li>
                <NavLink to={ "/spice/" + spice.slug } activeClassName="selected">{ spice.adjective }</NavLink>
              </li>)
              }
            </ul>
          </aside>
        </header>
        <Switch>
          <Route path="/" exact component={ Home } />
          { /*
          <Route path="/mel-b" component={ Scary } />
          <Route path="/geri" component={ Ginger } /> }
          <Route path="/mel-c" component={ Sporty } />
          <Route path="/victoria" render={ this.renderPosh } />
          <Route path="/emma" component={ Baby } /> */}
          <Route path="/spice/:slug" render={ this.renderSpice } />
          <Route component={ NotFound } />
        </Switch>

      </div>
    );
  }

  renderSpice = renderProps => {
    const slug = renderProps.match.params.slug
    const spice = this.state.spiceGirls.find(spiceGirl => spiceGirl.slug === slug)
    if (!spice) {
      return <NotFound />
    }
    return <SpiceGirl adjective={ spice.adjective } gif={ spice.gif } />
  }

  state = {
    spiceGirls: [
      {
        id: 1,
        adjective: "Scary",
        gif: "https://media.giphy.com/media/Eaa3LF8anrRm/giphy.gif",
        slug: "mel-b",
      },
      {
        id: 2,
        adjective: "Baby",
        gif: "https://media.giphy.com/media/PSfMwrLPXUtrO/giphy.gif",
        slug: "emma",
      },
      {
        id: 3,
        adjective: "Ginger",
        gif: "https://media.giphy.com/media/ZA1X3mZigRMoo/giphy.gif",
        slug: "geri"
      },
      {
        id: 4,
        adjective: "Posh",
        gif: "https://media.giphy.com/media/f4X5yhZlnZXLa/giphy.gif",
        slug: "victoria",
      },
      {
        id: 5,
        adjective: "Sporty",
        gif: "https://media.giphy.com/media/ag5PDZoSMrFuM/giphy.gif",
        slug: "mel-c",
      },
    ]
  }

}

