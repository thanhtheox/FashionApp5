import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import scale from '../../constants/responsive';
import FONT_FAMILY from '../../constants/fonts';
import color from '../../constants/color';
import fontStyles from '../../constants/fontStyle';

const Custom_FullProd = props => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={props.image} style={styles.img} resizeMode='contain'/>
      </View>
      <View style={styles.textContainer}>
        <Text style={[fontStyles.titleFont, styles.prodName]}>
          {props.prodName}
        </Text>
        <Text style={[fontStyles.bodySmallFont, styles.prodDescription]}>
          {props.prodDescription}
        </Text>
        <Text style={styles.prodPrice}>{props.prodPrice}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Custom_FullProd;

const styles = StyleSheet.create({
  container: {
    width: scale(343),
    height: scale(550),
    flexDirection:'column',
  },
  imgContainer: {
    width: scale(343),
    height: scale(457.33),
  },
  img: {
    justifyContent:'center',
    alignSelf:'center',
    width:'100%',
    height: scale(457.33),
  },
  textContainer: {
    width: scale(160),
    height: scale(53.83),
  },
  prodName: {
    width: scale(100),
    height: scale(35),
    marginTop: scale(20),
    color: color.Label,
    letterSpacing: -0.5,
  },
  prodDescription: {
    width: scale(158),
    height: scale(20),
    color: color.Label,
    letterSpacing: -0.5,
  },
  prodPrice: {
    position: 'absolute',
    top: scale(35.5),
    left: scale(305),
    fontFamily: FONT_FAMILY.JoseFinSansRegular,
    fontSize: scale(15),
    color: color.Secondary,
  },
});
