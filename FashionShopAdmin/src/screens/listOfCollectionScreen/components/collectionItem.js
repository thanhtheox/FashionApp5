import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View,Image, ImageBackground } from 'react-native'
import React from 'react'
import { IMG_Collection } from '../../../assets/images'
import scale from '../../../constants/responsive'
import FONT_FAMILY from '../../../constants/fonts'
import color from '../../../constants/color'
import { IC_Address, IC_Backward, IC_Delete, IC_Heart } from '../../../assets/icons'

const CollectionItem = (props) => {
    console.log(props.source)
  return (
    <TouchableOpacity style={styles.view} onPress={props.onPress}>
        <View style={styles.viewTitle}>
            <Text style={styles.textTitle} numberOfLines={1} >{props.name}</Text>
        </View>
        <View style={styles.viewImage}>
            <ImageBackground source={{uri:`${props.source}`}} style={styles.image} resizeMode='cover'>
                <TouchableOpacity style={styles.viewIcon} onPress={props.delete}>
                    <IC_Delete />
                </TouchableOpacity>
            </ImageBackground>

        </View>
    </TouchableOpacity>
  )
}

export default CollectionItem

const styles = StyleSheet.create({
    view:{
        width: '40%',
        justifyContent: 'center',
        height: scale(200),
    },
    viewTitle:{
        marginLeft: '10%'
    },
    viewImage:{
        alignSelf: 'center',
        marginTop: scale(5),
        width: '80%',
        height: '80%'
    },
    image:{
        width: '100%',
        height: '100%',
    },
    textTitle: {
        fontSize: 14,
        fontFamily: FONT_FAMILY.Regular,
        color: color.TitleActive,
        textTransform:'uppercase',
    },
    viewIcon:{
        width:'20%',
        height: '15%',
        alignSelf: 'flex-end',
    },
    icon:{
        width: '100%',
        height: '100%',
    }
})