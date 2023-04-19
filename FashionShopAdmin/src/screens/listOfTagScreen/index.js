import { SafeAreaView, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import color from '../../constants/color'
import scale from '../../constants/responsive'
import FONT_FAMILY from '../../constants/fonts'
import { DataTable } from 'react-native-paper'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { IC_Backward, IC_BackwardArrow } from '../../assets/icons'
import useAxiosPrivate from '../../hooks/useAxiosPrivate'
import HeaderMax from '../../components/header/headerMax'

// const tagData=[
//     {id: 1,name: 'Salmon', type: {product: true, blog: true}},
//     {id: 2,name: 'Red', type: {product: true, blog: true}},
//     {id: 3,name: 'Tan', type: {product: false, blog: true}},
//     {id: 4,name: 'Pink', type: {product: true, blog: true}},
//     {id: 5,name: 'Tomato', type: {product: true, blog: false}},
//     {id: 6,name: 'Orange', type: {product: true, blog: true}},
//     {id: 7,name: 'Violet', type: {product: true, blog: true}},
//     {id: 8,name: 'BlueViolet', type: {product: true, blog: true}},
//     {id: 9,name: 'LimeGreen', type: {product: true, blog: true}},
// ];

const dataSize=[
    {id: 1, size: 'S', width: '56', length: '68'},
    {id: 2, size: 'M', width: '58', length: '72'},
    {id: 3, size: 'L', width: '60', length: '74'},
];

const ListOfTagScreen = (props) => {
    const [tagData, setTag] = useState([]);
    const axiousPrivate = useAxiosPrivate();

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const getTags = async () => {
            try {
                const response = await axiousPrivate.get('/get-all-tag', {
                    signal: controller.signal
                });
                console.log((response.data));
                isMounted && setTag(response.data);
            } 
            catch (err) {
                console.log(err.response.data);
            }
        }

        getTags();

        return () => {
            isMounted = false;
            controller.abort();
        }

    }, [])
    return (
        <SafeAreaView style={styles.container}>
            <HeaderMax navigation={props.navigation} textTitle={'List of tags'} textLabel={'Add tags'}/>


            <View style={styles.body}>
                <DataTable style={{flex: 1}}>
                    <DataTable.Header>
                        <DataTable.Title textStyle={styles.text}>No.</DataTable.Title>
                        <DataTable.Title textStyle={styles.text}>Name</DataTable.Title>
                        <DataTable.Title textStyle={styles.text}>Type</DataTable.Title>
                    </DataTable.Header>
                    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{flexGrow: 1}}>
                        {tagData.map((tag, index) => (
                            <TouchableOpacity key={tag._id}>
                                <DataTable.Row style={{height: scale(70)}} >
                                    <DataTable.Cell textStyle={styles.text}>{index}</DataTable.Cell>
                                    <DataTable.Cell textStyle={styles.text}>{tag.name}</DataTable.Cell>
                                        <View>
                                            <BouncyCheckbox
                                                size={25}
                                                fillColor="black"
                                                unfillColor="#FFFFFF"
                                                text="Product"
                                                iconStyle={{ borderColor: "black", borderRadius: 0 }}
                                                innerIconStyle={{ borderWidth: 2, borderRadius: 0 }}
                                                onPress={(isChecked) => {}}
                                                style={{flexDirection: 'row-reverse', justifyContent: 'space-between', gap: scale(15)}}
                                                textStyle={styles.text}
                                            />
                                            <View style={{height: scale(10)}}/>
                                            <BouncyCheckbox
                                                size={25}
                                                fillColor="black"
                                                unfillColor="#FFFFFF"
                                                text="Blog"
                                                iconStyle={{ borderColor: "black", borderRadius: 0 }}
                                                innerIconStyle={{ borderWidth: 2, borderRadius: 0 }}
                                                onPress={(isChecked) => {}}
                                                style={{flexDirection: 'row-reverse', justifyContent: 'space-between', gap: scale(15)}}
                                                textStyle={{fontWeight: '600', fontSize: 15, fontFamily: FONT_FAMILY.Regular, textDecorationLine: "none", color: color.TitleActive}}
                                            />
                                        </View>
                                </DataTable.Row>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
            </DataTable>
            </View>
        </SafeAreaView>
    )
}

export default ListOfTagScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    body:{
        flex: 1,
        padding: scale(15),
        backgroundColor: color.InputBackground,
    },
    text: {
        fontWeight: '600', 
        fontSize: 18, 
        fontFamily: FONT_FAMILY.Regular, 
        textDecorationLine: "none", 
        color: color.TitleActive
        
    }
})