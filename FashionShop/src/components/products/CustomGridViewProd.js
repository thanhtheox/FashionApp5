import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import scale from '../../constants/responsive';
import FONT_FAMILY from '../../constants/fonts';
import Color from '../../constants/color';

const Custom_GridViewProd = props => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress} >
      <View style={styles.imgContainer}>
        <Image source={{uri:`${props.image}`}} style={styles.img} resizeMode='cover'/>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.prodName}>
          {props.prodName}
        </Text>
        <Text style={styles.prodPrice}>${props.prodPrice}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Custom_GridViewProd;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    marginHorizontal:scale(6),
    height: scale(300),
    width:scale(170),
  },
  imgContainer: {
    width: scale(165),
    height: scale(180),
  },
  img: {
    position: 'absolute',
    width: scale(165),
    height: scale(180),
  },
  textContainer: {
    marginLeft: scale(3),
    justifyContent: 'center',
    alignItems: 'center',
  },
  prodName: {
    marginTop: scale(5),
    marginHorizontal:scale(7),
    fontFamily: FONT_FAMILY.Regular,
    textAlign:'center',
    fontSize: scale(15),
    color: Color.Body,
  },
  prodPrice: {
    fontFamily: FONT_FAMILY.Regular,
    fontSize: scale(15),
    color: Color.Secondary,
  },
});
