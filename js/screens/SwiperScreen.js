import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import Swiper from 'react-native-swiper';

const styles = StyleSheet.create({
    wrapper: {
        height:200
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
        height:200
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
        height:200
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
        height:200
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    }
})

export default class SwiperScreen extends Component {
    render(){
        return (<View style={styles.slide1}><Swiper style={styles.wrapper}
                    height={200}
                    loop={true}                    //如果设置为false，那么滑动到最后一张时，再次滑动将不会滑到第一张图片。
                    autoplay={true}                //自动轮播
                    autoplayTimeout={2}                //每隔4秒切换
            >
                <View style={styles.slide1} >
                    <Text style={styles.text} onPress={()=>this.props.navigation.navigate("AvatarScreen")}>Hello Swiper</Text>
                </View>
                <View style={styles.slide2}>
                    <Text style={styles.text}>Beautiful</Text>
                </View>
                <View style={styles.slide3}>
                    <Text style={styles.text}>And simple</Text>
                </View>
            </Swiper>
            </View>
        );
    }
}
