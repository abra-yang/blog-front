import React from 'react'
import { postservice as post } from '../service/post'
import { observer } from 'mobx-react';
import { Card, Descriptions, Row, Col } from 'antd'


import 'antd/lib/card/style'
import 'antd/lib/descriptions/style'
export default class Getblog extends React.Component {
    constructor(props) {
        super(props)
        this.tid = props.match.params['id']
    }
    render() {
        return (<_Getblog post={post} tid={this.tid} />)
    }
}

@observer
class _Getblog extends React.Component {
    constructor(props) {
        super(props)
        props.post.gettitle(this.props.tid)
    }
    render() {
        const info = this.props.post.postinfo
        return (
            <div>
                <Row>
                    <Col span={4}></Col>
                    <Col span={16}>                    
                    <Card title={info['title']} style={{ width: 800 }}>
                        <Descriptions >
                            <Descriptions.Item label="作者">{info['auther']}</Descriptions.Item>
                            <Descriptions.Item label="发布时间">{info['postdate']}</Descriptions.Item>
                        </Descriptions>
                        <p>{info['content']}</p>
                    </Card></Col>
                    <Col span={4}></Col>

                </Row>
            </div>
        )

    }
}


