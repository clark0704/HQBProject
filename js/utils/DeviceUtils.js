/**
 * Created by zhuoy on 2017/6/27.
 * 屏幕工具类
 * ui设计基准,iphone 6
 * width:750
 * height:1334
 */

/*
 设备的像素密度，例如：
 PixelRatio.get() === 1          mdpi Android 设备 (160 dpi)
 PixelRatio.get() === 1.5        hdpi Android 设备 (240 dpi)
 PixelRatio.get() === 2          iPhone 4, 4S,iPhone 5, 5c, 5s,iPhone 6,xhdpi Android 设备 (320 dpi)
 PixelRatio.get() === 3          iPhone 6 plus , xxhdpi Android 设备 (480 dpi)
 PixelRatio.get() === 3.5        Nexus 6       */

import {
    Dimensions,
    PixelRatio,
} from 'react-native';


export const deviceWidth = Dimensions.get('window').width;      //设备的宽度
export const deviceHeight = Dimensions.get('window').height;    //设备的高度
let fontScale = PixelRatio.getFontScale();                      //返回字体大小缩放比例

export let pixelRatio = PixelRatio.get();      //当前设备的像素密度
const defaultPixel = 3;                           //默认android 1920*1080 (480dpi)
//px转换成dp
export const w2 = 1080 / defaultPixel;
export const h2 = 1920 / defaultPixel;
export const scale = Math.min(deviceHeight / h2, deviceWidth / w2);   //获取缩放比例
/**
 * 设置text为sp
 * @param size sp
 * return number dp
 */
export function setSpText(size:number) {
    size = Math.round((size * scale + 0.5) * pixelRatio / fontScale);
    return size / defaultPixel;
}

export function scaleSize(size:number) {
    size = Math.round(size * scale + 0.5);
    return size / defaultPixel;
}

