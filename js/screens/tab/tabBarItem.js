import React from "react";
import {Image, StyleSheet, Text, View} from "react-native";


export  class tabBarItem extends React.Component {
    render() {
        return <View style={style.container}>

            <Image
                source={this.props.source}
                style={{alignSelf: 'center', width: 24, height: 24, tintColor: this.props.tintColor}}
            />

            <View style={style.corner}>
                <Text style={style.number}>5</Text>
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
        paddingLeft: 4,
        paddingRight: 4,
        color: 'white',
        backgroundColor: '#ff6b6d',
        borderRadius: 15,
    },
    corner: {
        position: "absolute",
        right: 0, top: 0,
    }
});
