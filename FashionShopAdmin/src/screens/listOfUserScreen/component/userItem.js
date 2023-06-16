import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View ,Image} from 'react-native'
import React from 'react'
import { IMG_ModelOne } from '../../../assets/images'
import scale from '../../../constants/responsive'
import color from '../../../constants/color'
import FONT_FAMILY from '../../../constants/fonts'

const UserItem = (props) => {
  return (
   <TouchableOpacity style={styles.viewItem} onPress={props.onPress}>
    <View style={styles.viewNumber}>
        <Text style={styles.number}>{props.number}</Text>
    </View>
    <View style={styles.viewImage}>
        <Image source={{uri:props.source}} style={styles.image} resizeMode='cover'></Image>
    </View>
    <View style={styles.viewInfo}>
        <Text style={styles.textName} numberOfLines={1} >{props.name}</Text>
        <Text style={styles.textDate}>{props.phone}</Text>
        <Text style={styles.textDate} numberOfLines={1}>{props.date}</Text>
    </View>

   </TouchableOpacity>
  )
}

export default UserItem

const styles = StyleSheet.create({
    viewItem:{
        width: '100%',
        height: scale(130),
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'center',
    },
    viewNumber:{
        width: '10%',
        alignItems: 'center'
    },
    viewImage:{
        marginLeft: '5%',
        height: scale(100),
        borderRadius: 100,
        overflow:'hidden',
        alignItems:'center'
    },
    image:{
        width:scale(100),
        height: scale(100),
    },
    viewInfo:{
        width:'50%',
        marginLeft: '5%'
    },
    textName:{
        fontSize: 16,
        color: color.TitleActive,
        textTransform:'uppercase',
        fontWeight: '500',
        fontFamily: FONT_FAMILY.Regular,
    },
    textDate:{
        fontSize: 14,
        color: color.TitleActive,
        fontWeight: '500',
        fontFamily: FONT_FAMILY.Regular,
        opacity: 0.5,
    },



})