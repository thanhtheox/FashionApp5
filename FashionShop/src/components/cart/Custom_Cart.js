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
      // props.removeHandler(props.id)}
      , [count])
    // useEffect(() => {
    //   // if(msg)
    //   props.removeHandler(props.id)}
    //   // ,[msg]
    // )
    
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View key={props.id} style={styles.container}>
        <View style={styles.imgContainer}>
          <Image
            source={props.img}
            style={styles.img}
            resizeMode={'contain'}
          />
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.prodName}>{props.name}</Text>
            {/* <Text style={styles.prodDescription}>
            {props.textDescription}
            </Text> */}
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
        style={{alignSelf:'center',marginLeft:scale(70), backgroundColor:'#DEDEDE',height:scale(134)}}> 
          <IC_CartDelete style={{marginTop:scale(55), marginLeft:scale(18)}}/>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default Custom_Cart;

const styles = StyleSheet.create({
  container: {
    width: scale(343),
    height: scale(134),
    flexDirection: 'row',
    alignSelf:'center'
  },
  imgContainer: {
    width: scale(100),
    height: scale(134),
  },
  img: {
    width: scale(100),
    height: scale(134),
  },
  textContainer: {
    marginLeft: scale(12),
    width:scale(100),
    overflow: 'hidden',
    flexDirection:'column',
    justifyContent:'space-around',
  },
  prodName: {
    fontFamily: FONT_FAMILY.Regular,
    fontSize: scale(18),
    color: Color.Body,
  },
  prodDescription: {
    fontFamily: FONT_FAMILY.Regular,
    fontSize: scale(15),
    color: Color.Label,
  },
  viewValue: {
    flexDirection: 'row',
    width: scale(70),
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
  },
  
});
