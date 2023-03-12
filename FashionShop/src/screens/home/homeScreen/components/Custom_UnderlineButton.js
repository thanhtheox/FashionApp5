import { StyleSheet, Text, Pressable} from 'react-native'
import React from 'react'
import color from '../../../../constants/color';
import scale from '../../../../constants/responsive';
import FONT_FAMILY from '../../../../constants/fonts';

const Custom_UnderlineButton = (props) => {
  const {isChoosing, onPress, style, textStyle, children} = props;
  return (
    <Pressable
        onPress={onPress}
        >
        <Text style={[styles.text, textStyle]}>{children}</Text>
        <Text style={[styles.background(isChoosing), style]}>•</Text>
    </Pressable>
  )
}

export default Custom_UnderlineButton

const styles = StyleSheet.create({
  background: isChoosing => ({
    alignSelf: 'center',
    marginTop: scale(3),
    color: isChoosing ? color.Primary : 'transparent',
  }),
  text: {
    color: color.PlaceHolder,
    padding: scale(26),
    fontWeight: '400',
    fontSize: scale(4),
    alignSelf: 'center',
    fontFamily: FONT_FAMILY.JoseFinSansRegular,
  }
})