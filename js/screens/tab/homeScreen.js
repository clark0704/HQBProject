import React from "react";
import {Image, StatusBar, StyleSheet, Text, View} from "react-native";

import Swiper from 'react-native-swiper';
import {deviceHeight, deviceWidth, scaleSize, setSpText} from "../../utils/DeviceUtils";
import Colors from "../../theme/Colors";

export default class homeScreen extends React.Component {



    constructor(props){
        super(props);

    }

    componentDidMount() {

        this._navListener = this.props.navigation.addListener('didFocus', () => {
            StatusBar.setBarStyle('light-content',true); //主题色（ enum('default', 'light-content', 'dark-content')）
            StatusBar.setBackgroundColor('#00000000');//状态栏的背景色 （Android 可用）
            StatusBar.setHidden(false);//是否隐藏状态栏。
            StatusBar.setTranslucent(true)//指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。
        });
    }

    componentWillUnmount() {
        this._navListener.remove();
    }

    render() {
        return <View style={styles.container}>

            <View style={styles.wrapper}>
                <Swiper
                    height={scaleSize(200)}
                    loop={true}                    //如果设置为false，那么滑动到最后一张时，再次滑动将不会滑到第一张图片。
                    autoplay={true}                //自动轮播
                    autoplayTimeout={2}                //每隔4秒切换
                    activeDot={<View style={{
                        backgroundColor: 'blue',
                        width: 8,
                        height: 8,
                        borderRadius: 4,
                        marginLeft: 3,
                        marginRight: 3,
                        marginTop: 3,
                        marginBottom: 3
                    }}/>}
                >
                    <Image source={require('../../img/example.png')} style={styles.img}/>
                    <Image source={require('../../img/example.png')} style={styles.img}/>
                    <Image source={require('../../img/example.png')} style={styles.img}/>
                </Swiper>
            </View>
            <View style={ {flex:1,marginBottom:50,alignItems:"center"} }>
                <View style={{backgroundColor:"white",flexGrow:1,width:deviceWidth,alignItems:"center",justifyContent:"center"}}>
                    <Text > 账户资金由恒丰银行存管 </Text>
                </View>
                <View style={{backgroundColor:Colors.color_bg,width:deviceWidth,alignItems:"center",padding:scaleSize(8)}}>
                    <Text style={{fontSize:setSpText(10)}}> 账户资金由恒丰银行存管 </Text>
                </View>
            </View>
        </View>

    }
}
const styles = StyleSheet.create({
    container: {
        width: deviceWidth,
        height: deviceHeight,
        backgroundColor: "white",
    },
    wrapper: {
        height: scaleSize(600)
    },
    img: {
        width: deviceWidth,
        height: scaleSize(600),
    }
});
