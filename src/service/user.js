import axios from 'axios'
import store from 'store'
import { observable} from 'mobx'
//store.addPlugin('/store/plugins/expire');

store.addPlugin(require('store/plugins/expire'))
class UserService{
    @observable logined = false
    @observable reged = false
    @observable regMsg = ''
    @observable user_id = ''
    login(email,password){
        console.log(email)
        console.log(password)
        axios.post('/api/user/login',{'email':email,'password':password}).then(
            response =>{
                console.log(response)
                console.log(response.data['user']['user'])
                console.log(response.status)
                console.log(response.statusText)
                store.set('token',response.data['token'],((new Date()).getTime()+360000) )
                this.user_id = response.data['user']['user']
                this.logined = true
                console.log(store.get('token'))
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
                this.regMsg = '注册成功，请重新登录~~~'
                this.reged = true
            }
        ).catch(function (error){
            console.log(error)
    }
    )
    }
}
const Service = new UserService()
export {Service}