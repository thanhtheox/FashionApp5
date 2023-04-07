import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import scale from '../../../../constants/responsive';
import FONT_FAMILY from '../../../../constants/fonts';
import color from '../../../../constants/color';

const CollectionItems = props => {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={props.image} style={styles.img} />
      </View>
      <View style={styles.textContainer}>
        <View style={{flexDirection:'row'}}>
            <Text style={styles.prodNumber}>0{props.prodNumber}</Text>
            <Text style={styles.line}>━━━━◆━━━━</Text>
        </View>
        <Text style={styles.prodName}>
          {props.prodName}
        </Text>
      </View>
    </View>
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
    color: color.White,
    fontFamily: FONT_FAMILY.Regular,
    fontSize:scale(12),
    lineHeight:scale(14),
    alignSelf:'center',
    textAlign:'center'
  },
  prodNumber: {
    color: color.OffWhite,
    fontFamily: FONT_FAMILY.Regular,
    letterSpacing:scale(2),
    fontSize:scale(16),
    fontWeight:'700',
    lineHeight:scale(28),
    alignSelf:'center',
  },
});