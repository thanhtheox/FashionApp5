import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import scale from '../../../../constants/responsive';
import FONT_FAMILY from '../../../../constants/fonts';
import color from '../../../../constants/color';

const CollectionItems = props => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <View style={styles.imgContainer}>
        <Image source={{uri:`${props.image}`}} style={styles.img} resizeMode='cover'/>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.prodNumber}>0{props.prodNumber}</Text>
        <View style={styles.line}/>
        <Text style={styles.prodName}>
          {props.prodName}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CollectionItems;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf:'center',
    marginTop: scale(30),
    marginHorizontal:scale(6),
    width:'100%',
  },
  imgContainer: {
    width: '100%',
  },
  img: {
    width: '100%',
    height: scale(300),
  },
  textContainer: {
    height: scale(40),
    flexDirection:'row',
    justifyContent:'space-between',
    width: scale(320),
  },
  prodName: {
    color: color.OffWhite,
    fontFamily: FONT_FAMILY.Regular,
    letterSpacing:scale(2),
    fontSize:scale(16),
    lineHeight:scale(24),
    alignSelf:'center',
  },
  line: {
    borderColor: color.White,
    borderWidth:1,
    height:scale(0.5),
    alignSelf:'center',
    opacity:0.1,
    flex: 1,
    marginHorizontal: scale(10)
  },
  prodNumber: {
    color: color.OffWhite,
    fontFamily: FONT_FAMILY.Regular,
    letterSpacing:scale(2),
    fontSize:scale(16),
    fontWeight:'600',
    lineHeight:scale(28),
    alignSelf:'center',
  },
});
