import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View,Image, ImageBackground } from 'react-native'
import React from 'react'
import { IMG_Collection } from '../../../assets/images'
import scale from '../../../constants/responsive'
import FONT_FAMILY from '../../../constants/fonts'
import color from '../../../constants/color'
import { IC_Address, IC_Backward, IC_Delete, IC_Heart } from '../../../assets/icons'

const BlogItem = (props) => {
  return (
    <TouchableOpacity style={styles.view} onPress={props.onPress}>
        
        <View style={styles.viewImage}>
             <View style={styles.viewTitle}>
                <Text style={styles.textTitle} numberOfLines={1} >{props.name}</Text>
            </View>
            <ImageBackground source={{uri:props.source||'https://climate.onep.go.th/wp-content/uploads/2020/01/default-image.jpg'}} style={styles.image} >
                <TouchableOpacity style={styles.viewIcon}>
                    <IC_Delete />
                </TouchableOpacity>
            </ImageBackground>
            

        </View>
    </TouchableOpacity>
  )
}

export default BlogItem

const styles = StyleSheet.create({
    view:{
        width: '100%',
        justifyContent: 'center',
        height: scale(200),
    },
    viewTitle:{
        // marginLeft: '10%',
        // alignContent:'flex-end'
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
        fontWeight: '700',
        fontFamily: FONT_FAMILY.Regular,
        color: color.TitleActive,
        textTransform:'uppercase',
    },
    viewIcon:{
        width:'10%',
        height: '15%',
        alignSelf: 'flex-end',
    },
    icon:{
        width: '100%',
        height: '100%',
    }
})