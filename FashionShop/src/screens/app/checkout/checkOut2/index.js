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
  import Custom_Header from '../../../../components/header/Custom_Header';
  import Custom_Footer from '../../../../components/footer/Custom_Footer';
  import color from '../../../../constants/color';
  import FONT_FAMILY from '../../../../constants/fonts';
  import scale from '../../../../constants/responsive';
  import { LineBottom } from '../../../../components/footer/images';
  import SaveButton from '../../../../components/buttons/Save';
  import { IC_Down, IC_Forward, IC_Plus } from '../../../../assets/icons';
  import DropDownPicker from 'react-native-dropdown-picker';
    import { useForm, Controller } from 'react-hook-form';
import { Card } from 'react-native-paper';
import Custom_Cart from '../../../../components/cart/Custom_Cart';
import Shipping_Cart from '../../../../components/cart/ShippingCart';
import { IMG_ModelFour } from '../../../../assets/images';

  const CheckOut = () => { 
    const [method, setMethod] = useState([
        {label: 'Pickup at store - FREE', value: '1'},
        {label: 'Ship COD - $5', value: '2'},
    ]); 
    const [methodValue, setMethodValue] = useState(null)
    const [methodOpen, setMethodOpen] = useState(false);
    const { handleSubmit, control } = useForm();

    function handlePickMethod(val){
        switch(val.value){
            case '1':
                method = [{label: 'Pickup at store - FREE', value: '1'}]
                break;
            case '2':
                method = [{label: 'Ship COD - $5', value: '2'}]
                break;
        }
    }
    const [totalAmount, setTotalAmount] = useState(0);
    const [visible, setVisible] = useState(true);
    const cartItems = [
    {
      id: '1',
      imgUrl: IMG_ModelFour,
      qty: 1,
      name: 'LAMEREI',
      description: 'Recycle Boucle Knit Cardigan Pink',
      price: 120,
    },
    {
      id: '2',
      imgUrl: IMG_ModelFour,
      qty: 1,
      name: 'LAMEREI',
      description: 'Recycle Boucle Knit Cardigan Pink',
      price: 120,
    },
    {
      id: '3',
      imgUrl: IMG_ModelFour,
      qty: 1,
      name: 'LAMEREI',
      description: 'Recycle Boucle Knit Cardigan Pink',
      price: 120,
    },
    {
      id: '4',
      imgUrl: IMG_ModelFour,
      qty: 1,
      name: 'LAMEREI',
      description: 'Recycle Boucle Knit Cardigan Pink',
      price: 120,
    },
  ];
  useEffect(() => {
    onCalculateAmount();
    
    if(totalAmount === 0)
    {
      setVisible(false);
    }
    else{
      setVisible(true);
    }

  }, [cartItems,totalAmount]);

  const onCalculateAmount = () => {
    let total = 0;
    if (Array.isArray(cartItems)) {
      cartItems.map(food => {
        total += food.price * food.qty;
      });
    }
    setTotalAmount(total);
  };
    return (
      <SafeAreaView style={styles.container}>
        <Custom_Header/>
        <View style={styles.introTextBox}>
            <Text style={styles.introText}>CHECKOUT</Text>
            <Image source={LineBottom}/>
        </View>
        <View style={styles.address}>
            <Text style={styles.bodyText1}>SHIPPING ADDRESS</Text>
            <TouchableOpacity style={styles.bodyTextBox}>
                    <IC_Forward style = {styles.ForwardPosition}/>
                    <Text style={styles.name}>thanh.theox</Text>
                    <Text numberOfLines={2} style={styles.bodyText}>ktx khu B, Tp.Thu Duc, Tp.Ho Chi Minh</Text>
                    <Text style={styles.bodyText}>0912345678</Text>
            </TouchableOpacity>                 
            <TouchableOpacity style={styles.addShipping}>
                    <Text style={styles.addShippingText}>Add shipping address</Text>
                    <IC_Plus style = {styles.PlusPosition}/>
                </TouchableOpacity>

          <View style={styles.method}>
            <Text style={styles.bodyText1}>SHIPPING METHOD</Text>
                <Controller
                    name="SHIPPING METHOD"
                    defaultValue=""
                    control={control}
                    render={({ field: { onChange, value } }) => (
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
                  textNumber={item.qty}
                  textDescription={item.description}
                  textName={item.name}
                  textPrice={item.price*item.qty}
                  img={item.imgUrl}
                  key={item.id}
                />
              ))}
            </ScrollView>

          </View>
                       
        <View/>
        <View style={styles.totalBorder}>
                <Text style={styles.total}>TOTAL</Text>
                <Text style={styles.price}>${totalAmount}</Text>
                <TouchableOpacity style={styles.placeOrder}>
                    <Text style={styles.button}>PLACE ORDER</Text>
                </TouchableOpacity>
            </View>       
      </SafeAreaView>
    );
  };
  
  export default CheckOut;
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.White,
    },
    introTextBox:{
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
      marginTop: scale(10),
      justifyContent:'center',
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
    ForwardPosition:
    {
        position: 'absolute',
        marginLeft: scale(280),
        justifyContent: 'center',
    },
    PlusPosition:
    {
        position: 'absolute',
        marginLeft: scale(300),
        justifyContent: 'center',
    },
    addShipping:{
        borderColor: color.White,
        width: scale(342),
        height: scale(48),
        backgroundColor: color.InputBackground,
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: scale(30),
        //zIndex: 2,
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
        marginTop: scale(10),
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
        marginTop: scale(30),
        justifyContent: 'center', 
        zIndex: 2,
    },
    totalBorder: {
        position: 'absolute',
        justifyContent: 'flex-end',
        bottom: 0
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
    placeOrder:{
        marginTop: scale(20),
        width: scale(375),
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
        margin: scale(20),
        alignSelf: 'center',
        marginLeft: scale(7),
        height:'30%',
        zIndex: -1,
      },
  });
  