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
        <View style={{flexDirection: 'row'}}>
            {/* Search */}
            <TouchableOpacity style={styles.searchContainer}>
                <IC_Search/>
            </TouchableOpacity>
            {/* ShoppingBag */}
            <TouchableOpacity style={styles.shoppingBagContainer}>
                <IC_ShoppingBag/>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Custom_Header

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: scale(12),
        paddingHorizontal: scale(16),
        alignItems: 'center',
        backgroundColor: Color.AthensGray,
    },
    menuContainer:{

    },
    logoContainer:{
        opacity: 0.8,
    },
    searchContainer:{
    },
    shoppingBagContainer:{
        marginLeft: scale(20),
    },
})