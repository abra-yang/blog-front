import React from 'react'
import {Service as userservice} from '../service/user' 
import {postservice as post} from '../service/post'
import { observer } from 'mobx-react';
import {List,Typography} from 'antd'

export default class Home extends React.Component{
    render(){
        return(< _Home service={userservice} post ={post}/>)
    }
}

@observer
class _Home extends React.Component{
    getuser(){
        if (this.props.service.logined){
            console.log(this.props.service.user_id)
            return this.props.service.user_id
        }
        else{
            return '游客'
        }
    }

    render(){
        console.log(this.props.service.logined)
        return(
            <div>欢迎你，{this.getuser()}</div>
        )
    }
}