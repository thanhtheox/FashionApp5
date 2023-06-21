import { SafeAreaView, StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
//component
import color from '../../../constants/color'
import scale from '../../../constants/responsive'
import FONT_FAMILY from '../../../constants/fonts'
import { IMG_ModelOne } from '../../../assets/images'
import { capitalizeFirstLetter } from '../../../config/uppercaseFirstLetter'

const ItemList = (props) => {
    const item = props.item;
    const index = props.index;
  return (
    <View style={styles.container}>
      <Text style={[styles.text,{fontWeight: '500'}]}>{index + 1}</Text>
      <View style={styles.itemInfoView}>
        <Text style={styles.textTitle} numberOfLines={1}>
          {capitalizeFirstLetter(item.productName.toLowerCase())}
        </Text>
        <Text style={styles.text}>
          SL: {item.quantity}, {item.size}, {item.color}
        </Text>
      </View>
      <Text style={styles.textOrange}>${item.price}</Text>
      <View style={styles.imageView}>
        <Image style={{width: '100%', height: '100%'}} source={{uri: item.image.url}} />
      </View>
    </View>
  );
};

export default ItemList;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
    },
    textTitle: {
        color: color.TitleActive,
        fontFamily: FONT_FAMILY.Regular,
        fontSize: 16,
    },
    text: {
        color: color.TitleActive,
        fontFamily: FONT_FAMILY.Regular,
        fontSize: 12,
    },
    textOrange: {
        color: color.Secondary,
        fontFamily: FONT_FAMILY.Regular,
        fontSize: 18,
    },
    bodyText: {
        color: color.Body,
        fontFamily: FONT_FAMILY.Bold,
        fontSize: scale(24),
        marginLeft: scale(3),
    },
    imageView: {
        width: scale(50),
        height: scale(50)
    }
});
