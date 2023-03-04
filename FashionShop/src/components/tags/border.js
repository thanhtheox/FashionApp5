import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import FONT_FAMILY from '../../constants/fonts';
import Color from '../../constants/color';
import scale from '../../constants/responsive';
import {IC_Close} from '../../assets/icons';
import {useState} from 'react';

const Custom_Tag2 = props => {
  const [shouldShow, setShouldShow] = useState(true);
  return (
    <View>
      {shouldShow ? (
        <View style={styles.border}>
          <Text style={styles.text}>{props.value}</Text>
          <TouchableOpacity onPress={() => setShouldShow(!shouldShow)}>
            <IC_Close viewBox={`-3 -3 30 30`}/>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
};

export default Custom_Tag2;

const styles = StyleSheet.create({
  border: {
    borderWidth: 1,
    alignSelf: 'center',
    borderRadius: 30,
    padding: scale(6),
    backgroundColor: 'transparent',
    borderColor: Color.Border,
    flexDirection: 'row',
  },
  text: {
    fontFamily: FONT_FAMILY.TenorSans,
    fontSize: scale(14),
    color: Color.Body,
    alignSelf: 'center',
  },
  close: {
    width: scale(4),
    height: scale(12),
  },
});
