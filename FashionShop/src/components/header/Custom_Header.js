import { StyleSheet, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { LOGO } from '../logo'
import Color from '../../constants/color'
import {IC_Menu, IC_Search, IC_ShoppingBag} from '../../assets/icons'


const Custom_Header = () => {
  return (
    <View style={styles.container}>
        
        {/* Logo */}
        <TouchableOpacity style={styles.logoContainer}>
            <Image source={LOGO}/>
        </TouchableOpacity>
        {/* Menu */}
        <TouchableOpacity style={styles.menuContainer}>
            <IC_Menu/>
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
        position: 'absolute',
        width: 375,
        height: 60,
        backgroundColor: Color.AthensGray,
    },
    logoContainer:{
        position: 'absolute',
        left: 142,
        top: 19,
        opacity: 0.8,
    },
    menuContainer:{
        position: 'absolute',
        left: 16,
        top: 22.75,
    },
    searchContainer:{
        position: 'absolute',
        left: 288,
        top: 24,
    },
    shoppingBagContainer:{
        position: 'absolute',
        left: 328,
        top: 24,
    },
})