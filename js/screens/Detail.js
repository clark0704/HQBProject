import React,{Component} from 'react';
import {Text, View} from 'react-native';




export default class Detail extends Component{
    render(){
        return <View style={this.props.style}><Text  >Hello.{this.props.name}</Text></View>
    }
}
