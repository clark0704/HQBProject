import React from "react";
import {Image, StyleSheet, Text, View,Platform,StatusBar} from "react-native";

import Swiper from 'react-native-swiper';
import {deviceHeight, deviceWidth, scaleSize} from "../../utils/DeviceUtils";
import Colors from "../../utils/Colors";
import BaseBean from "../../utils/BaseBean";
import HttpUtils from "../../utils/HttpUtils";
import BaseComponent from "../BaseComponent";


export default class homeScreen extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = {
            data: null,
        }
    }

    //动态加载轮播图控件
    loadImage() {
        if (!this.state.data) {
            return <Image source={require('../../img/example.png')} style={styles.img}/>;
        } else {
            return this.state.data.map((cur, index) => {
                return <Image source={{uri: cur.img_url}} style={styles.img} key={index}/>;
            })
        }
    }

    render() {
        return <View style={styles.container}>

            <View style={styles.wrapper}>
                <Swiper
                    horizontal={true}
                    height={scaleSize(600)}
                    index={0}
                    loop={true}                    //如果设置为false，那么滑动到最后一张时，再次滑动将不会滑到第一张图片。
                    autoplay={true}                //自动轮播
                    autoplayDirection={true}
                    showsPagination={true}
                    dotColor="white"
                    activeDotColor="#BCBCBC">
                    {
                        this.loadImage()
                    }
                </Swiper>
            </View>
            <View style={{flex: 1, flexDirection:"column"}}>
                <View style={{
                    flex:1,
                    backgroundColor: "white",
                    width: deviceWidth,
                    alignItems: "center",
                    justifyContent: "center",

                }}>
                    <Text> 账户资金由恒丰银行存管 </Text>
                </View>
                <View style={{
                    backgroundColor: Colors.color_bg,
                    width: deviceWidth,
                    alignItems: "center",
                    justifyContent:"center",
                    padding: scaleSize(8)
                }}>
                    <Text style={{fontSize: scaleSize(30)}}> 账户资金由恒丰银行存管 </Text>
                </View>
            </View>

        </View>

    }

    //render渲染之后
    componentDidMount() {
        super.componentDidMount();

        console.debug("----------------------------------------");
        console.debug(Platform.Version);

        HttpUtils.fetchRequest(BaseBean.homeSwipe, "POST", "", "index")
            .then(jsonData => {
                this.setState({
                    data: jsonData.information_list,
                });
            }).catch(error => {
            console.debug("error:" + JSON.stringify(error))
        })
    }

}
const styles = StyleSheet.create({
    container: {
        width: deviceWidth,
        height: Platform.OS === "android"&& Platform.Version <21?deviceHeight-scaleSize(136)-StatusBar.currentHeight:deviceHeight-scaleSize(136),
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
