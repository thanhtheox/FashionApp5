import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import color from '../../../constants/color'
import scale from '../../../constants/responsive'
import FONT_FAMILY from '../../../constants/fonts'

const Order = (props) => {
  return (
    <View style={styles.container}>
        <View style={styles.row}>
            <Text style={styles.text}>{props.number}</Text>
            <View style={{width: scale(30), height: scale(30), borderRadius: 100, overflow: 'hidden', marginHorizontal: scale(10)}}>
                <Image 
                    style={{width: '100%', height: '100%'}} 
                    source={{uri: props.userAvatar || 'https://assets.vogue.in/photos/640592409d03d0d41504f3a0/master/pass/Face%20taping%20.jpg'}}
                />
            </View>
            <Text style={[styles.text, {textTransform: 'uppercase'}]}>{props.userName}</Text>
        </View>
        <View style={{paddingLeft: scale(65), marginTop: scale(10)}}>
            <View style={styles.imageView}>
                <Text style={styles.textOrange}>Order ID: </Text>
                <Text style={styles.text}>{props.orderId}</Text>
            </View>
            <View style={styles.imageView}>
                <Text style={styles.textOrange}>Total: </Text>
                <Text style={styles.text}>$ {props.totalPrice}</Text>
            </View>
            <View style={styles.imageView}>
                <Text style={styles.textOrange}>Order time: </Text>
                <Text style={styles.text}>{props.orderTime}</Text>
            </View>
        </View>
    </View>
  )
}

export default Order

const styles = StyleSheet.create({
    container: {
        borderBottomColor: color.Border,
        paddingVertical: scale(20),
        borderBottomWidth: scale(1),
    },
    text: {
        color: color.TitleActive,
        fontFamily: FONT_FAMILY.Regular,
        fontSize: 18,
    },
    textOrange: {
        color: color.Secondary,
        fontFamily: FONT_FAMILY.Regular,
        fontSize: 18,
    },
    row: {
        flexDirection: 'row',
        paddingLeft: scale(32)
    },
    imageView: {
        flexDirection: 'row', 
        width: '65%'
    }
})