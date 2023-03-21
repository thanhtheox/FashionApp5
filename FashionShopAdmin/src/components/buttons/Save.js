import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Color from '../../constants/color';
import scale from '../../constants/responsive';
import FONT_FAMILY from '../../constants/fonts';

const SaveButton = props => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
            <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
    
  );
};

export default SaveButton;

const styles = StyleSheet.create({
  container: {
    width: scale(295),
    height: scale(61),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.TitleActive,
  },
  text: {
    fontWeight: '700',
    fontSize: scale(24),
    textAlign: 'center',
    color: Color.White,
    fontFamily: FONT_FAMILY.JoseFinSansRegular,
  },
});
