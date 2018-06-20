/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {Component} from "react";

import {createStackNavigator} from "react-navigation";

import ButtonScreen from "./screens/ButtonScreen";
import SwiperScreen from "./screens/SwiperScreen";
import ButtonGroupScreen from "./screens/ButtonGroupScreen";
import CheckBoxScreen from "./screens/CheckBoxScreen";
import InputScreen from "./screens/InputScreen";
import {tab} from "./screens/tab/tab";

const RootStack = createStackNavigator({
    ButtonScreen:{screen:ButtonScreen},
    SwiperScreen:{screen:SwiperScreen},
    ButtonGroupScreen:{screen:ButtonGroupScreen},
    CheckBoxScreen:{screen:CheckBoxScreen},
    InputScreen:{screen:InputScreen},
    tab:{screen:tab}
},{
    initialRouteName: 'tab',
    mode: 'modal',
    headerMode: 'none',
});


export default class App extends Component {
    render() {
        return <RootStack />;
    }
}



