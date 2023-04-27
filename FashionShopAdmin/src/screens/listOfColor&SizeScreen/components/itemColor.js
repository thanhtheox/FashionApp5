import { StyleSheet, Text, View,SafeAreaView,TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import color from '../../../constants/color'
import scale from '../../../constants/responsive'
import FONT_FAMILY from '../../../constants/fonts'
import { IC_Delete, IC_Edit, IC_See } from '../../../assets/icons'


const ItemColor = (props) => {
  return (
    <TouchableOpacity style={styles.viewItem}>
        <View style={styles.viewNumber}>
            <Text style={styles.text} >{props.number}</Text>
        </View>
        <View style={[styles.viewColor,{backgroundColor: props.code}]}></View>
        <View style={styles.viewTextName}>
            <Text style={styles.text} numberOfLines={1}>{props.name}</Text>
        </View>
        
        <View style={styles.viewCode}>
            <Text style={styles.text} numberOfLines={1}>{props.code}</Text>
        </View>
        <View style={styles.viewFunction}>
                    <TouchableOpacity style={styles.viewIcon} onPress={props.delete}>
                    <IC_Delete></IC_Delete>
                    </TouchableOpacity>
                    
        </View>
    </TouchableOpacity>
  )
}

export default ItemColor

const styles = StyleSheet.create({
    viewItem:{
        marginTop: scale(5),
        width: '95%',
        flexDirection: 'row',
        height: scale(40),
        alignItems: 'center',
        alignSelf: 'center'
    },
    viewNumber:{
        width: '10%',
        alignItems: 'center'
    },
    viewTextName:{
        marginLeft: scale(10),
        width: '30%',
    },
    viewCode:{
        width: '30%'
    },
    viewColor:{
        
        width: '10%',
        height: Dimensions.get('window').width*0.1,
        backgroundColor: '#ffffff'
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
        justifyContent:'center'
    
    },
      viewIcon:{
        width: scale(30),
        height: scale(30),
        justifyContent: 'center',
        alignItems: 'center'
      }
})