import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';

import {styleSheet} from "../utils/Style";
import {CheckBox} from "react-native-elements";


export default class CheckBoxScreen extends Component {

    constructor(props) {
        super(props)

        this.state = {
            checked: true,
        }
    }

    render() {
        return <View style={styleSheet.container}>
            <CheckBox
                title='Click Here'
                checked={this.state.checked}
                onPress={() => this.setState({checked: !this.state.checked})}
            />

            <CheckBox
                center
                title='Click Here'
                checked={this.state.checked}
                onPress={() => this.setState({checked: !this.state.checked})}
            />

            <CheckBox
                center
                title='Click Here'
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={this.state.checked}
                onPress={() => this.setState({checked: !this.state.checked})}
            />

            <View style={{flex:1,justifyContent:"flex-end"}}>
                <CheckBox
                    center
                    title='Click Here to Remove This Item'
                    iconRight
                    iconType='material'
                    checkedIcon='clear'
                    uncheckedIcon='add'
                    checkedColor='red'
                    checked={this.state.checked}
                    onPress={() => this.setState({checked: !this.state.checked})}
                />
            </View>
            {/*<CheckBox*/}
            {/*checkedIcon={<Image source={require('../checked.png')}/>}*/}
            {/*uncheckedIcon={<Image source={require('../unchecked.png')}/>}*/}
            {/*checked={this.state.checked}*/}
            {/*onPress={() => this.setState({checked: !this.state.checked})}*/}
            {/*/>*/}

        </View>
    }
}
