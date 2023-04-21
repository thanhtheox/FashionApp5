import { StyleSheet, Text, View,SafeAreaView,TouchableOpacity, ScrollView } from 'react-native'
import React, { useState,useEffect } from 'react'
import FONT_FAMILY from '../../../constants/fonts'
import scale from '../../../constants/responsive'
import color from '../../../constants/color'
import { IC_Close } from '../../../assets/icons'
import Custom_Cart from '../../../components/cart/Custom_Cart'
import Button from './components/button'
import { useDispatch,useSelector } from 'react-redux'
import {
  removeFromCart,
  adjustQTY,
  resetCartWhenOrder,
} from '../../../redux/actions/cartActions';

const CartScreen = (props) => {
  const dispatch = useDispatch();
  const [totalAmount, setTotalAmount] = useState(0);
  const [visible, setVisible] = useState(true);

  const cart = useSelector(state => state.cart);
  const {cartItems} = cart;
  

  // const cartItems = [
  //   {
  //     id: '1',
  //     imgUrl: IMG_ModelFour,
  //     qty: 1,
  //     name: 'LAMEREI',
  //     description: 'Recycle Boucle Knit Cardigan Pink',
  //     price: 120,
  //   },
  //   {
  //     id: '2',
  //     imgUrl: IMG_ModelFour,
  //     qty: 1,
  //     name: 'LAMEREI',
  //     description: 'Recycle Boucle Knit Cardigan Pink',
  //     price: 120,
  //   },
  //   {
  //     id: '3',
  //     imgUrl: IMG_ModelFour,
  //     qty: 1,
  //     name: 'LAMEREI',
  //     description: 'Recycle Boucle Knit Cardigan Pink',
  //     price: 120,
  //   },
  //   {
  //     id: '4',
  //     imgUrl: IMG_ModelFour,
  //     qty: 1,
  //     name: 'LAMEREI',
  //     description: 'Recycle Boucle Knit Cardigan Pink',
  //     price: 120,
  //   },
  //   {
  //     id: '5',
  //     imgUrl: IMG_ModelFour,
  //     qty: 1,
  //     name: 'LAMEREI',
  //     description: 'Recycle Boucle Knit Cardigan Pink',
  //     price: 120,
  //   },
  //   {
  //     id: '6',
  //     imgUrl: IMG_ModelFour,
  //     qty: 1,
  //     name: 'LAMEREI',
  //     description: 'Recycle Boucle Knit Cardigan Pink',
  //     price: 120,
  //   },
  // ];
  useEffect(() => {
    console.log('render!')

    console.log('Cart Screen cart: ' + JSON.stringify(cart));
    console.log('Cart Screen: ' + JSON.stringify(cartItems));
    onCalculateAmount();
    
    if(totalAmount === 0)
    {
      setVisible(false);
    }
    else{
      setVisible(true);
    }

  }, [cart,totalAmount]);

  const onCalculateAmount = () => {
    let total = 0;
    if (Array.isArray(cartItems)) {
      cartItems.map(food => {
        total += food.price * food.qty;
      });
    }
    setTotalAmount(total);
  };

  const qtyChangeHandler = (id, qty) => {
    dispatch(adjustQTY(id, qty));
  };

  const removeFromCartHandler = id => {
    dispatch(removeFromCart(id));
  };

  const resetCartHandler = () => {
    dispatch(resetCartWhenOrder());
  };

  return (
    <SafeAreaView style={styles.container}>
        {/* Icon Close */}
        <TouchableOpacity style={{marginLeft: scale(16),marginTop:scale(5)}} onPress={() => props.navigation.goBack()}>
            <IC_Close/>
        </TouchableOpacity>
        <Text style={styles.cartText}>CART</Text>
        {visible?(
        <View style={{flexDirection:'column',height:'84%'}}>
          {/* Cart Items */}
          <View style={styles.viewScroll}>
            <ScrollView showsVerticalScrollIndicator={false}>
              {cartItems.map(item => (
                <Custom_Cart
                  onPress={() => props.navigation.navigate('ProductDetailsScreen', {
                  data: item,
                  })}
                  id={item.id}
                  qty={item.qty}
                  // textDescription={item.description}
                  name={item.name}
                  price={item.price}
                  img={item.img}
                  key={item.id}
                  qtyChangeHandler={qtyChangeHandler}
                  removeHandler={removeFromCartHandler}
                />
              ))}
            </ScrollView>
          </View>
          {/* Line */}
          <View style={{marginHorizontal:scale(16),width:'95%',height:scale(1),
            backgroundColor:color.Label,marginTop:scale(40)}}/>
          {/* Sub Total */}
          <View style={{marginHorizontal:scale(16),flexDirection:'row',justifyContent:'space-between', marginTop: scale(20)}}>
            <Text style={{fontFamily:FONT_FAMILY.Regular,color:color.TitleActive,
              fontSize:scale(16),lineHeight:scale(18)}}>SUB TOTAL</Text>
            <Text style={{fontFamily:FONT_FAMILY.Regular,color:color.Secondary,
              fontSize:scale(16),lineHeight:scale(18)}}>${totalAmount}</Text>
          </View>
          {/* Payment description */}
          <View style={{marginLeft:scale(16),width:'90%',marginTop: scale(20)}}>
            <Text style={{fontFamily:FONT_FAMILY.Regular,color:color.Label,
              fontSize:scale(14),lineHeight:scale(16),letterSpacing:scale(1)}}>
              {'*shipping charges, taxes and discount codes are calculated at the time of accounting.'}
            </Text>
          </View>
        </View>) : (
        <View style={{height:'70%',marginTop: scale(20),alignItems:'center',justifyContent:'center'}}>
          <Text style={{fontFamily:FONT_FAMILY.Regular,color:color.Label,
              fontSize:scale(14),lineHeight:scale(16),letterSpacing:scale(1)}}>
            {'You have no items in your Shopping Bag.'}
          </Text>
        </View>
        )}
        {/* Button */}
        <Button 
        text={visible? 'BUY NOW':'CONTINUE SHOPPING'}
        onPress={() => visible? props.navigation.navigate('CheckOutScreen'):props.navigation.navigate('HomeScreen')}
        />
    </SafeAreaView>
  )
}

export default CartScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: color.White,
        flex:1,
        flexDirection: 'column',
        justifyContent:'space-between',
    },
    cartText: {
      fontFamily:FONT_FAMILY.Regular,
      fontSize:scale(18),
      color:color.TitleActive,
      lineHeight:scale(22),
      letterSpacing:scale(2),
      marginLeft:scale(16),
      marginTop:scale(7),
    },
    viewScroll: {
      alignSelf: 'center',
      marginTop:scale(10),
      marginLeft: scale(7),
      height:'65%',
    },
  
})