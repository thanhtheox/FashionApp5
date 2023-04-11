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
  import React, {useState} from 'react';
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

  const CheckOutOne = () => { 
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
    return (
      <SafeAreaView style={styles.container}>
        <Custom_Header/>
        <View style={styles.introTextBox}>
            <Text style={styles.introText}>CHECKOUT</Text>
            <Image source={LineBottom}/>
        </View>
        <View style={styles.bodyTextBox}>
            <Text style={styles.bodyText}>SHIPPING ADDRESS</Text>
            <View style={styles.details}>
                <IC_Forward style = {styles.ForwardPosition}/>
                <Text style={styles.name}>thanh.theox</Text>
                <Text numberOfLines={2} style={styles.bodyText}>ktx khu B, Tp.Thu Duc, Tp.Ho CHi Minh</Text>
                <Text style={styles.bodyText}>0912345678</Text>
            </View>


            <TouchableOpacity style={styles.addShipping}>
                <Text style={styles.addShippingText}>Add shipping address</Text>
                <IC_Plus style = {styles.PlusPosition}/>
            </TouchableOpacity>


          <View style={styles.method}>
            <Text style={styles.bodyText}>SHIPPING METHOD</Text>
                <Controller
                    name="SHIPPING METHOD"
                    defaultValue=""
                    control={control}
                    render={({ field: { onChange, value } }) => (
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
                    )}      
                />
            </View> 
        </View> 


        <View style={styles.totalBorder}>
                <Text style={styles.total}>TOTAL</Text>
                <Text style={styles.price}>$240</Text>
                <TouchableOpacity style={styles.placeOrder}>
                    <Text style={styles.button}>PLACE ORDER</Text>
                </TouchableOpacity>
            </View>       
      </SafeAreaView>
    );
  };
  
  export default CheckOutOne;
  
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
    bodyTextBox: {
      alignSelf: 'center',
      marginTop: scale(10),
      justifyContent:'center',
    },
    bodyText: {
        //padding: scale(10),
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
        marginTop: scale(20),
        width: scale(342),
        height: scale(48),
        backgroundColor: color.AthensGray,
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: scale(30),
    },
    addShippingText: {
        color: color.TitleActive,
        fontFamily: FONT_FAMILY.Regular,
        fontSize: scale(16),
        fontWeight: 400,
        marginLeft: scale(20),
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
        
    }
  });
  