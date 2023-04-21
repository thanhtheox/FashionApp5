import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import scale from '../../../../constants/responsive';
import FONT_FAMILY from '../../../../constants/fonts';
import color from '../../../../constants/color';
import fontStyles from '../../../../constants/fontStyle';

const SuggestiveCollection = props => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <View style={styles.imgContainer}>
        <Image source={props.image} style={styles.img} />
      </View>
      <View style={styles.textContainer}>
        <Text style={[fontStyles.bodySmallFont, styles.prodName]}>
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

export default SuggestiveCollection;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    marginHorizontal:scale(6),
    height: scale(285),
  },
  imgContainer: {
    width: scale(180),
    height: scale(220),
  },
  img: {
    position: 'absolute',
    width: scale(180),
    height: scale(220),
  },
  textContainer: {
    marginLeft: scale(3),
    width: scale(160),
    height: scale(65),
  },
  prodName: {
    marginTop: 5,
    color: color.OffWhite,
  },
  prodDescription: {
    width: scale(158),
    height: scale(20),
    color: color.Label,
    letterSpacing: -0.5,
  },
  prodPrice: {
    fontFamily: FONT_FAMILY.JoseFinSansRegular,
    fontSize: scale(15),
    color: color.Secondary,
  },
});
