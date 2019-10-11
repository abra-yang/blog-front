import React from 'react'
import { Form, Input, Button,message } from 'antd'
import {Redirect} from 'react-router-dom'
import {postservice as service} from '../service/post'
import 'antd/lib/form/style'
import 'antd/lib/input/style'
import 'antd/lib/button/style'
import 'antd/lib/message/style'
import { observer } from 'mobx-react';


const { TextArea } = Input
export default class Pub extends React.Component {
    render() {
        return (< _Pub service={service} />)
    }
}

@observer
class _Pub extends React.Component {
    handleSubmit(event)
    {
        event.preventDefault()
        this.props.service.pub(event.target[0].value,event.target[1].value)
    }
    afterPubseccuse(){
        this.props.service.pubed = false
        this.props.service.pubMsg = ''
    }
    render() {
        if (this.props.service.pubed){
            message.info(this.props.service.pubMsg,5,this.afterPubseccuse.bind(this))
            return(<Redirect to='/' />)
        }
        return (
            <div>
                <Form onSubmit={this.handleSubmit.bind(this)} className="pub-form">
                <Form.Item labelCol={{ span: 4 }} wrapperCol={{ span: 14 }} label="标题">
                    <Input placeholder="请输入标题" />
                </Form.Item>
                <Form.Item labelCol={{ span: 4 }} wrapperCol={{ span: 14 }} label="内容">
                    <TextArea rows={10} />
                </Form.Item>
                <Form.Item  wrapperCol={{ span: 14,offset:16 }} >
                    <Button type="primary" htmlType="submit" className="pub-form-button">
                        发布
                    </Button>
                </Form.Item>
                </Form>
            </div>
        )
    }
}