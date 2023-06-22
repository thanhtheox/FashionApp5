import {StyleSheet} from 'react-native';
import FONT_FAMILY from './fonts';
import scale from './responsive';

const fontStyles = StyleSheet.create({
  titleFont: {
    fontFamily: FONT_FAMILY.Regular,
    fontSize: scale(18),
    lineHeight: scale(40),
    letterSpacing: scale(4),
    textTransform: 'uppercase',
    color: '#202224',
  },
  subTitle16pxFont: {
    fontFamily: FONT_FAMILY.BoldSecond,
    fontSize: scale(16),
    lineHeight: scale(24),
    letterSpacing: scale(2),
    textTransform: 'uppercase',
    color: '#202224',
  },
  subTitle14pxFont: {
    fontFamily: FONT_FAMILY.Regular,
    fontSize: scale(16),
    lineHeight: scale(26),
    letterSpacing: scale(2),
    textTransform: 'uppercase',
    color: '#202224',
  },
  bodyLargeFont: {
    fontFamily: FONT_FAMILY.Regular,
    fontSize: scale(16),
    lineHeight: scale(24),
    color: '#727272',
  },
  bodyMediumFont: {
    fontFamily: FONT_FAMILY.Regular,
    fontSize: scale(14),
    lineHeight: scale(24),
    color: '#727272',
  },
  bodySmallFont: {
    fontFamily: FONT_FAMILY.Regular,
    fontSize: scale(12),
    lineHeight: scale(18),
    color: '#727272',
  },
});

export default fontStyles;
