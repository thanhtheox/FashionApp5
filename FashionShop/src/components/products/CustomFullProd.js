import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import scale from '../../constants/responsive';
import {IMG_ModelOne} from '../../assets/images/index';
import FONT_FAMILY from '../../constants/fonts';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Color from '../../constants/color';
import fontStyles from '../../constants/fontStyle';
import {IC_Heart} from '../../assets/icons';

const Custom_FullProd = props => {
  const [Liked, setLike] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={props.image} style={styles.img} />
        <TouchableOpacity
          onPress={() => setLike(Liked === true ? false : true)}>
          <IC_Heart
            style={{top: scale(427), left: scale(309)}}
            stroke={Color.Secondary}
            fill={Liked ? Color.Secondary : 'none'}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.textContainer}>
        <Text style={[fontStyles.titleFont, styles.prodName]}>
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

export default Custom_FullProd;

const styles = StyleSheet.create({
  container: {
    width: scale(343),
    height: scale(511.118),
  },
  imgContainer: {
    width: scale(343),
    height: scale(457.33),
  },
  img: {
    position: 'absolute',
    width: scale(343),
    height: scale(457.33),
  },
  textContainer: {
    width: scale(160),
    height: scale(53.83),
  },
  prodDescription: {
    width: scale(158),
    height: scale(20),
    marginTop: scale(-11),
    color: Color.Label,
    letterSpacing: -0.5,
  },
  prodPrice: {
    position: 'absolute',
    top: scale(35.5),
    left: scale(305),
    fontFamily: FONT_FAMILY.JoseFinSansRegular,
    fontSize: scale(15),
    color: Color.Secondary,
  },
});
