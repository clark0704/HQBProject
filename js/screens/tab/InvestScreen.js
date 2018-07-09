import React from "react";
import {FlatList, Text, View,StatusBar,Platform} from "react-native";
import BaseComponent from "../BaseComponent";
import HttpUtils from "../../utils/HttpUtils";
import BaseBean from "../../utils/BaseBean";
import {deviceWidth} from "../../utils/DeviceUtils";
import {styleSheet as Styles} from "../../utils/Style";

let page=1;

export default class InvestScreen extends BaseComponent{

    constructor(props){
        super(props);
        this.onLoad = this.onLoad.bind(this);
        this.refreshing = this.refreshing.bind(this);

        this.state={
            dataArray:null,
        }
    }

    componentDidMount(){
         this._navListener = this.props.navigation.addListener('didFocus', () => {
             if (Platform.OS ==="android" && Platform.Version > 22) {
                 StatusBar.setBarStyle('dark-content', true); //主题色（ enum('default', 'light-content', 'dark-content')）
                 StatusBar.setBackgroundColor('#ffffff');//状态栏的背景色 （Android 可用）
             }

            StatusBar.setTranslucent(false)//指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。
        });
        this.getData(page);

    }

    componentWillUnmount(){
        this._navListener.remove();
    }

    //获取数据
    getData(){
        HttpUtils.fetchRequest(BaseBean.investList,"POST","","",10,page)
            .then(jsonData=>{
                const data = jsonData.information_list;
                let data1 = this.state.dataArray;
                // console.debug('-------------');
                // console.debug(data1);
                if (page >1){
                    this.setState({
                        dataArray:data1.concat(data),
                    })
                } else{
                    this.setState({
                        dataArray:data,
                    })
                }

            })
            .catch(error=>{

            })
    }

    render() {
        return <View style={Styles.container}>

            <FlatList
            data={this.state.dataArray}
            renderItem={this.renderItem}
            onRefresh={this.refreshing}
            refreshing={false}
            numColumns ={1}
            onEndReachedThreshold={0.1}
            onEndReached={this.onLoad}/>

        </View>
    }

    //下拉刷新
    refreshing(){
        page =1;
        this.getData();
    }

    onLoad(){
        page++;
        this.getData();
    }

    //item组件
    renderItem=(item)=>{
        return <Text style={{ width: deviceWidth,alignSelf:"center",height:60,color:"blue"} }>{item.item.title}</Text>
    }
}
