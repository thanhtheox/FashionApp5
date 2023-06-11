import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  Icon,
  RefreshControl,
  FlatList,
  Linking,
  Alert
} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import color from '../../../../constants/color';
import FONT_FAMILY from '../../../../constants/fonts';
import scale from '../../../../constants/responsive';
import {LineBottom} from '../../../../components/footer/images';
import SaveButton from '../../../../components/buttons/Save';
import {IC_Down, IC_Forward, IC_Location, IC_Plus} from '../../../../assets/icons';
import DropDownPicker from 'react-native-dropdown-picker';
import {useForm, Controller} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import {
  resetCartWhenOrder,
} from '../../../../redux/actions/cartActions';
import useAxiosPrivate from '../../../../hooks/useAxiosPrivate';
import Custom_CheckOutCart from './components/Custom_CheckOutCart';
import { useIsFocused } from '@react-navigation/native';

  const CheckOut = (props) => { 
    const user = useSelector(state => state.user);
    const {userItems} = user;
    const userInfo = userItems.user;
    const axiosPrivate = useAxiosPrivate();
    const [method, setMethod] = useState([
        {label: 'Pickup at store - FREE', value: 0},
        {label: 'Ship COD - $5', value: 5},
    ]); 
    const [methodValue, setMethodValue] = useState(0)
    const [methodOpen, setMethodOpen] = useState(false);
    const [address, setAddress] = useState([]);
    const { handleSubmit, control } = useForm();

  const dispatch = useDispatch();
  const [totalAmount, setTotalAmount] = useState(0);
  const [visible, setVisible] = useState(true);
  const cart = useSelector(state => state.cart);
  const {cartItems} = cart;
  const {cartId} = cart;
  const [note,setNote] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const checkOutCart = cartItems.filter((item) => item.isOrder === true)
  const [addressDefault, setAddressDefault] = useState([]);
  const locationUrl ='https://www.google.com/maps/search/UIT/@10.824217,106.7037515,13z/data=!3m1!4b1?hl=vi-VN'
  const openUrl = async (url) => {
    try{
        await Linking.openURL(url);
    }
    catch {
        Alert.alert(`Do not know how to open this url: ${url}`);
    }
}
  useEffect(() => {
    onCalculateAmount();

    if (totalAmount === 0) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  }, [checkOutCart, totalAmount]);

  const isFocus = useIsFocused();
  useEffect(() => {
  const controller = new AbortController();

  const getAddressById = async () => {
      try {
        const response = await axiosPrivate.get(`/get-address-by-user-id/${userInfo._id}`, {
          signal: controller.signal, 
        });
        console.log('address: ' ,JSON.stringify(response?.data))
        setAddress(response?.data?.address.addresses)
        setAddressDefault(response?.data?.address.addresses.filter(item => (item.isDefault === true)))
      } catch (err) {
        console.log(err.response);
      }
  };
  getAddressById();
    return () => {
      controller.abort();
    };
  }, [isFocus]);

  const onCalculateAmount = () => {
    let total = 0;
    if (Array.isArray(cartItems)) {
      checkOutCart.map(item => {
        total += item.product.price * item.qty;
      });
    }
    setTotalAmount(total);
  };

  const resetCartHandler = async (id) => {
  try {
    const response = await axiosPrivate.put(
      `/reset-cart-item/${id}`
    )
    console.log('resetCartSuccess', JSON.stringify(response.data));
    dispatch(resetCartWhenOrder());
  } catch (error) {
    console.log("error", error.response.data)
  };
  };
  const placeOrderHandler = async () => {
    try {
      const orderCart = [];
      checkOutCart.map((item) => {
        const orderCartItem = {productDetailId: item.detailId, quantity:item.qty}
        orderCart.push(orderCartItem)
      })
      console.log({orderCart})
      console.log({cartId})
      console.log({addressDefault})
      console.log({note})
      const response = await axiosPrivate.post(
        `/create-order`,
        JSON.stringify({
          userId: userInfo._id, 
          productDetails: orderCart,
          note:note,
          address:addressDefault[0]
        }),
      )
      console.log('placeOrderSuccess', JSON.stringify(response.data));
      resetCartHandler(cartId);
      setNote('');
      props.navigation.navigate('OrderSuccess')
    } catch (error) {
      console.log("error", error.response.data)
    };
  }
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView 
        horizontal="false" 
          >
        <View style={styles.introTextBox}>
            <Text style={styles.introText}>CHECKOUT</Text>
            <Image source={LineBottom}/>
        </View>
        <View style={styles.address}>
            <Text style={styles.bodyText1}>SHIPPING ADDRESS</Text>
            {methodValue === 5 ?(
            <View style={{height:scale(110)}}>
              {addressDefault.map(item => 
                <TouchableOpacity style={styles.bodyTextBox} key={item._id} onPress={() => props.navigation.navigate('ListOfAddressesScreen',{
                  data:address,
                })}>
                  <View style={{flexDirection:'column', width:'80%'}}>
                    <Text style={styles.name}>{userInfo.firstName + ' ' + userInfo.lastName}</Text>
                    <Text numberOfLines={2} style={styles.bodyText}>
                      {item.streetAndNumber+ ', '+ item.ward+ ', '+ item.district+ ', '+ item.city}
                    </Text>
                    <Text style={styles.bodyText}>{userInfo.phoneNumber}</Text>
                  </View>
                  <IC_Forward style = {styles.ForwardPosition}/>
                </TouchableOpacity>
              )}
            </View> 
            ):(
              <View style={{flexDirection:'row', width:'100%',marginLeft:scale(20)}}>
                <View style={{flexDirection:'column',marginRight:scale(50)}}>
                  <Text style={{fontFamily:FONT_FAMILY.Regular,fontSize:scale(15),color:color.TitleActive}}>Shop's location:</Text>
                  <Text numberOfLines={2} style={{fontFamily:FONT_FAMILY.Regular,fontSize:scale(14),color:color.TitleActive}}>
                    {'    University Of Information Technology '}
                  </Text>
                  <Text style={{fontFamily:FONT_FAMILY.Regular,fontSize:scale(15),color:color.TitleActive}}>{'Contact number: (786) 713-8616'}</Text>
                </View>
                <TouchableOpacity style={{alignSelf:'center'}} onPress={() => {openUrl(locationUrl)}}>
                  <IC_Location  />
                </TouchableOpacity>
              </View>
            )}    
            {/* NOTE */}
            <Text style={styles.bodyText1}>NOTE</Text>
            <View style={styles.viewInput}>
              <TextInput
                onChangeText={note => 
                  setNote(note)}
                value={note}
                style={styles.inputText}
              />
            </View>
        <View style={styles.method}>
          <Text style={styles.bodyText1}>SHIPPING METHOD</Text>
          <Controller
            name="SHIPPING METHOD"
            defaultValue=""
            control={control}
            render={({field: {onChange, value}}) => (
              <View style={styles.dropdown}>
                <DropDownPicker
                  style={styles.addShipping}
                  listMode='SCROLLVIEW'
                  textStyle={styles.addShippingText}
                  open={methodOpen}
                  value={methodValue}
                  items={method}
                  setOpen={setMethodOpen}
                  setValue={setMethodValue}
                  setItems={setMethod}
                  placeholder="Choose shipping method"
                  onChangeValue={onChange}
                />
              </View>
            )}
          />
        </View>
      </View>

      {/* Cart Items */}
      <View style={styles.viewScroll}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {checkOutCart.map(item => (
          <View key={item.detailId}>
            <Custom_CheckOutCart
            id={item.detailId}
            qty={item.qty}
            name={item.product.name}
            description={item.product.description}
            price={item.product.price}
            img={item.product.posterImage.url}
            colorCode={item.colorCode}
            sizeName={item.sizeName}
          />
          </View>
            ))}
        </ScrollView>
      </View>
      <View />
      </ScrollView>
      <View style={styles.totalBorder}>
        <Text style={styles.total}>TOTAL</Text>
        <Text style={styles.price}>${totalAmount + methodValue}</Text>
      </View>
      <TouchableOpacity
        style={styles.placeOrder}
        onPress={() => placeOrderHandler()}>
        <Text style={styles.button}>PLACE ORDER</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CheckOut;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.White,
  },
  viewInput: {
    width: '90%',
    height: scale(80),
    borderColor: color.TitleActive,
    borderWidth:1,
    borderRadius:scale(10),
    alignSelf:'center',
  },
  inputText: {
    width: '85%',
    color: color.TitleActive,
    paddingHorizontal: scale(10),
    fontSize: scale(14),
    paddingBottom: scale(5),
  },
  introTextBox: {
    alignSelf: 'center',
    marginTop: scale(10),
  },
  introText: {
    color: color.TitleActive,
    fontSize: 18,
    fontWeight: 400,
    fontFamily: FONT_FAMILY.Regular,
    letterSpacing: 4,
  },
  address: {
    marginLeft: scale(5),
  },
  bodyTextBox: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection:'row',
    width:'100%',
    paddingHorizontal:scale(10)
  },
  bodyText1: {
    //padding: scale(10),
    marginTop: scale(10),
    color: color.TitleActive,
    fontSize: 16,
    fontWeight: 400,
    fontFamily: FONT_FAMILY.Regular,
  },
  bodyText: {
    marginTop: scale(10),
    color: color.TitleActive,
    fontSize: 16,
    fontWeight: 400,
    fontFamily: FONT_FAMILY.Regular,
  },
  name: {
    //padding: scale(10),
    marginTop: scale(10),
    color: color.TitleActive,
    fontSize: 18,
    fontWeight: 400,
    fontFamily: FONT_FAMILY.Regular,
  },
  details: {
    marginLeft: scale(20),
    justifyContent: 'center',
  },
  dropdown: {
    width: scale(342),
    marginHorizontal: scale(10),
    color: color.White,
    zIndex: 2,
  },
  text: {
    color: color.TitleActive,
    fontFamily: FONT_FAMILY.Regular,
    fontSize: scale(14),
    fontWeight: 400,
    marginLeft: scale(240),
  },
  method: {
    marginTop: scale(10),
    justifyContent: 'center',
    zIndex: 2,
  },
  totalBorder: {
    borderTopWidth: 1,
    marginHorizontal: scale(18),
    marginTop: scale(18),
  },
  total: {
    color: color.TitleActive,
    fontSize: 16,
    fontWeight: 400,
    fontFamily: FONT_FAMILY.Regular,
  },
  price: {
    marginTop: scale(-13),
    alignSelf: 'flex-end',
    color: color.Primary,
    fontSize: 16,
    fontWeight: 400,
    fontFamily: FONT_FAMILY.Regular,
  },
  placeOrder: {
    marginTop: scale(15),
    width: '100%',
    height: scale(56),
    backgroundColor: color.TitleActive,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  button: {
    color: color.White,
    fontSize: 16,
    fontWeight: 400,
    fontFamily: FONT_FAMILY.Regular,
    alignSelf: 'center',
  },
  viewScroll: {
    alignSelf: 'center',
    marginLeft: scale(7),
    height: scale(180),
    marginTop: scale(7),
    zIndex: -1,
  },
});
