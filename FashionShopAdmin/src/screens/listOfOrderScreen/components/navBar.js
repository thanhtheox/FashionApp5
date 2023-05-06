import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState} from 'react'
import scale from '../../../constants/responsive'
import FONT_FAMILY from '../../../constants/fonts'
import color from '../../../constants/color'
import { IC_CompleteOrder, IC_InProcessOrder, IC_NewOrder, IC_ReturnOrCancel, IC_ShippingOrder } from '../../../assets/icons'

const NavBar = (props) => {
    const {chosen, setChosen} = props;
  return (
    <View style={styles.bottomTabs}>
        <TouchableOpacity style={chosen=="handling"?styles.touchTabChosen:styles.touchTab} onPress={() => {setChosen("handling")}}>
            <IC_NewOrder />
            <Text style={chosen=="handling"?styles.textTabChosen:styles.textTab}>New</Text>
        </TouchableOpacity >

        <TouchableOpacity style={chosen=="preparing"?styles.touchTabChosen:styles.touchTab} onPress={()=>{setChosen("preparing")}}>
            <IC_InProcessOrder />
            <Text style={chosen=="preparing"?styles.textTabChosen:styles.textTab}>In process</Text>
        </TouchableOpacity>

        <TouchableOpacity style={chosen=="delivering"?styles.touchTabChosen:styles.touchTab} onPress={()=>{setChosen("delivering")}}>
            <IC_ShippingOrder />
            <Text style={chosen=="delivering"?styles.textTabChosen:styles.textTab}>Shipping</Text>
        </TouchableOpacity>

        <TouchableOpacity style={chosen=="paid"?styles.touchTabChosen:styles.touchTab} onPress={()=>{setChosen("paid")}}>
            <IC_CompleteOrder />
            <Text style={chosen=="paid"?styles.textTabChosen:styles.textTab}>Complete</Text>
        </TouchableOpacity>

        <TouchableOpacity style={chosen=="cancel"?styles.touchTabChosen:styles.touchTab} onPress={()=>{setChosen("cancel")}}>
            <IC_ReturnOrCancel />
            <Text style={chosen=="cancel"?styles.textTabChosen:styles.textTab}>Return/Cancel</Text>
        </TouchableOpacity>

      </View>
  )
}

export default NavBar

const styles = StyleSheet.create({
    bottomTabs:{
        flexDirection: 'row',
        width: '100%',
        alignContent: 'space-between',
        backgroundColor: color.White,
        marginBottom: 0
      },
    textTab:{
        marginTop: scale(5),
        color: color.TitleActive,
        fontSize: 10,
        fontFamily: FONT_FAMILY.Regular,
      },
      textTabChosen:{
        marginTop: scale(5),
        color: color.TitleActive,
        fontSize: 10,
        fontFamily: FONT_FAMILY.Regular,
      },
      touchTab:{
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: color.Primary,
        paddingVertical: scale(5),
    
      },
      touchTabChosen:{
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: scale(5),
        backgroundColor: color.Alto,
        opacity: 0.76
      },
})