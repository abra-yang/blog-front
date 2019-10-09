
import React from 'react'
import '../css/login.css'
import UserSevice from '../service/user'
import {Redirect,Link} from 'react-router-dom'
import { observer } from 'mobx-react'

const userservice = new UserSevice()
export default class Reg extends React.Component{
  render(){
    return(
      < _Reg  service = {userservice} />
    )
  }
}

@observer 
class _Reg extends React.Component{
    handleClick(event){
        event.preventDefault()
        let fm = event.target.form
        let  uname = fm[0].value
        let email = fm[3].value
        let password = fm[1].value
        this.props.service.reg(uname,password,email)

    }
    render(){
        if (this.props.service.reged){
          return <Redirect to = '/login' />
        }
        return(
        <div className="login-page">
     <div className="form">
    <form className="register-form">
      <input type="text" placeholder="用户名"/>
      <input type="password" placeholder="密码"/>
      <input type="password" placeholder="密码"/>
      <input type="text" placeholder="邮箱"/>
      <button onClick ={this.handleClick.bind(this)}>create</button>
      <p className="message">已有用户 ？ <Link to=  "/login">登录</Link></p>
    </form>
  </div>
</div>
        )
    }
}