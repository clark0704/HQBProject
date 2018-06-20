import {StyleSheet} from "react-native";
import {deviceHeight, deviceWidth} from "../utils/DeviceUtils";


export const styleSheet = StyleSheet.create({
    container:{
        justifyContent:"flex-start",
        alignItems:"center",
        width:deviceWidth,
        height:deviceHeight,
    }
})
