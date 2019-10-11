import React from 'react'
import { postservice as post } from '../service/post'
import { observer } from 'mobx-react';
import { Card} from 'antd'
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import 'antd/lib/card/style'

export default class Getblog extends React.Component {
    constructor(props){
        super(props)
        console.log(props,'1')
    }
    render() {
        return (<_Getblog post={post} />)
    }
}

@observer
class _Getblog extends React.Component {
    constructor(props){
        super(props)
        console.log('~jj',props)
    }
    render() {
            return (
                <div>
                <Card title="Default size card"  style={{ width: 300 }}>
                  <p>Card content</p>
                  <p>Card content</p>
                  <p>Card content</p>
                </Card>
              </div>
            )

    }
}