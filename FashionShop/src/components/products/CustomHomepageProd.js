import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import scale from '../../constants/responsive';
import {IMG_ModelOne} from '../../assets/images/index';
import FONT_FAMILY from '../../constants/fonts';
import Color from '../../constants/color';

const Custom_HomepageProd = props => {
  return (
    <TouchableOpacity
      style={[styles.container, {width: props.width}, {height: props.height}]}
      onPress={props.onPress}>
      <View
        style={[
          styles.imgContainer,
          {width: props.width},
          {height: props.height},
        ]}>
        <Image
          source={{uri: props.image}}
          style={[styles.img, {width: props.width}, {height: props.height}]}
          resizeMode={'stretch'}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.prodName}>{props.prodName}</Text>
        <Text style={styles.prodPrice}>${props.prodPrice}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Custom_HomepageProd;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    marginHorizontal: scale(8),
    height: scale(260.16),
  },
  imgContainer: {
    height: scale(200),
  },
  img: {
    height: scale(200),
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  prodName: {
    fontFamily: FONT_FAMILY.Regular,
    fontSize: scale(15),
    color: Color.Body,
    textAlign: 'center',
  },
  prodPrice: {
    fontFamily: FONT_FAMILY.Regular,
    fontSize: scale(15),
    color: Color.Secondary,
    textAlign: 'center',
  },
});
