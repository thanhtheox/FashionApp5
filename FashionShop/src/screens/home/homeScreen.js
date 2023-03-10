import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Custom_Header from '../../components/header/Custom_Header'
import Color from '../../constants/color'
import scale from '../../constants/responsive'

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
        {/* Header */}
        <Custom_Header style={{margin: scale(30)}}/>
        <ScrollView style={{width: '100%', height: '100%'}}>
            
        </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: Color.Background,
    },
})