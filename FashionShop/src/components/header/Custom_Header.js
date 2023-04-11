import { StyleSheet, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Color from '../../constants/color'
import {IC_Menu, IC_Search, IC_ShoppingBag} from '../../assets/icons'
import scale from '../../constants/responsive'
import { IC_Logo } from '../logo'

const Custom_Header = ({props,navigation}) => {
  return (
    <View style={styles.container}>
        {/* Menu */}
         <TouchableOpacity style={styles.menuContainer} onPress={() => navigation.navigate('MenuScreen')}>
            <IC_Menu fill={props.menuColor}/>
        </TouchableOpacity>
        {/* Logo */}
        <View style={styles.logoContainer}>
            <IC_Logo fill={props.logoColor}/>
        </View>
        <View style={{flexDirection: 'row'}}>
            {/* Search */}
            <TouchableOpacity style={styles.searchContainer} onPress={() => navigation.navigate('SearchDetailScreen')}>
                <IC_Search stroke={props.searchColor}/>
            </TouchableOpacity>
            {/* ShoppingBag */}
            <TouchableOpacity style={styles.shoppingBagContainer} onPress={() => navigation.navigate('CartScreen')}>
                <IC_ShoppingBag strokeA={props.cartColor} strokeB={props.cartColor}/>
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
        alignSelf: 'center',
        width: '95%',
        position: 'relative',
        alignItems: 'center',
    },
    menuContainer:{

    },
    logoContainer:{
        paddingLeft: scale(50),
    },
    searchContainer:{
    },
    shoppingBagContainer:{
        marginLeft: scale(20),
    },
})