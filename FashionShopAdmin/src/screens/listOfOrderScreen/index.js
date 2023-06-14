import { StyleSheet, Text, View , SafeAreaView, TouchableOpacity} from 'react-native'
import React, { useState, useEffect } from 'react'
import color from '../../constants/color'
import FONT_FAMILY from '../../constants/fonts'
import { ScrollView } from 'react-native-gesture-handler'
import HeaderMin from '../../components/header/headerMin'
import NavBar from './components/navBar'
import Order from './components/order'
import UnderLine from '../../components/underLineSwitch/underLineSwitch'
import useAxiosPrivate from '../../hooks/useAxiosPrivate'
import { useIsFocused } from '@react-navigation/native';
import { displayDateTime } from '../../config/displayDateTime'


const ListOfOrderScreen = (props) => {
  const axiosPrivate = useAxiosPrivate();
  const isFocus = useIsFocused();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getOrders = async () => {
      try {
        const response = await axiosPrivate.get('/get-all-order', {
          signal: controller.signal,
        });
        console.log(response.data);
        isMounted && setOrders(response.data.orders);
      } catch (err) {
        console.log(err);
      }
    };
    
    getOrders();
    
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [isFocus]);

  const [chosen, setChosen] = useState('new');
  const [subChosen, setSubChosen] = useState('return');
  return (
    <SafeAreaView style={styles.container}>
      <HeaderMin text={"List of orders"} onPress={()=>props.navigation.goBack()}/>
      {(chosen==='cancel' || chosen==='return')?(
          <View style={{flexDirection: 'row'}}>
            <UnderLine text={'Return'} name={'return'} onPress={() => {setSubChosen('return'), setChosen('return')}} chosen={subChosen}/>
            <UnderLine text={'Canceled'} name={'cancel'} onPress={() => {setSubChosen('cancel'), setChosen('cancel')}} chosen={subChosen}/>
          </View>
      ):(null)}
      <ScrollView style={{flex: 1}}>
        {orders.map((item,index) => (item.orderStatus === chosen) && (
          <TouchableOpacity key={item._id} onPress={() => props.navigation.navigate('OrderDetail', {order: item})}>
            <Order number={index+1} userName={item.userName} orderTime={displayDateTime(item.orderDate)} orderId={item._id} totalPrice={item.orderTotalPrice} userAvatar={item.userAvatar}/>
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