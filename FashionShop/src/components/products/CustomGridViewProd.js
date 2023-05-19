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
    <TouchableOpacity style={styles.container} onPress={props.onPress} >
      <View style={styles.imgContainer}>
        <Image source={{uri:`${props.image}`}} style={styles.img} resizeMode='cover'/>
        {/* <TouchableOpacity
          onPress={() => setLike(Liked === true ? false : true)}>
          <IC_Heart
            style={{left: scale(135)}}
            stroke={Color.Secondary}
            fill={Liked ? Color.Secondary : 'none'}
          />
        </TouchableOpacity> */}
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
