import React from 'react'
import {  useParams } from "react-router-dom";

import {Component} from 'react'
class Test extends Component{
    render(){
        const {id} = this.props.params 
        console.log(id)
        return(<h1>hi {id}</h1>)
    }
}
export default (props) => (
    <Test
        {...props}
        params={useParams()}/>
        )