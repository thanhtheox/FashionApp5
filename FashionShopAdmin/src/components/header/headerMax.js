import { StyleSheet, Text, View, TouchableOpacity,Dimensions } from 'react-native'
import React from 'react'
import { IC_Backward } from '../../assets/icons';
import color from '../../constants/color';
import FONT_FAMILY from '../../constants/fonts';
import scale from '../../constants/responsive';

const HeaderMax = (props) => {
  return (
    <View style={styles.header}>
        <View style={styles.viewText}>
          <View style={styles.viewTitleText}>
            <TouchableOpacity onPress={props.onPressBack}>
              <IC_Backward stroke={color.White} />
            </TouchableOpacity>
            <Text style={styles.textTile}>{props.textTitle}</Text>
          </View>
          <TouchableOpacity
            style={styles.viewTextLabel}
            onPress={props.onPress}>
            <Text style={styles.textLabel}>{props.textLabel}</Text>
          </TouchableOpacity>
        </View>
      </View>

  )
}

export default HeaderMax

const styles = StyleSheet.create({
    header: {
        height: Dimensions.get('screen').height * 0.25,
        backgroundColor: color.TitleActive,
        justifyContent: 'flex-end',
        paddingBottom: scale(30),
      },
      viewText: {
        // marginTop: scale(80),
      },
      viewTitleText: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      textTile: {
        color: color.White,
        fontSize: 36,
        fontFamily: FONT_FAMILY.Bold,
      },
      viewTextLabel: {
        marginLeft: scale(30),
        backgroundColor: color.InputBackground,
        paddingHorizontal:scale(5),
        alignSelf:'flex-start',
        alignItems: 'center',
        marginTop: scale(10),
      },
      textLabel: {
        color: color.TitleActive,
        fontSize: 24,
        fontFamily: FONT_FAMILY.Bold,
      },
})