import axios from 'axios'
import store from 'store'
import { observable} from 'mobx'
//store.addPlugin('/store/plugins/expire');

store.addPlugin(require('store/plugins/expire'))

export default class UserService{
    @observable logined = false
    @observable reged = false
    login(email,password){
        console.log(email)
        console.log(password)
        axios.post('/api/user/login',{'email':email,'password':password}).then(
            response =>{
                console.log(response)
                console.log(response.data['user'])
                console.log(response.status)
                console.log(response.statusText)
                store.set('token',response.data['token'],((new Date()).getTime()+360) )
                this.logined = true
            }
        ).catch(function (error){
            console.log(error)
        }
    )
    }
    reg(uname,password,email){
        axios.post('/api/user/reg',{'name':uname,'email':email,'password':password}).then(
            response =>{
                console.log(response.data['user_id'])
                console.log(this.reged)
                this.reged = true
            }
        ).catch(function (error){
            console.log(error)
    }
    )
    }
}