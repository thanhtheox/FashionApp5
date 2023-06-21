import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import scale from '../../../../constants/responsive';
import FONT_FAMILY from '../../../../constants/fonts';
import color from '../../../../constants/color';

const CollectionProduct = props => {
  const [Liked, setLike] = useState(false);
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress} >
      <View style={styles.imgContainer}>
        <Image source={{uri:`${props.image}`}} style={styles.img} resizeMode='cover'/>
      </View>
      <View style={styles.textContainer}>
        <Text numberOfLines={2} style={styles.prodName}>
          {props.prodName}
        </Text>
        <Text style={styles.prodPrice}>${props.prodPrice}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CollectionProduct;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    width:scale(170),
    height: scale(285),
  },
  imgContainer: {
    width: scale(165),
    height: scale(220),
  },
  img: {
    position: 'absolute',
    width: scale(165),
    height: scale(220),
  },
  textContainer: {
    marginLeft: scale(3),
    justifyContent: 'center',
    alignItems: 'center',
  },
  prodName: {
    marginTop: 5,
    fontFamily: FONT_FAMILY.Regular,
    fontSize: scale(15),
    color: color.OffWhite,
  },
  prodPrice: {
    fontFamily: FONT_FAMILY.Regular,
    fontSize: scale(15),
    color: color.Secondary,
  },
});
