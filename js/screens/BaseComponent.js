/**
 * 基础的组件，用于封装基类
 * 主要封装状态栏
 */


import React from "react";
import {StatusBar} from "react-native";

export default class BaseComponent extends React.Component{


    componentDidMount(){
        this._navListener = this.props.navigation.addListener('didFocus', () => {
            StatusBar.setBarStyle('light-content', true); //主题色（ enum('default', 'light-content', 'dark-content')）
            StatusBar.setBackgroundColor('#00000000');//状态栏的背景色 （Android 可用）
            StatusBar.setHidden(false);//是否隐藏状态栏。
            StatusBar.setTranslucent(true)//指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。
        });
    }

    componentWillUnmount(){
        this._navListener.remove();
    }
    getStatusBarHeight(){
        return StatusBar.currentHeight;
    }
}
