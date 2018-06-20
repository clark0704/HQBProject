import React,{Component} from 'react';
import {Image, StyleSheet, Text, View} from "react-native";
import {Avatar, Header, Icon} from "react-native-elements";

export default class AvatarScreen extends Component{
    render(){
        return <View>
            <Header
                backgroundColor="green"
                leftComponent={<Icon name="menu" color="white" onPress={()=>{
                    this.props.navigation.goBack();
                }}/>}
                centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                rightComponent={<Icon name="home" color="white" onPress={()=>{
                    this.props.navigation.navigate("ButtonScreen");
                }}/>}
            />
            <Avatar
                small
                rounded
                source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
                onPress={() => console.log("Works!")}
                activeOpacity={0.7}
            />
            <Avatar
                medium
                source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg"}}
                onPress={() => console.log("Works!")}
                activeOpacity={0.7}
            />
            <Avatar
                large
                source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg"}}
                onPress={() => console.log("Works!")}
                activeOpacity={0.7}
            />
            <Avatar
                xlarge
                rounded
                source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"}}
                onPress={() => console.log("Works!")}
                activeOpacity={0.7}
            />
            <View style={style.container}>

                <Image
                    source={require("../img/ic_tab_mine_normal.png")}
                    style={{alignSelf: 'center', width: 24, height: 24, tintColor: "red"}}
                />

                <View style={style.corner} onPress={()=>{}}>
                    <Text style={style.number}>5</Text>
                </View>

            </View>
        </View>
    }
}
const style = StyleSheet.create({
    container: {
        //backgroundColor:'#b2ffff',
        width: 35,
        height: 35,
        justifyContent: 'center',
    },
    icon: {
        alignSelf: 'center',
        width: 24,
        height: 24,
    },
    number: {
        paddingLeft:2,
        paddingRight:2,
        fontSize:10 ,
        color: 'white',
        backgroundColor: '#ff6b6d',
        borderRadius: 10,
    },
    corner: {
        position: "absolute",
        right: 0, top: 0,
    }
});
