import { StyleSheet, Text, View , SafeAreaView, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import color from '../../constants/color'
import FONT_FAMILY from '../../constants/fonts'
import { ScrollView } from 'react-native-gesture-handler'
import { IC_Backward } from '../../assets/icons'
import HeaderMin from '../../components/header/headerMin'
import NavBar from './components/navBar'
import Order from './components/order'
import UnderLine from '../../components/underLineSwitch/underLineSwitch'

const ListOfOrderScreen = (props) => {
  const [orders, setOrders] = useState([
    {
      userName: 'Thu Hien',
      orderId: '3892108s0da',
      orderTime: '10/4/2023'
    },
    {
      userName: 'Thu Hien',
      orderId: '38921v890da',
      orderTime: '10/4/2023'
    },
    {
      userName: 'Thu Hien',
      orderId: '38921n890da',
      orderTime: '10/4/2023'
    },
    {
      userName: 'Thu Hien',
      orderId: '389a10890da',
      orderTime: '10/4/2023'
    },
    {
      userName: 'Thu Hien',
      orderId: '389210890da',
      orderTime: '10/4/2023'
    },
    {
      userName: 'Thu Hien',
      orderId: '381210890da',
      orderTime: '10/4/2023'
    }
  ])

  const [chosen, setChosen] = useState('handling');
  const [subChosen, setSubChosen] = useState('return');
  return (
    <SafeAreaView style={styles.container}>
      <HeaderMin text={"List of orders"} onPress={()=>props.navigation.goBack()}/>
      {chosen==='cancel'?(
          <View style={{flexDirection: 'row'}}>
            <UnderLine text={'Return'} name={'return'} onPress={() => setSubChosen('return')} chosen={subChosen}/>
            <UnderLine text={'Canceled'} name={'cancel'} onPress={() => setSubChosen('cancel')} chosen={subChosen}/>
          </View>
      ):(null)}
      <ScrollView style={{flex: 1}}>
        {orders.map(item => (
          <TouchableOpacity key={item.orderId} onPress={() => props.navigation.navigate('OrderDetail')}>
            <Order userName={item.userName} orderTime={item.orderTime} orderId={item.orderId}/>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <NavBar chosen={chosen} setChosen={setChosen}/>
    </SafeAreaView>
  )
}

export default ListOfOrderScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.White,
},
header:{
    flexDirection: 'row',
    backgroundColor: color.TitleActive,
    flex:0.1,
    alignItems: 'center'
},
textHeader:{
    color: color.White,
    fontFamily: FONT_FAMILY.Bold,
    fontSize: 24,
},
body:{
    flex: 0.9,
    backgroundColor: color.White,
}
})