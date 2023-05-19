import { StyleSheet, Text, Pressable,View} from 'react-native'
import React from 'react'
import color from '../../../../constants/color';
import scale from '../../../../constants/responsive';
import FONT_FAMILY from '../../../../constants/fonts';

const Custom_UnderlineButtonMenu = (props) => {
  const {isChoosing, onPress, style, textStyle, children} = props;
  return (
    <Pressable
        onPress={onPress}
        style={{flexDirection:'column', alignItems:'center', paddingVertical:scale(3)}}
        >
        <Text style={[styles.text, textStyle]}>{children}</Text>
        <View style={{flexDirection:'row'}}>
          <View style={[styles.borderColor(isChoosing),{borderWidth:1,alignSelf:'center',height:scale(1),width:scale(80)}]}></View>
          <Text style={[styles.background(isChoosing), style]}>◆</Text>
          <View style={[styles.borderColor(isChoosing),{borderWidth:1,alignSelf:'center',height:scale(1),width:scale(80)}]}></View>
        </View>        
    </Pressable>
  )
}

export default Custom_UnderlineButtonMenu

const styles = StyleSheet.create({
  background: isChoosing => ({
    alignSelf: 'center',
    color: isChoosing ? color.Primary : color.GraySolid,
  }),
  borderColor: isChoosing => ({
    borderColor: isChoosing ? color.Primary : color.GraySolid,
  }),
  text: {
    color: color.TitleActive,
    paddingHorizontal: scale(26),
    fontWeight: '400',
    fontSize: scale(4),
    alignSelf: 'center',
    fontFamily: FONT_FAMILY.Regular,
  }
})