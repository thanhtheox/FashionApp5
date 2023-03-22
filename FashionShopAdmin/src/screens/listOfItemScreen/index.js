import { StyleSheet, Text, View,SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import color from '../../constants/color'
import scale from '../../constants/responsive'
import FONT_FAMILY from '../../constants/fonts'
import { IMG_Collection, IMG_ModelFour, IMG_ModelOne, IMG_ModelThree, IMG_ModelTwo } from '../../assets/images'
import { IC_Delete, IC_Edit, IC_See } from '../../assets/icons'
import Item from './components/item'


const data=[
  {id:1,name: 'SAPPOCHE',description: 'cardigan green', price: '10.00', source: IMG_Collection},
  {id:2,name: 'NAGAMI',description: 'cardigan pink', price: '34.00', source: IMG_ModelFour},
  {id:3,name: 'NONUNO',description: 'cardigan blue', price: '5.00',source: IMG_ModelOne},
  {id:4,name: 'SUMGA',description: 'cardigan brown', price: '25.00',source: IMG_ModelTwo},
  {id:5,name: 'KAKHUKO',description: 'cardigan black', price: '40.00',source: IMG_ModelThree},
  {id:6,name: 'RAPAMA',description: 'cardigan yellow', price: '30.00',source: IMG_ModelFour},
  {id:7,name: 'TAKOYA',description: 'cardigan pastel', price: '50.00',source: IMG_ModelOne},

]
const ListOfItemScreen = () => {
  const [count,setCount] =useState(0);
  const incount= ()=>setCount(count+1);

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
        <View style={styles.viewText}>
          <View style={styles.viewTitleText}>
            <Text style={styles.textTile}>List of items</Text>
          </View>
          <View style={styles.viewTextLabel}>
            <Text style={styles.textLabel}>Add item</Text>
          </View>
        </View>
        </View>

        
        <View style={styles.body}>
            <ScrollView>
                {data.map(item=>(
                  <Item
                  key={item.id}
                  // number={item.id}                
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  source={item.source}
                  />

                ))}
            </ScrollView>
        </View>
    </SafeAreaView>
  )
}

export default ListOfItemScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      header: {
        flex: 0.3,
        backgroundColor: color.TitleActive,
      },
      viewText:{
        marginTop: scale(80),
        marginLeft: scale(30),
      },
      viewTitleText: {
        height: scale(50),
      },
      textTile: {
        color: color.White,
        fontSize: 36,
        fontFamily: FONT_FAMILY.JoseFinSans,
        fontWeight: 700,
      },
      viewTextLabel:{
        width: scale(122),
        height: scale(36),
        marginTop: scale(10),
        backgroundColor: color.AthensGray,
        alignItems: 'center',
      },
      textLabel: {
        color: color.TitleActive,
        fontSize: 24,
        fontFamily: FONT_FAMILY.JoseFinSans,
        fontWeight: 700,
      },
      body:{
        flex: 0.7,
        backgroundColor: color.White,
      },
      
})