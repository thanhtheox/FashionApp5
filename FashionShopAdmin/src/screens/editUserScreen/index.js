import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import color from '../../constants/color'
import FONT_FAMILY from '../../constants/fonts'
import scale from '../../constants/responsive'
import { IC_Backward } from '../../assets/icons'
import { ScrollView } from 'react-native-gesture-handler'
import { IMG_Collection, IMG_Logo, IMG_ModelFour, IMG_ModelOne, IMG_ModelThree, IMG_ModelTwo } from '../../assets/images'
import SaveButton from '../../components/buttons/Save'

const data=[
    {id:1, name: "Thu hien", phone: "0336708086", date: "03/11/2023",source:IMG_Collection},
    {id:2, name: "khoi mai", phone: "0341283402", date: "03/11/2023",source:IMG_ModelFour},
    {id:3, name: "mai khoi", phone: "0336708036", date: "03/11/2023",source:IMG_ModelOne},
    {id:4, name: "tri dao", phone: "0336713086", date: "03/11/2023",source:IMG_ModelThree},
    {id:5, name: "dao tham", phone: "03367133486", date: "03/11/2023",source:IMG_ModelTwo},
    {id:6, name: "thanh thao", phone: "03363428086", date: "03/11/2023",source:IMG_Collection},
    {id:7, name: "anh quoc", phone: "0336701386", date: "03/11/2023",source:IMG_ModelFour},
    {id:8, name: "chinh", phone: "0436708086", date: "03/11/2023",source:IMG_ModelThree},
    {id:9, name: "hehe", phone: "0356708086", date: "03/11/2023",source:IMG_Logo},

];

const EditUserScreen = (props) => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity onPress={()=>props.navigation.goBack()} >
                <IC_Backward stroke={color.White}></IC_Backward>
            </TouchableOpacity>
            <View >
                <Text style={styles.textHeader}>Edit users</Text>
            </View>
        </View>

        <ScrollView style={styles.body}>
            <View style={styles.viewImage}>
                <Image style={styles.image} resizeMode='center' source={IMG_ModelFour}/>
            </View>

{/* name */}
                <View style={styles.viewInfo}>
                    <View style={styles.viewLabel}>
                        <Text style={styles.textLabel}>Name: </Text>
                    </View>
                    <View style={styles.viewText}>
                        <Text style={styles.text}>Le Thi Thu Hien</Text>
                    </View>
                </View>
{/* email */}
                <View style={styles.viewInfo}>
                    <View style={styles.viewLabel}>
                        <Text style={styles.textLabel}>Email: </Text>
                    </View>
                    <View style={styles.viewText}>
                        <Text style={styles.text}>thuhien@gmail.com</Text>
                    </View>
                </View>

 {/* phone */}
                <View style={styles.viewInfo}>
                    <View style={styles.viewLabel}>
                        <Text style={styles.textLabel}>Phone: </Text>
                    </View>
                    <View style={styles.viewText}>
                        <Text style={styles.text}>0336728920</Text>
                    </View>
                </View>
{/* address */}
                <View style={styles.viewInfo}>
                    <View style={styles.viewLabel}>
                        <Text style={styles.textLabel}>Address: </Text>
                    </View>
                    <View style={styles.viewText}>
                        <Text style={styles.text}>Phuong Linh Trung -Thu Duc</Text>
                    </View>
                </View>
{/* button           */}
                <View style={styles.button}>
                    <SaveButton text={'Delete user'} onPress={()=>props.navigation.navigate("ListUser")}></SaveButton>
                </View>
            </ScrollView>
    </SafeAreaView>
  )
}

export default EditUserScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.White,
    },
    header:{
        flexDirection: 'row',
        backgroundColor: color.TitleActive,
        flex:0.1,
        alignItems: 'center'
    },
    textHeader:{
        color: color.White,
        fontFamily: FONT_FAMILY.Regular,
        fontSize: 24,
        fontWeight: '700',
    },
// BODY
    body:{
        flex: 0.9,
        backgroundColor: color.White,
    },
//IMAGE
    viewImage:{
        marginTop: scale(10),
        height: scale(150),
        alignItems:'center'
    },
    image:{
        width:scale(150),
        height:scale(150),
        borderRadius: 150
    },
//info
    viewInfo:{
        marginTop: scale(10),
        flexDirection: 'row',
        alignSelf:'center'
    },
    viewLabel:{
        height: scale(30),
        // borderWidth: 1,
        width: '25%',
        justifyContent:'center'
    },
    viewText:{
        // borderWidth: 1,
        width: '60%',
        justifyContent:'center'
    },
    textLabel:{
        fontFamily: FONT_FAMILY.Regular,
        fontSize: 20,
        color: color.Secondary,
        fontWeight: '700'
    },
    text:{
        fontFamily: FONT_FAMILY.Regular,
        fontSize: 18,
        color: color.TitleActive,
        fontWeight: '700'
    },
    //button
    button:{
        marginTop: scale(20),
        alignItems: 'center'
    },

})