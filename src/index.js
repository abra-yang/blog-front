import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Login from './compent/login'
import Reg from './compent/reg'

const Home = () =>(
  <div>welcome come to here</div>
)

const About = () =>(
  <div>about</div>
)


class Root extends React.Component{
  render(){
    return (
      <Router>
    <div>
      <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/login">login</Link>
            </li>
            <li>
              <Link to="/reg">reg</Link>
            </li>
          </ul>
        </div>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/reg" component={Reg} />
    </div>
    </Router>
  )
  }
}


ReactDom.render(<Root />,document.getElementById('root'))