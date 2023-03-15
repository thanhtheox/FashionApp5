import { SafeAreaView, ScrollView, StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import Custom_Header from '../../../../components/header/Custom_Header'
import Custom_Footer from '../../../../components/footer/Custom_Footer'
import color from '../../../../constants/color'




const ProductDetailsScreen = (props) => {
 

  return (
    <SafeAreaView style={styles.container}>
        {/* Header */}
        <Custom_Header/>
        <ScrollView >

          <Custom_Footer style={{justifyContent: 'flex-end'}}/>
        </ScrollView>
    </SafeAreaView>
  )
}

export default ProductDetailsScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'column',
        backgroundColor: color.OffWhite,
    },

})