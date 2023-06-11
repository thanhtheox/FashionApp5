import {
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  RefreshControl,
  ActivityIndicator
} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import scale from '../../../constants/responsive';
import color from '../../../constants/color';
import PriceAttribute from './components/priceAttribute';
import ButtonReOrder from './components/buttonReOrder';
import FONT_FAMILY from '../../../constants/fonts';
import { IC_Cancel,IC_New,IC_Delivered,IC_Delivering,IC_Preparing } from '../../../assets/icons';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import useAxiosPrivate from '../../../hooks/useAxiosPrivate';
import UnderLine from './components/underLineSwitch';

const {width: screenWidth} = Dimensions.get('window');

const OrdersScreen = props => {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [chosen, setChosen] = useState("new");
  const [subChosen, setSubChosen] = useState('return');
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const user = useSelector(state => state.user);
  const {userItems} = user;
  const userInfo = userItems.user;
  const axiosPrivate = useAxiosPrivate();

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    handleGetOrder().then(() => setRefreshing(false));
  }, []);
  const handleGetOrder = async() => {
    try {
      setLoading(true);
      const response = await axiosPrivate.get(`/get-order-by-userId/${userInfo._id}`);
      setOrders(response?.data.orders); 
      setChosen(chosen);
      filters(orders);
      setLoading(false);
    } catch (error) {
      console.log(error)
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      handleGetOrder();
  });
  return unsubscribe;
}, [props.navigation]);

  const filters =(orders)=>{
    const newData=orders.filter((x) =>  x.orderStatus===chosen)
    setFilteredOrders(newData);
    console.log(filteredOrders)
    return newData;
  }

  useEffect(() => {
    if(orders)
      filters(orders);
  }, [chosen])



  return (
    loading?(
      <SafeAreaView style={[styles.container,{justifyContent:'center'}]}>
          <ActivityIndicator  color={color.Primary} size={60} />
      </SafeAreaView>
  ):(
    <SafeAreaView style={styles.container}>
      {chosen==='cancel'?(
          <View style={{flexDirection: 'row'}}>
            <UnderLine text={'Return'} name={'return'} onPress={() => setSubChosen('return')} chosen={subChosen}/>
            <UnderLine text={'Canceled'} name={'cancel'} onPress={() => setSubChosen('cancel')} chosen={subChosen}/>
          </View>
      ):(null)}
      <ScrollView 
        horizontal="false" 
        style={styles.scrollView}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />}
          >
        <View style={styles.scroll}>
          <View style={styles.viewData}>
            {filteredOrders.map(data => (
              <View key={data._id}>
                <View style={{flexDirection: 'row',width: '100%'}}>
                <Image style={styles.imgData} source={{uri: `${data.productDetails[0].productDetailId.productId.posterImage.url}`}} resizeMode='cover'/>
                {/* <View style={{flex}}> */}
                <View style={{alignSelf: 'center', marginLeft: scale(15), width:'70%' }}>
                  <Text style={styles.info} numberOfLines={1}>Receiver: {userInfo.firstName+ ' '+userInfo.lastName}</Text>
                  <Text style={styles.info} numberOfLines={2}>
                    Location: {data.address.streetAndNumber+', '+data.address.ward+', '+data.address.district+', '+data.address.city}
                  </Text>
                  <Text style={styles.info} numberOfLines={1}>Phone Number: {userInfo.phoneNumber}</Text>
                  {data.note === '' ? null:<Text style={styles.info} numberOfLines={1}>Note: {data.note}</Text>}
                </View>
                </View>
                {/* </View> */}
                {data.productDetails.map(item =>            
                    <PriceAttribute
                      {...props}  
                      key={item._id}
                      product={item.productDetailId.productId}
                      qty={item.quantity}
                      name={item.productDetailId.productId.name}
                      price={item.productDetailId.productId.price}
                      sizeName={item.productDetailId.sizeId.name}
                      colorCode={item.productDetailId.colorId.code}
                    />
                )}

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    top: 10,
                    borderBottomWidth: 0.2,
                    paddingBottom: scale(10),
                  }}>
                  <View style={styles.viewTotal}>
                    <Text style={styles.textTotal}>
                      Total: ${data.orderTotalPrice}
                    </Text>
                  </View>
                  {/* <ButtonReOrder {...props} action={data.method}/> */}
                </View>
                <View style={{height: scale(50)}} />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
      {/* Nav Bar */}
      <>
        <View style={styles.bottomTabs}>
          <TouchableOpacity style={chosen=="new"?styles.touchTabChosen:styles.touchTab} onPress={() => {setChosen("new")}}>
            <View style={{width:scale(24), height: scale(24), justifyContent: 'center', alignItems: 'center'}}>
              <IC_New fill={chosen=="new"?color.TitleActive:color.OffWhite} stroke={chosen=="new"?color.OffWhite:color.TitleActive}/>
            </View>
            <Text style={chosen=="new"?styles.textTabChosen:styles.textTab}>New</Text>
          </TouchableOpacity>

          <TouchableOpacity style={chosen=="in progress"?styles.touchTabChosen:styles.touchTab} onPress={()=>{setChosen("in progress")}}>
            <View style={{width:scale(24), height: scale(24), justifyContent: 'center', alignItems: 'center'}}>
              <IC_Preparing fill={chosen=="in progress"?color.TitleActive:color.OffWhite} stroke={chosen=="in progress"?color.OffWhite:color.TitleActive}/>
            </View>
            <Text style={chosen=="in progress"?styles.textTabChosen:styles.textTab}>In Progress</Text>
          </TouchableOpacity>

          <TouchableOpacity style={chosen=="shipping"?styles.touchTabChosen:styles.touchTab} onPress={()=>{setChosen("shipping")}}>
            <View style={{width:scale(24), height: scale(24), justifyContent: 'center', alignItems: 'center'}}>
              <IC_Delivering fill={chosen=="shipping"?color.TitleActive:color.OffWhite} stroke={chosen=="shipping"?color.OffWhite:color.TitleActive}/>
            </View>
            <Text style={chosen=="shipping"?styles.textTabChosen:styles.textTab}>Shipping</Text>
          </TouchableOpacity>

          <TouchableOpacity style={chosen=="complete"?styles.touchTabChosen:styles.touchTab} onPress={()=>{setChosen("complete")}}>
            <View style={{width:scale(24), height: scale(24), justifyContent: 'center', alignItems: 'center'}}>
              <IC_Delivered fill={chosen=="complete"?color.TitleActive:color.OffWhite} stroke={chosen=="complete"?color.OffWhite:color.TitleActive}/>
            </View>
            <Text style={chosen=="complete"?styles.textTabChosen:styles.textTab}>Complete</Text>
          </TouchableOpacity>

          <TouchableOpacity style={chosen=="cancel"?styles.touchTabChosen:styles.touchTab} onPress={()=>{setChosen("cancel")}}>
            <View style={{width:scale(24), height: scale(24), justifyContent: 'center', alignItems: 'center'}}>
              <IC_Cancel fill={chosen=="cancel"?color.TitleActive:color.OffWhite} stroke={chosen=="cancel"?color.OffWhite:color.TitleActive}/>
            </View>
            <Text style={chosen=="cancel"?styles.textTabChosen:styles.textTab}>Return/Canceled</Text>
          </TouchableOpacity>
        </View>
      </>
    </SafeAreaView>
  )
  );
};

