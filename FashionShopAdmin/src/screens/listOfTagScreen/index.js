import { SafeAreaView, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import color from '../../constants/color'
import scale from '../../constants/responsive'
import FONT_FAMILY from '../../constants/fonts'
import { DataTable } from 'react-native-paper'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { IC_Backward, IC_BackwardArrow } from '../../assets/icons'

const tagData=[
    {id: 1,name: 'Salmon', type: {product: true, blog: true}},
    {id: 2,name: 'Red', type: {product: true, blog: true}},
    {id: 3,name: 'Tan', type: {product: false, blog: true}},
    {id: 4,name: 'Pink', type: {product: true, blog: true}},
    {id: 5,name: 'Tomato', type: {product: true, blog: false}},
    {id: 6,name: 'Orange', type: {product: true, blog: true}},
    {id: 7,name: 'Violet', type: {product: true, blog: true}},
    {id: 8,name: 'BlueViolet', type: {product: true, blog: true}},
    {id: 9,name: 'LimeGreen', type: {product: true, blog: true}},
];

const dataSize=[
  {id: 1, size: 'S', width: '56', length: '68'},
  {id: 2, size: 'M', width: '58', length: '72'},
  {id: 3, size: 'L', width: '60', length: '74'},

];

const ListOfTagScreen = (props) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
            
                <View style={styles.viewText}>
                
                    <View style={styles.viewTitleText}>
                        <TouchableOpacity onPress={()=>props.navigation.goBack()}>
                            <IC_Backward stroke={color.White} ></IC_Backward>
                        </TouchableOpacity>
                        <Text style={styles.textTile}>List of tags</Text>
                    </View>
                    <View style={styles.viewLabel}>
                        <TouchableOpacity style={styles.viewTextLabel} onPress={()=>props.navigation.navigate("AddTag")}>
                            <Text style={styles.textLabel}>Add tag</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>


            <View style={styles.body}>
                <DataTable style={{flex: 1}}>
                    <DataTable.Header>
                        <DataTable.Title textStyle={styles.text}>No.</DataTable.Title>
                        <DataTable.Title textStyle={styles.text}>Name</DataTable.Title>
                        <DataTable.Title textStyle={styles.text}>Type</DataTable.Title>
                    </DataTable.Header>
                    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{flexGrow: 1}}>
                        {tagData.map((tag) => (
                            <TouchableOpacity key={tag.id}>
                                <DataTable.Row style={{height: scale(70)}} >
                                    <DataTable.Cell textStyle={styles.text}>{tag.id}</DataTable.Cell>
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
    header: {
        flex: 0.25,
        backgroundColor: color.TitleActive,
        justifyContent: 'flex-end',
        paddingBottom: scale(20),
    },
    viewText:{
        marginTop: scale(30),
    },
    
    viewTitleText: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textTile: {
        color: color.White,
        fontSize: scale(36),
        fontFamily: FONT_FAMILY.JoseFinSans,
        fontWeight: '600',
    },
    viewLabel:{
        flexDirection: 'row',
        marginTop: scale(10),
        marginLeft: scale(30)
    },
    viewTextLabel:{
        width: scale(122),
        height: scale(36),
        backgroundColor: color.AthensGray,
        alignItems: 'center',
        marginRight: scale(20)
    },
    textLabel: {
        color: color.TitleActive,
        fontSize: 24,
        fontFamily: FONT_FAMILY.JoseFinSans,
        fontWeight: '600',
    },
    body:{
        flex: 0.75,
        padding: scale(15),
        backgroundColor: color.InputBackground,
    },
    viewTextSize:{
        width: '25%',
        alignItems: 'center'
    },
    checkView: {width: scale(130), gap: scale(10), margin: scale(15), height: scale(20)},
    text: {
        fontWeight: '600', 
        fontSize: 18, 
        fontFamily: FONT_FAMILY.Regular, 
        textDecorationLine: "none", 
        color: color.TitleActive
        
    }
})