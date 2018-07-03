import React, {Component} from 'react';
import {StatusBar} from 'react-native';
import {Card, SocialIcon} from "react-native-elements";
import {deviceHeight, deviceWidth} from "../utils/DeviceUtils";


export default class Detail extends Component {



    componentDidMount() {
        this._navListener = this.props.navigation.addListener('didFocus', () => {
            StatusBar.setBarStyle('dark-content',true); //主题色（ enum('default', 'light-content', 'dark-content')）
            StatusBar.setBackgroundColor('#00000000');//状态栏的背景色 （Android 可用）
            StatusBar.setHidden(false);//是否隐藏状态栏。
            StatusBar.setTranslucent(true)//指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。
        });
    }

    componentWillUnmount() {
        this._navListener.remove();
    }


    render() {
        return <Card containerStyle={{flex: 1, justifyContent: 'flex-end',width:deviceWidth,height:deviceHeight,padding: 0,margin:0}}>

            <SocialIcon
                type='twitter'
            />

            <SocialIcon
                raised={false}
                type='gitlab'
            />

            <SocialIcon
                light
                type='medium'
            />

            <SocialIcon
                light
                raised={false}
                type='medium'
            />

            <SocialIcon
                title='Sign In With Github'
                button
                type='github'
            />
            <SocialIcon
                title='Some Twitter Message'
                button
                type='twitter'
            />

            <SocialIcon
                button
                type='medium'
            />

            <SocialIcon
                button
                light
                type='instagram'
                title="take photo"
            />
        </Card>
    }
}
