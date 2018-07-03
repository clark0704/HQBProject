import React from "react";
import {Image} from "react-native";
import {styleSheet} from "../theme/Style";
import Images from "../theme/Images";


export default class LoadingScreen extends React.Component{

    render(){
        return <Image
            source={Images.loading}
            style ={ styleSheet.loading } />
    }
    componentDidMount() {
        // 延迟点
        setTimeout(this.openApp.bind(this),3000);
    }
    openApp(){
        //跳转到首页（在这里可以进行，跳转到引导页再进入首页）
        this.props.navigation.navigate("tab");
    }

}
