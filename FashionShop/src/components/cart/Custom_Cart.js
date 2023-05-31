import {StyleSheet, Text, View, Image, TouchableOpacity,LogBox} from 'react-native';
import React, {useState,useEffect} from 'react';
import scale from '../../constants/responsive';
import FONT_FAMILY from '../../constants/fonts';
import Color from '../../constants/color';
import { IC_CartDelete } from '../../assets/icons';


const Custom_Cart = props => {
    const [count, setCount] = useState(props.qty);
    const inCount = () => {
        setCount(count + 1);
      };
    const decCount = () => {
      if(count > 1)
        setCount(count - 1);
        else{
          // setVisible(true);
          // if(msg)
          props.removeHandler(props.id)
        }
    };
    useEffect(() => {
      props.qtyChangeHandler(props.id, count)}
      , [count])
    
  return (
    <TouchableOpacity onPress={props.onPress} key={props.id}>
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image
            source={{uri:`${props.img}`}}
            style={styles.img}
            resizeMode={'stretch'}
          />
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.prodName}>{props.name}</Text>
            <Text style={styles.prodDescription} numberOfLines={3}>
            {props.description}
            </Text>
            <View style={styles.viewValue}>
                <View style={styles.Sub}>
                    <TouchableOpacity 
                        onPress={decCount}
                        hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}>
                        <Text style={styles.textTouch}>-</Text>
                    </TouchableOpacity>
                </View>
                <Text onChange style={styles.styleTextNumber}>{count}</Text>
                <View style={styles.Sub}>
                    <TouchableOpacity
                        onPress={inCount}
                        hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}>
                        <Text style={styles.textTouch}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Text style={styles.prodPrice}>${props.price*count}</Text>       
        </View>
        <TouchableOpacity onPress={() => props.removeHandler(props.id)} 
        style={{alignSelf:'flex-end',height:scale(50),width:scale(60),alignItems:'center'}}> 
          <IC_CartDelete style={{marginTop:scale(15),marginLeft:scale(40)}}/>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default Custom_Cart;

const styles = StyleSheet.create({
  container: {
    width: scale(343),
    height: scale(160),
    flexDirection: 'row',
    alignSelf:'center',
    justifyContent:'space-between',
    borderBottomWidth:1,
    borderTopWidth:1,
  },
  imgContainer: {
    alignSelf:'center',
    width: scale(100),
    height: scale(150),
  },
  img: {
    width: '100%',
    height: scale(150),
  },
  textContainer: {
    width:scale(160),
    height:scale(150),
    flexDirection:'column',
    alignSelf:'center',
    justifyContent:'space-between',
  },
  prodName: {
    fontFamily: FONT_FAMILY.Regular,
    fontSize: scale(15),
    marginLeft:scale(10),
    color: Color.Body,
  },
  prodDescription: {
    fontFamily: FONT_FAMILY.Regular,
    fontSize: scale(14),
    marginLeft:scale(10),
    color: Color.Label,
  },
  viewValue: {
    flexDirection: 'row',
    width: scale(70),
    marginLeft:scale(20),
    alignItems: 'center',
    justifyContent:'space-between',
  },
  Sub:{
    borderRadius: 360,
    borderWidth:1,
    borderColor:Color.Silver,
    width:scale(22),
    height:scale(22),
    alignItems:'center',
  },
  textTouch: {
    fontFamily:FONT_FAMILY.Regular,
    fontWeight:'700',
    alignSelf:'center',
    justifyContent:'center',
    color:Color.Label,
    fontSize: scale(14),
  },
  prodPrice: {
    fontFamily: FONT_FAMILY.Regular,
    fontSize: scale(16),
    color: Color.Secondary,
    marginLeft:scale(20),
  },
  
});
