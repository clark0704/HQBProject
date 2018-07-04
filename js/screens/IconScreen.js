import React, {Component} from 'react';
import {View} from 'react-native';

import {styleSheet} from "../utils/Style"
import {Icon} from 'react-native-elements';


export default class IconScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {count: 9};
    }

    render() {
        return <View style={styleSheet.container}>

            <Icon
                name='rowing'
                size={50}/>

            <Icon
                name='g-translate'
                color='#00aced'
                size={50}/>

            <Icon
                name='sc-telegram'
                type='evilicon'
                color='#517fa4'
                size={50}
            />

            <Icon
                reverse
                name='ios-american-football'
                type='ionicon'
                color='#517fa4'
                onPress={() => {
                    this.props.navigation.setParams({badge: this.state.count +1});
                    this.setState({count:this.state.count+1})
                }}
            />

            <Icon
                raised
                name='heartbeat'
                type='font-awesome'
                color='#f50'
                onPress={() => {
                    this.props.navigation.setParams({badge: this.state.count -1});
                    this.setState({count:this.state.count-1})
                }}/>
        </View>
    }
}
