import { StyleSheet, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { LOGO } from '../logo'
import Color from '../../constants/color'
import {IC_Menu, IC_Search, IC_ShoppingBag} from '../../assets/icons'
import scale from '../../constants/responsive'

const Custom_Header = () => {
  return (
    <View style={styles.container}>
        {/* Menu */}
        <TouchableOpacity style={styles.menuContainer}>
            <IC_Menu/>
        </TouchableOpacity>
        {/* Logo */}
        <TouchableOpacity style={styles.logoContainer}>
            <Image source={LOGO}/>
        </TouchableOpacity>
         {/* Search */}
         <TouchableOpacity style={styles.searchContainer}>
            <IC_Search/>
        </TouchableOpacity>
         {/* Menu */}
         <TouchableOpacity style={styles.shoppingBagContainer}>
            <IC_ShoppingBag/>
        </TouchableOpacity>
  
    </View>
  )
}

export default Custom_Header

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        width: '100%',
        height: scale(40),
        backgroundColor: Color.AthensGray,
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
    },
    menuContainer:{
        // position: 'absolute',
        //marginLeft: scale(16),
    },
    logoContainer:{
        // position: 'absolute',
        //marginLeft: scale(115),
        opacity: 0.8,
    },
    searchContainer:{
        // position: 'absolute',
        //marginLeft: scale(100),
    },
    shoppingBagContainer:{
        // position: 'absolute',
        //marginLeft: scale(258),
    },
})