import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {ButtonGroup} from "react-native-elements";


export default class ButtonGroupScreen extends Component {

    constructor() {
        super()
        this.state = {
            selectedIndex: 2
        }
        this.updateIndex = this.updateIndex.bind(this)
    }

    updateIndex(selectedIndex) {
        this.setState({selectedIndex})
    }


    render() {
        const buttons = [{element: component1}, {element: component2}, {element: component3}]
        const {selectedIndex} = this.state
        return (
            <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                <ButtonGroup
                onPress={this.updateIndex}
                selectedIndex={selectedIndex}
                buttons={buttons}
                containerStyle={{height: 50}}/>
            </View>
        )
    }
}
const component1 = () => <Text>Hello</Text>;
const component2 = () => <Text>World</Text>;
const component3 = () => <Text>ButtonGroup</Text>;
