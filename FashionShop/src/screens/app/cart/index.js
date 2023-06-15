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
  order,
} from '../../../redux/actions/cartActions';
import OKMessageBox from '../../../components/messageBox/OKMessageBox'

const CartScreen = (props) => {
  const dispatch = useDispatch();
  const [totalAmount, setTotalAmount] = useState(0);
  const [visible, setVisible] = useState(true);
  const [notExistOrder, setNotExistOrder] = useState(false);

  const cart = useSelector(state => state.cart);
  const {cartItems} = cart;
  // console.log({cartItems})
  const checkOutCart = cartItems.filter((item) => item.isOrder === true)
  
  useEffect(() => {
    onCalculateAmount();
    
    
    if(totalAmount === 0)
    {
      setVisible(false);
    }
    else{
      setVisible(true);
    }

  }, [checkOutCart,cartItems,totalAmount]);

  const onCalculateAmount = () => {
    let total = 0;
    if (Array.isArray(cartItems)) {
      cartItems.map(item => {
        total += item.product.price * item.qty;
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
  const orderHandler = (id,isOrder) => {
    dispatch(order(id,isOrder))
  };


  return (
    <SafeAreaView style={styles.container}>
      <OKMessageBox visible={notExistOrder} clickCancel={() => {setNotExistOrder(false)}} 
        title={"NO ORDERS YET"} 
        message={"You need to click on the box to select the item to order!"}  />
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
              {cartItems.map((item) => (
                <View key={item.detailId}>
                <Custom_Cart
                  onPress={() => props.navigation.navigate('ProductDetailsScreen', {
                  data: item.product,
                  })}
                  id={item.detailId}
                  isOrder={item.isOrder}
                  qty={item.qty}
                  name={item.product.name}
                  colorCode={item.colorCode}
                  sizeName={item.sizeName}
                  description={item.product.description}
                  price={item.product.price}
                  img={item.product.posterImage.url}
                  orderHandler={orderHandler}
                  qtyChangeHandler={qtyChangeHandler}
                  removeHandler={removeFromCartHandler}
                />
                </View>
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
        text={checkOutCart.length!==0? 'BUY NOW':'CONTINUE SHOPPING'}
        onPress={() => checkOutCart.length!==0? props.navigation.navigate('CheckOutStackScreen'):setNotExistOrder(true)}
        />
    </SafeAreaView>
  )
}
////Nhớ làm nếu hết hàng không thể thêm vào giỏ hoặc đặt mua
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