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
} from 'react-native';
import React, {useState, useEffect} from 'react';
import color from '../../../../constants/color';
import FONT_FAMILY from '../../../../constants/fonts';
import scale from '../../../../constants/responsive';
import {LineBottom} from '../../../../components/footer/images';
import SaveButton from '../../../../components/buttons/Save';
import {IC_Down, IC_Forward, IC_Plus} from '../../../../assets/icons';
import DropDownPicker from 'react-native-dropdown-picker';
import {useForm, Controller} from 'react-hook-form';
import Custom_Cart from '../../../../components/cart/Custom_Cart';
import {IMG_ModelFour} from '../../../../assets/images';
import {useDispatch, useSelector} from 'react-redux';
import {
  adjustQTY,
  removeFromCart,
  resetCartWhenOrder,
} from '../../../../redux/actions/cartActions';

  const CheckOut = (props) => { 
    const user = useSelector(state => state.user);
    const {userItems} = user;
    const userInfo = userItems.user;
    const [method, setMethod] = useState([
        {label: 'Pickup at store - FREE', value: 0},
        {label: 'Ship COD - $5', value: 5},
    ]); 
    const [methodValue, setMethodValue] = useState(0)
    const [methodOpen, setMethodOpen] = useState(false);
    const { handleSubmit, control } = useForm();

  function handlePickMethod(val) {
    switch (val.value) {
      case 0:
        method = [{label: 'Pickup at store - FREE', value: 0}];
        break;
      case 5:
        method = [{label: 'Ship COD - $5', value: 5}];
        break;
    }
  }
  const dispatch = useDispatch();
  const [totalAmount, setTotalAmount] = useState(0);
  const [visible, setVisible] = useState(true);
  const cart = useSelector(state => state.cart);
  const {cartItems} = cart;
  useEffect(() => {
    onCalculateAmount();

    if (totalAmount === 0) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  }, [cartItems, totalAmount]);

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
        <View style={styles.introTextBox}>
            <Text style={styles.introText}>CHECKOUT</Text>
            <Image source={LineBottom}/>
        </View>
        <View style={styles.address}>
            <Text style={styles.bodyText1}>SHIPPING ADDRESS</Text>
            <TouchableOpacity style={styles.bodyTextBox}>
                    <IC_Forward style = {styles.ForwardPosition}/>
                    <Text style={styles.name}>{userInfo.firstName + ' ' + userInfo.lastName}</Text>
                    <Text numberOfLines={2} style={styles.bodyText}>ktx khu B, Tp.Thu Duc, Tp.Ho Chi Minh</Text>
                    <Text style={styles.bodyText}>{userInfo.phoneNumber}</Text>
            </TouchableOpacity>                 
            <TouchableOpacity style={styles.addShipping} onPress={() => props.navigation.navigate('AddNewAddressScreen')}>
                <Text style={styles.addShippingText}>Add shipping address</Text>
                <IC_Plus style = {styles.PlusPosition}/>
            </TouchableOpacity>

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
          {cartItems.map(item => (
            <Custom_Cart
              id={item.id}
              qty={item.qty}
              description={item.description}
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
      <View />
      <View style={styles.totalBorder}>
        <Text style={styles.total}>TOTAL</Text>
        <Text style={styles.price}>${totalAmount + methodValue}</Text>
      </View>
      <TouchableOpacity
        style={styles.placeOrder}
        onPress={() => resetCartHandler()}>
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
    justifyContent: 'center',
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
    //padding: scale(10),
    marginTop: scale(10),
    color: color.TitleActive,
    fontSize: 16,
    fontWeight: 400,
    fontFamily: FONT_FAMILY.Regular,
    marginLeft: scale(-60),
  },
  name: {
    //padding: scale(10),
    marginTop: scale(10),
    marginLeft: scale(-60),
    color: color.TitleActive,
    fontSize: 18,
    fontWeight: 400,
    fontFamily: FONT_FAMILY.Regular,
  },
  details: {
    marginLeft: scale(20),
    justifyContent: 'center',
  },
  ForwardPosition: {
    position: 'absolute',
    marginLeft: scale(280),
    justifyContent: 'center',
  },
  PlusPosition: {
    position: 'absolute',
    marginLeft: scale(300),
    justifyContent: 'center',
  },
  addShipping: {
    borderColor: color.White,
    width: scale(342),
    height: scale(48),
    backgroundColor: color.InputBackground,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: scale(30),
    marginTop: scale(10),
  },
  addShippingText: {
    color: color.TitleActive,
    fontFamily: FONT_FAMILY.Regular,
    fontSize: scale(16),
    fontWeight: 400,
    marginLeft: scale(20),
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
