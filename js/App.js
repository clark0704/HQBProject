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
import {tab} from "./screens/tab/tab";
import LoadingScreen from "./screens/LoadingScreen";
import AvatarScreen from "./screens/AvatarScreen";

const RootStack = createStackNavigator({
    ButtonScreen:{screen:ButtonScreen},
    SwiperScreen:{screen:SwiperScreen},
    ButtonGroupScreen:{screen:ButtonGroupScreen},
    CheckBoxScreen:{screen:CheckBoxScreen},
    tab:{screen:tab},
    AvatarScreen:{screen:AvatarScreen},
    LoadingScreen:{screen:LoadingScreen},
},{
    initialRouteName: 'LoadingScreen',
    mode: 'modal',
    headerMode: 'none',//不要标题
});


export default class App extends Component {
    render() {
        return <RootStack />;
    }
}



