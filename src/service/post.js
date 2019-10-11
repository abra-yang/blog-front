
import axios from 'axios'
import store from 'store'
import { observable} from 'mobx'


class PostService{
    @observable pubMsg =''
    @observable pubed = false
    @observable posts = []
    pub(title,content){
        axios.post('/api/post/pub',{title,content},{headers: {'jwt': store.get('token',null)}}).then(
            response =>{
                console.log(response.data)
                console.log(store.get('token',null))
                this.pubMsg = '发布成功,5秒后可再次发布新文章！'
                this.pubed = true
            }
        ).catch(function (error){
            console.log(error)
        })      
    }
    getall(){
        axios.get('/api/post/').then(
            response =>{
                
                this.posts = response.data['post']
                console.log('postjs',response.data['post'])
            }
        ).catch(function(error){
            console.log('error~~~~')
            console.log(error)
        })
    }
    gettitle(id){
        axios.get('/api/post/'+id).then(
            response =>{
                console.log(response.data['post'])
            }
        ).catch(function(error){
            console.log('error~~~~')
            console.log(error)
        })
    }

}

const postservice = new PostService()
export {postservice}