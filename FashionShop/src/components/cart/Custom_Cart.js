import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState,useEffect} from 'react';
import scale from '../../constants/responsive';
import {IMG_ModelTwo} from '../../assets/images/index';
import FONT_FAMILY from '../../constants/fonts';
import Color from '../../constants/color';


const Custom_Cart = props => {
    const [count, setCount] = useState(props.textNumber);
    const inCount = () => {
        setCount(count + 1);
      };
    const decCount = () => {
      if(count > 1)
        setCount(count - 1);
        // else{
        //   setVisible(true);
        //   if(msg)
        //   props.removeHandler(props.id)
        // }
    };
    // useEffect(() => props.qtyChangeHandler(props.id, count1), [count1])
    // useEffect(() => {
    //   if(msg)
    //   props.removeHandler(props.id)},[msg])
    
  return (
    <TouchableOpacity {...props}>
      <View key={props.id} style={styles.container}>
        <View style={styles.imgContainer}>
          <Image
            source={props.img}
            style={styles.img}
            resizeMode={'contain'}
          />
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.prodName}>{props.textName}</Text>
            <Text style={styles.prodDescription}>
            {props.textDescription}
            </Text>
            <View style={styles.viewValue}>
                <View style={styles.AddSub}>
                    <TouchableOpacity 
                        onPress={decCount}
                        hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}>
                        <Text style={styles.textTouch}>-</Text>
                    </TouchableOpacity>
                </View>
                <Text onChange style={styles.styleTextNumber}>{count}</Text>
                <View style={styles.AddSub}>
                    <TouchableOpacity
                        onPress={inCount}
                        hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}>
                        <Text style={styles.textTouch}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Text style={styles.prodPrice}>${props.textPrice*count}</Text>       
        </View>
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
    marginTop: scale(15),
  },
  imgContainer: {
    width: scale(100),
    height: scale(134),
  },
  img: {
    position: 'absolute',
    width: scale(100),
    height: scale(134),
  },
  textContainer: {
    marginLeft: scale(12),
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
    width: '35%',
    alignItems: 'center',
    justifyContent:'space-between',
  },
  AddSub:{
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
