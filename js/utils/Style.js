import {StyleSheet} from "react-native";
import {deviceHeight, deviceWidth} from "./DeviceUtils";


export const styleSheet = StyleSheet.create({
    container:{
        justifyContent:"flex-start",
        alignItems:"center",
        width:deviceWidth,
        height:deviceHeight,
    },
    loading: {
        height: deviceHeight,
        width: deviceWidth,
        resizeMode:"stretch"
    },
});
