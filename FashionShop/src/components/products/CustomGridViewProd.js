import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import scale from '../../constants/responsive';
import {IMG_ModelOne} from '../../assets/images/index';
import FONT_FAMILY from '../../constants/fonts';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Color from '../../constants/color';
import fontStyles from '../../constants/fontStyle';
import {IC_Heart} from '../../assets/icons';

const Custom_GridViewProd = props => {
  const [Liked, setLike] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={props.image} style={styles.img} />
        <TouchableOpacity
          onPress={() => setLike(Liked === true ? false : true)}>
          <IC_Heart
            style={{top: scale(190), left: scale(135)}}
            stroke={Color.Secondary}
            fill={Liked ? Color.Secondary : 'none'}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.textContainer}>
        <Text style={[fontStyles.bodySmallFont, styles.prodName]}>
          {props.prodName}
        </Text>
        <Text style={[fontStyles.bodySmallFont, styles.prodDescription]}>
          {props.prodDescription}
        </Text>
        <Text style={styles.prodPrice}>${props.prodPrice}</Text>
      </View>
    </View>
  );
};

export default Custom_GridViewProd;

const styles = StyleSheet.create({
  container: {
    width: scale(165),
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
    width: scale(160),
    height: scale(65),
  },
  prodName: {
    marginTop: 5,
    color: Color.TitleActive,
  },
  prodDescription: {
    width: scale(158),
    height: scale(20),
    marginTop: scale(-4),
    color: Color.Label,
    letterSpacing: -0.5,
  },
  prodPrice: {
    fontFamily: FONT_FAMILY.TenorSans,
    fontSize: scale(15),
    color: Color.Secondary,
  },
});
