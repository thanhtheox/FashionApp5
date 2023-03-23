import { StyleSheet, Text, View,SafeAreaView,TouchableOpacity } from 'react-native'
import React from 'react'
import color from '../../../constants/color'
import scale from '../../../constants/responsive'
import FONT_FAMILY from '../../../constants/fonts'
import { IC_Delete, IC_Edit, IC_See } from '../../../assets/icons'


const ItemSize = (props) => {
  return (
    <TouchableOpacity style={styles.viewItem}>
        <View style={styles.view}>
            <Text style={styles.text} numberOfLines={1} >{props.size}</Text>
        </View>
        <View style={styles.view}>
            <Text style={styles.text} numberOfLines={1}>{props.width}</Text>
        </View>
        
        <View style={styles.view}>
            <Text style={styles.text} numberOfLines={1}>{props.length}</Text>
        </View>
        <View style={{width: '5%'}}></View>
        <View style={styles.viewFunction}>
                    <TouchableOpacity style={styles.viewIcon}>
                    <IC_Delete></IC_Delete>
                    </TouchableOpacity>                    
                </View>
    </TouchableOpacity>
  )
}

export default ItemSize

const styles = StyleSheet.create({
    viewItem:{
        marginTop: scale(5),
        width: '95%',
        flexDirection: 'row',
        height: scale(40),
        alignItems: 'center',
        alignSelf: 'center'
    },
   view:{
    width: '25%',
    alignItems:'center'
   },
    text:{
        fontSize: 18,
        fontFamily: FONT_FAMILY.Regular,
        fontWeight: '500',
        color: color.TitleActive
    },
    viewFunction:{
        width:'20%' ,
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'center'
      },
      viewIcon:{
        width: scale(30),
        height: scale(30),
        justifyContent: 'center',
        alignItems: 'center'
      },
})