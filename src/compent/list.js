import React from 'react'
import { postservice as post } from '../service/post'
import { observer } from 'mobx-react';
import { List ,Pagination} from 'antd'
import {  Link } from 'react-router-dom'
import 'antd/lib/list/style'
import 'antd/lib/pagination/style'

export default class L extends React.Component {
    render() {
        return (<_L post={post} />)
    }
}

@observer
class _L extends React.Component {
    constructor(props){
        super(props)
        props.post.getall()

    }
    render() {
        let data = this.props.post.posts
        console.log(1,data)
        if (data.length){
            return (
                <div>
                    <List
                        footer={<div><Pagination defaultCurrent={1} pageSize= {3} total={7} /></div>}
                        bordered
                        dataSource={data}
                        renderItem={item => (
                            <List.Item>
                                <Link to = {'/post/'+item.postid}>{item.post_tilte}</Link>
                            </List.Item>
                        )} />
                </div>
            )
        }
        else{
            return (<div>无数据</div>)
        }
    }
}