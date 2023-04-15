import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import scale from '../../../../../constants/responsive';
import FONT_FAMILY from '../../../../../constants/fonts';
import color from '../../../../../constants/color';
import fontStyles from '../../../../../constants/fontStyle';
import LinearGradient from 'react-native-linear-gradient';

const BlogItems = props => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
        <View style={styles.imgContainer}>
            <Image source={props.image} style={styles.img} resizeMode='contain'/>
        </View>
        <LinearGradient style={styles.textContainer} colors={['#00000000', '#000000']} >
            <Text style={[fontStyles.subTitle14pxFont,styles.prodName]}>{props.prodName}</Text>
        </LinearGradient>
    </TouchableOpacity>
  );
};

export default BlogItems;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent:'center',
    marginTop: scale(20),
    width: '100%',
  },
  imgContainer: {
    width: scale(320),
    alignSelf:'center',
  },
  img: {
    width: scale(320),
  },
  textContainer: {
    position:'absolute',
    display:'flex',
    bottom:scale(0),
    marginLeft:scale(14),
    width:scale(312),
    height:scale(60)
  },
  prodName: {
    color: color.OffWhite,
    fontFamily: FONT_FAMILY.Regular,
    letterSpacing:scale(2),
    fontWeight:'600',
    alignSelf:'center',
  },
});
