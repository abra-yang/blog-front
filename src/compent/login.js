
import React from 'react'
import '../css/login.css'
import UserSevice from '../service/user'
import { observer } from 'mobx-react'
import {Redirect,Link} from 'react-router-dom'

const userserivce = new UserSevice();

export default class Login extends React.Component{
    render(){
        return(
            < _Login service = {userserivce} />
        )
    }
}

@observer
class  _Login extends React.Component{ 
    handleClick(event){
        event.preventDefault()
        let fm = event.target.form
        let email = fm[0].value
        let password = fm[1].value
        this.props.service.login(email,password)
    }
    render(){
        if (this.props.service.logined){
            return <Redirect to = '/' />;
        }

    return (
    <div className ="login-page">
    <div className ="form">
    <form className ="login-form">

      <input type="text" placeholder="用户名"/>{this.props.service.logined}
      <input type="password" placeholder="密码"/>
      <button onClick = {this.handleClick.bind(this)}>登录</button>
      <p className ="message">未注册? <Link to ="/reg">注册</Link></p>
    </form>
    </div>
    </div>
)
}
}