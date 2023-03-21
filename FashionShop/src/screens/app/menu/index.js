import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import color from '../../../constants/color'
import { IC_Close } from '../../../assets/icons'
import scale from '../../../constants/responsive'
import Custom_CategoryScrollView from './components/Custom_CategoryScrollView'

const Menu = () => {
  return (
    <SafeAreaView style={styles.container}>
        {/* Icon Close */}
        <TouchableOpacity>
            <IC_Close/>
        </TouchableOpacity>
        {/* Categories */}
        <Custom_CategoryScrollView style={{marginTop:scale(505)}}/>
        
    </SafeAreaView>
  )
}

export default Menu

const styles = StyleSheet.create({
    container: {
        backgroundColor: color.White,
        flex:1,
        paddingVertical:scale(10),
        paddingHorizontal:scale(16),
        flexDirection: 'column',
    },
})