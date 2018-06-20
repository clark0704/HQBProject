import React,{Component} from 'react';
import {View, StyleSheet, ScrollView, StatusBar} from 'react-native';
import {Button} from 'react-native-elements';

export default class ButtonScreen extends Component{
    render(){
        return <ScrollView>

        <View style={styles.container}>
            <StatusBar
                animated={true} //指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden
                hidden={false}  //是否隐藏状态栏。
                backgroundColor={'#00000000'} //状态栏的背景色 （Android 可用）
                translucent={true}//指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。
                barStyle={'dark-content'} // enum('default', 'light-content', 'dark-content')(IOS 可用)
            />
            <Button
                buttonStyle={styles.button}
                title='Go To AvatarScreen!'
                onPress={()=>this.props.navigation.navigate("AvatarScreen")}
                secondary
            />
            <Button
                buttonStyle={styles.button}
                title='Go To InputScreen!'
                onPress={()=>this.props.navigation.navigate("InputScreen")}
            />
            <Button
                buttonStyle={styles.button}
                secondary2
                rightIcon={{
                    name :'home',
                    size:15,
                    color:'white'
                }
                }
                title='Go To SocialIconScreen!'
                onPress={()=>this.props.navigation.navigate("SocialIconScreen")}
            />

            <Button
                secondary3
                buttonStyle={styles.button}
                rightIcon={{
                    name: '3d-rotation',
                    size: 20,
                    color: 'white'
                }}
                title='Go To SwiperScreen!'
                onPress={()=>this.props.navigation.navigate("SwiperScreen")}
            />

            <Button
               rasied
                buttonStyle={styles.button}
                rightIcon={{
                    name: 'album',
                    size: 20,
                    color: 'white'
                }}
                title='Go To ButtonGroupScreen!'
                onPress={()=>this.props.navigation.navigate("ButtonGroupScreen")}
            />
            <Button
                primary2
                buttonStyle={styles.button}
                rightIcon={{
                    name: 'album',
                    size: 20,
                    color: 'white'
                }}
                title='Go To CheckBoxScreen!'
                onPress={()=>this.props.navigation.navigate("CheckBoxScreen")}
            />
            <Button
                title="Go To IconScreen!"
                loading
                loadingProps={{ size: "large", color: "rgba(111, 202, 186, 1)" }}
                titleStyle={{ fontWeight: "700" }}
                buttonStyle={{
                    backgroundColor: "rgba(92, 99,216, 1)",
                    width: 300,
                    height: 45,
                    borderColor: "transparent",
                    borderWidth: 0,
                    borderRadius:30,
                    marginTop:20
                }}
                containerStyle={{ marginTop: 20 }}
                onPress={()=>this.props.navigation.navigate("IconScreen")}
            />
            <Button
                title='Go To ListItemScreen!'
                buttonStyle={styles.button}
                onPress={()=>this.props.navigation.navigate("ListItemScreen")}/>

            <Button
                rounded
                icon={{name: 'cached'}}
                title='BUTTON WITH ICON'
                buttonStyle={styles.button}/>

            <Button
                large
                iconRight={{name: 'code'}}
                title='LARGE WITH RIGHT ICON'
                buttonStyle={styles.button}/>

            <Button
                large
                icon={{name: 'envira', type: 'font-awesome'}}
                title='LARGE WITH ICON TYPE'
                buttonStyle={styles.button}/>

            <Button
                large
                icon={{name: 'squirrel', type: 'octicon', buttonStyle: styles.someButtonStyle }}
                title='OCTICON'
                buttonStyle={styles.button}/>
        </View>
        </ScrollView>
    }
}

const styles=StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems:"center",
        backgroundColor:"white"
    },
    button:{
        marginTop:20,
        borderRadius:20
    }
});
