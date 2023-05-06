import { SafeAreaView, StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import HeaderMin from '../../components/header/headerMin'
import color from '../../constants/color'
import scale from '../../constants/responsive'
import FONT_FAMILY from '../../constants/fonts'
import { IMG_ModelOne } from '../../assets/images'

const OrderDetailScreen = (props) => {
    const [items, setItems] = useState([
        {
            name: 'Cadigan',
            qty: 1,
            size: 'S',
            itemColor: 'red',
            price: 10,
        },
        {
            name: 'Cadigan',
            qty: 1,
            size: 'S',
            itemColor: 'red',
            price: 10,
        },
        {
            name: 'Cadigan',
            qty: 1,
            size: 'S',
            itemColor: 'red',
            price: 10,
        },
        {
            name: 'Cadigan',
            qty: 1,
            size: 'S',
            itemColor: 'red',
            price: 10,
        },
        {
            name: 'Cadigan',
            qty: 1,
            size: 'S',
            itemColor: 'red',
            price: 10,
        },
    ])
    return (
        <SafeAreaView style={styles.container}>
            <HeaderMin text={"Orders details"} onPress={()=>props.navigation.goBack()}/>
            <View style={styles.body}>
{/* generalInfo */}
            <ScrollView style={{paddingVertical: scale(20)}}>
                <View style={styles.row}>
                    <Text style={styles.textOrange}>Order ID: </Text>
                    <Text style={styles.text}>{props.orderId}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.textOrange}>Receiver: </Text>
                    <Text style={styles.text}>{props.orderId}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.textOrange}>Address: </Text>
                    <Text style={styles.text}>{props.orderId}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.textOrange}>Order Status: </Text>
                    <Text style={styles.text}>{props.orderId}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.textOrange}>Order Status: </Text>
                    <Text style={styles.text}>{props.orderId}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.textOrange}>Order date: </Text>
                    <Text style={styles.text}>{props.orderId}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.textOrange}>Completed: </Text>
                    <Text style={styles.text}>{props.orderId}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.textOrange}>Note: </Text>
                    <Text style={styles.text}>{props.orderId}</Text>
                </View>
                <View>
                    <Text style={styles.bodyText}>Item list</Text>
                    {
                        items.map((item, index) => (
                            <>
                                <View style={[styles.row, {justifyContent: 'space-around', alignItems: 'center'}]} key={index}>
                                    <Text style={styles.text}>{index + 1}</Text>
                                    <View style={styles.itemInfoView}>
                                        <Text style={styles.text}>{item.name}</Text>
                                        <Text style={styles.text}>SL: {item.qty}, {item.size}, {item.itemColor}</Text>
                                    </View>
                                    <Text style={styles.text}>{item.price}</Text>
                                    <View style={styles.imageView}>
                                        <Image style={{width: '100%', height: '100%'}} source={IMG_ModelOne}/>
                                    </View>
                                </View>
                            </>
                        ))
                    }
                    <View style={styles.row}>
                        <Text style={styles.text}>Total items: </Text>
                        <Text style={styles.text}>{props.orderId}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.text}>Total Price: </Text>
                        <Text style={styles.text}>{props.orderId}</Text>
                    </View>
                </View>     
            </ScrollView>
            </View>
            
        </SafeAreaView>
    )
}

export default OrderDetailScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.White,
    },
    body: {
        flex: 0.9,
        paddingHorizontal: scale(10),
        //paddingVertical: scale(20),
        //marginVertical: scale(20)
    },
    row: {
        flexDirection: 'row',
        marginBottom: scale(7)
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
})