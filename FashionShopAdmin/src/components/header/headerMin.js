import {StyleSheet, Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import { IC_Backward } from '../../assets/icons';
import color from '../../constants/color';
import FONT_FAMILY from '../../constants/fonts';
import scale from '../../constants/responsive';

const HeaderMin = (props) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={props.onPress}>
        <IC_Backward stroke={color.White}></IC_Backward>
      </TouchableOpacity>
      <View>
        <Text style={styles.textHeader}>{props.text}</Text>
      </View>
    </View>
  );
};

export default HeaderMin;

const styles = StyleSheet.create({
    header:{
        flexDirection: 'row',
        backgroundColor: color.TitleActive,
        flex:0.1,
        alignItems: 'center'
    },
    textHeader:{
        color: color.White,
        fontFamily: FONT_FAMILY.Regular,
        fontSize: 24,
        fontWeight: '700',
    },
});
