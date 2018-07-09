import {createBottomTabNavigator} from 'react-navigation';
import React from "react";
import {Image, StyleSheet, Text, View} from "react-native";
import IconScreen from "../IconScreen";
import ListItemScreen from "../ListItemScreen";
import SocialIconScreen from "../SocialIconScreen";
import homeScreen from "./homeScreen";
import Images from "../../utils/Images";
import InvestScreen from "./InvestScreen";
import {scaleSize} from "../../utils/DeviceUtils";


export const tab = createBottomTabNavigator({
        homeScreen: {
            screen: homeScreen,
            navigationOptions: ({navigation}) => ({
                    tabBarLabel: '首页',
                    tabBarIcon: ({tintColor}) => (
                        <Image
                            source={Images.tab_home}
                            style={{height: scaleSize(60), width: scaleSize(60), tintColor: tintColor}}
                        />
                    ),
                    allowFontScaling: false,
                }
            )
        },
        InvestScreen: {
            screen: InvestScreen,
            navigationOptions: ({navigation}) => ({
                    tabBarLabel: '投资',
                    tabBarIcon: ({tintColor}) => (
                        <Image
                            source={Images.tab_invest}
                            style={{height: scaleSize(60), width: scaleSize(60), tintColor: tintColor}}
                        />),

                }
            )
        },
        IconScreen: {
            screen: IconScreen,
            navigationOptions: ({navigation}) => ({
                    tabBarLabel: '发现',
                    tabBarIcon: ({tintColor}) => (
                        navigation.getParam('badge', 0) !== 0  ? <View style={style.container}>

                            <Image
                                source={Images.tab_discovery}
                                style={{alignSelf: 'center', width: scaleSize(60), height: scaleSize(60), tintColor: tintColor}}
                            />
                            <View style={style.corner}>
                                <Text style={style.number}>{navigation.getParam("badge",0)}</Text>
                            </View>

                        </View> :   <Image
                            source={Images.tab_discovery}
                            style={{alignSelf: 'center', width: scaleSize(60), height: scaleSize(60), tintColor: tintColor}}
                        />                    ),
                }
            )
        },
        ListItemScreen: {
            screen: ListItemScreen,
            navigationOptions: ({navigation}) => ({
                    tabBarLabel: '钱包',
                    tabBarIcon: ({tintColor}) => (
                        <Image
                            source={Images.tab_account}
                            style={[{height: scaleSize(60), width: scaleSize(60)}, {tintColor: tintColor}]}
                        />)
                }
            )
        },
        SocialIconScreen: {
            screen: SocialIconScreen,
            navigationOptions: ({navigation}) => ({
                    tabBarLabel: '我的',
                    tabBarIcon: ({tintColor}) => (
                        <Image
                            source={Images.tab_mine}
                            style={[{height: scaleSize(60), width: scaleSize(60)}, {tintColor: tintColor}]}
                        />),
                }
            )
        },
    },
    {
        swipeEnabled: false,//是否允许在标签之间进行滑动
        animationEnabled: false,//是否在更改标签时显示动画
        lazy: true,//是否根据需要懒惰呈现标签，而不是提前，意思是在app打开的时候将底部标签栏全部加载，默认false,推荐为true
        backBehavior: "initialRoute",//按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
        tabBarOptions: {
            activeTintColor: 'red',
            inactiveTintColor: '#555555',
            showIcon: true,//是否显示图标，默认关闭
            showLabel: true,//是否显示label，默认开启
            style: {backgroundColor: 'white',height:scaleSize(136)},
            indicatorStyle: {//标签指示器的样式对象（选项卡底部的行）。安卓底部会多出一条线，可以将height设置为0来暂时解决这个问题
                height: 0,
            },
            labelStyle: {
                fontSize: scaleSize(30), // 文字大小
                marginTop: scaleSize(6),
                marginBottom: 0,
            },
            iconStyle: {//图标的样式
                marginBottom: 0,
            },
            tabStyle: {
                backgroundColor: "white",
            },
        }

    });


const style = StyleSheet.create({
    container: {
        //backgroundColor:'#b2ffff',
        width: scaleSize(100),
        height: scaleSize(100),
        justifyContent: 'center',
    },
    icon: {
        alignSelf: 'center',
        width: scaleSize(60),
        height: scaleSize(60),
    },
    number: {
        width: scaleSize(36),
        height: scaleSize(36),
        borderRadius: scaleSize(18),
        paddingLeft: scaleSize(11),
        alignSelf: "center",
        fontSize: scaleSize(24),
        color: 'white',
        backgroundColor: '#ff6b6d',
    },
    corner: {
        position: "absolute",
        right: -scaleSize(15), top: scaleSize(6),
    }
});