export default OrdersScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.White,
    flex: 1,
  },
  scroll: {
    width: screenWidth,
  },
  scrollView: {
    width: screenWidth,
    marginTop: 20,
  },
  viewData: {
    alignSelf: 'center',
    width: scale(347),
  },

  imgData: {
    width: '25%',
    height: scale(87),
    opacity: 0.65,
    backgroundColor: color.TitleActive,
  },
  viewTotal: {
    justifyContent: 'center',
  },
  textTotal: {
    fontFamily: FONT_FAMILY.Bold,
    fontSize: 14,
    color: color.RedSolid,
  },
  bottomTabs:{
    flexDirection: 'row',
    width: '100%',
    alignContent: 'space-between',
    bottom: 0,
    backgroundColor: color.White,
    
  },
  textTab:{
    marginTop: scale(5),
    color: color.TitleActive,
    fontSize: scale(14),
    fontFamily: FONT_FAMILY.Regular,
  },
  textTabChosen:{
    marginTop: scale(5),
    color: color.OffWhite,
    fontSize: scale(14),
    fontFamily: FONT_FAMILY.Regular,
  },
  touchTab:{
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:color.White,
    borderRadius:scale(12),
    paddingVertical: scale(5),

  },
  touchTabChosen:{
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    borderRadius:scale(12),
    justifyContent: 'center',
    paddingVertical: scale(5),
    backgroundColor: color.TitleActive,
  },
  info:{
    color: color.TitleActive,
    fontFamily: FONT_FAMILY.Regular,
    fontSize: scale(14),
  }
});
