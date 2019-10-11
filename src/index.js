import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Login from './compent/login'
import Reg from './compent/reg'
import Pub from './compent/pub'
import Home from './compent/home'
import Getblog from './compent/getblog'
import L from './compent/list'
import {Menu} from 'antd'

import 'antd/lib/menu/style'



class Root extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Menu  mode="horizontal">
            <Menu.Item key="index"><Link to ='/'>
              主页
              </Link>
            </Menu.Item>
            <Menu.Item key="login"><Link to ='/login'>
              登录
              </Link>
            </Menu.Item>
            <Menu.Item key="reg"><Link to ='/reg'>
              注册
              </Link>
            </Menu.Item>
            <Menu.Item key="pub"><Link to ='/pub'>
              发布
              </Link>
            </Menu.Item>
            <Menu.Item key="list"><Link to ='/list'>
              博客列表
              </Link>
            </Menu.Item>
          </Menu>
          <Route exact path="/" component={Home} />
          <Route path="/pub" component={Pub} />
          <Route path="/login" component={Login} />
          <Route path="/reg" component={Reg} />
          <Route path="/list" component={L} />
          <Route path="/post/:id" component={Getblog} />
        </div>
      </Router>
    )
  }
}


ReactDom.render(<Root />, document.getElementById('root'))