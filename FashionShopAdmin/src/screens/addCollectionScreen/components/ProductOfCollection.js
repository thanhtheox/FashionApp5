import { StyleSheet, Text, View,SafeAreaView,TouchableOpacity, Image } from 'react-native'
import React from 'react'

//component
import color from '../../../constants/color'
import scale from '../../../constants/responsive'
import FONT_FAMILY from '../../../constants/fonts'
import { IC_Delete, IC_Edit, IC_See } from '../../../assets/icons'
import { IMG_AddImage, IMG_Collection } from '../../../assets/images'


const ItemProductOfCollection = (props) => {
  return (
    <TouchableOpacity style={styles.viewItem}>
        <View style={styles.viewNumber}>
            <Text style={styles.text} >{props.number}</Text>
        </View>

        <View style={styles.viewImage} >
            <Image source={{uri:props.source}} style={styles.image} resizeMode='stretch'></Image>
        </View>

        <View style={styles.viewTextName}>
            <Text style={styles.text} numberOfLines={1}>{props.name}</Text>
        </View>
        
        <View style={styles.viewFunction}>
                    <TouchableOpacity style={styles.viewIcon}>
                    <IC_Delete></IC_Delete>
                    </TouchableOpacity>
                    
        </View>
    </TouchableOpacity>
  )
}

export default ItemProductOfCollection

const styles = StyleSheet.create({
    viewItem:{
        justifyContent: 'space-between',
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
        width: '40%',
    },
    viewImage:{
        width: '10%',
        height: scale(40),
    },
    image:{
        width: '100%',
        height: '100%'
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